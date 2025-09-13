import {PrismaClient} from "../generated/prisma"
import bcrypt from "bcrypt";
import crypto from "crypto";
import {v4 as uuidv4} from "uuid"

import {AuthenticationError, ConflictError, DatabaseError, ErrorFactory, ValidationError} from "../types/Error.ts";
import type {Credentials, NewUser, SanitizedUser} from "../types/User.ts";
import {comparePasswords, hashPassword} from "../utils/Password.ts";
import {generateAccessToken, generateRefreshToken} from "../utils/Tokens.ts";
import {EmailService} from "../utils/EmailService.ts";
import type {TierInfo} from "../types/API.ts";


export class UserService {
    private static prisma = new PrismaClient()

    async renameKey(newName: string, apiKey: string, userId: string): Promise<void> {
        await this.validateName(newName, userId)

        const lookupHash = crypto.createHash("sha256").update(apiKey).digest("hex");
        try {
            const updatedKey = await UserService.prisma.apiKey.updateMany({
                data: {
                    name: newName.trim()
                },
                where: {
                    keyLookup: lookupHash,
                    userId: userId
                }
            });

            // Check if the API key was actually found and updated
            if (updatedKey.count === 0) {
                throw new ValidationError("API key not found or does not belong to user");
            }

        } catch (error: any) {
            console.error("API key rename error:", error);

            if (error instanceof ConflictError || error instanceof ValidationError) {
                throw error;
            }

            // Handle specific Prisma errors
            if (error.code === 'P2002') { // Unique constraint violation
                throw new ConflictError("An API key with this name already exists");
            }

            throw new DatabaseError("Failed to rename API key.")
        }

    }

    async deleteApiKey(apiKey: string, userId: string): Promise<void> {
        const lookupHash = crypto.createHash("sha256").update(apiKey).digest("hex");

        try {
            await UserService.prisma.$transaction(async (tx) => {
                const keyCount = await tx.apiKey.count({
                    where: {userId: userId}
                });

                if (keyCount <= 1) {
                    throw new ConflictError("Cannot delete the last API key. You must have at least one key.");
                }

                const deletedKey = await tx.apiKey.deleteMany({
                    where: {
                        userId: userId,
                        keyLookup: lookupHash
                    }
                });

                if (deletedKey.count === 0) {
                    throw new ValidationError("API key not found or does not belong to user");
                }
            });

        } catch (error: any) {
            if (error instanceof ConflictError || error instanceof ValidationError) {
                throw error;
            }

            console.error("Deletion error:", error);
            throw new DatabaseError("Failed to delete API key");
        }
    }

    async generateNewKey(userId: string, name: string): Promise<void> {

        await this.validateName(name, userId);
        const {apiKey, hashed: hashedApiKey, lookupHash} = await this.generateApiKey("live");
        try {
            await UserService.prisma.apiKey.create({
                data: {
                    userId,
                    name: name.trim(),
                    keyLookup: lookupHash,
                    keyHash: hashedApiKey
                }
            });

            try {
                const user = await UserService.prisma.users.findUnique({
                    where: {userId}
                })
                const emailService = new EmailService();
                await emailService.sendNewApiKey(user!.email, apiKey)
            } catch (error) {
                console.error("new key email failed:", error);
            }

        } catch (error: any) {
            console.error("API key creation error:", error);

            if (error instanceof ConflictError || error instanceof ValidationError) {
                throw error;
            }

            throw new DatabaseError("Failed to generate new API key");
        }
    }

    async login(creds: Credentials): Promise<[SanitizedUser, string, string]> {
        this.validateLoginInput(creds);

        const normalizedEmail = creds.email.toLowerCase().trim();
        let user;
        let passwordsMatch = false;

        try {
            user = await UserService.prisma.users.findUnique({
                where: {email: normalizedEmail}
            });

            if (user) {
                passwordsMatch = await comparePasswords(creds.password, user.passwordHash);
            }
        } catch (error: any) {
            console.error("Login error:", error);
            throw new AuthenticationError("Invalid credentials");
        }

        if (!user || !passwordsMatch) {
            throw new AuthenticationError("Invalid credentials");
        }

        const sanitizedUser: SanitizedUser = {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            company: user.company,
        }

        const tokens = this.generateAuthTokens(sanitizedUser);
        return [sanitizedUser, tokens.accessToken, tokens.refreshToken];
    }

    async signup(newUser: NewUser): Promise<void> {
        this.validateSignUpInput(newUser);
        const normalizedEmail = await this.validateAndNormalizeEmail(newUser.email)

        // generate user id
        const userId = uuidv4()

        let hashedPassword
        try {
            hashedPassword = await hashPassword(newUser.password)
        } catch (error: any) {
            // Let ValidationError bubble up to show password requirements
            if (error instanceof ValidationError) {
                throw error;
            }
            console.error("Password hashing error:", error);
            throw new DatabaseError("Failed to create account");
        }

        const {apiKey, hashed: hashedApiKey, lookupHash} = await this.generateApiKey("live");

        // Insert user + API key into DB
        try {
            await UserService.prisma.users.create({
                data: {
                    userId: userId,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    passwordHash: hashedPassword,
                    email: normalizedEmail,
                    company: newUser.company,
                    ApiKey: {
                        create: {
                            keyHash: hashedApiKey,
                            keyLookup: lookupHash,
                            name: "Default Key",
                        },
                    },
                },
            });
        } catch (error: any) {
            console.error("Insertion error:", error);
            throw new DatabaseError("Failed to create user");
        }

        try {
            const emailService = new EmailService();
            await emailService.sendWelcomeEmail(normalizedEmail, apiKey);
            console.log("email sent")
        } catch (error) {
            console.error("Welcome email failed:", error);
        }
    }

    // UserService.ts - Add this method
    async pricing(): Promise<TierInfo[]> {
        try {
            const tiers = await UserService.prisma.pricingTier.findMany({
                orderBy: [
                    {price: 'asc'},
                    {name: 'asc'}
                ]
            });

            return tiers as TierInfo[]; // Type assertion
        } catch (error: any) {
            console.error("Failed to fetch pricing tiers:", error);
            throw new DatabaseError("Failed to retrieve pricing information");
        }
    }

    async countKeys(userId: string): Promise<number> {
        return UserService.prisma.apiKey.count({
            where: {userId: userId},
        });
    }

    private validateLoginInput(creds: Credentials) {
        if (!creds.email?.trim()) {
            throw new ValidationError("Email is required");
        }
        if (!creds.password) {
            throw new ValidationError("Password is required");
        }
        if (creds.email.length > 254) { // Email length limit
            throw new ValidationError("Invalid email format");
        }
    }

    private validateSignUpInput(newUser: NewUser) {
        if (!newUser.email?.trim()) {
            throw new ValidationError("Email is required");
        }
        if (!newUser.password) {
            throw new ValidationError("Password is required");
        }
        if (newUser.email.length > 254) {
            throw new ValidationError("Invalid email format");
        }
        if (!newUser.firstName || !newUser.lastName) {
            throw new ValidationError("First and Last names are required");
        }
    }

    private generateAuthTokens(user: SanitizedUser): {
        accessToken: string;
        refreshToken: string;
    } {
        try {
            return {
                accessToken: generateAccessToken(user.userId, user.email),
                refreshToken: generateRefreshToken(user.userId, user.email),
            };
        } catch (error) {
            console.error("Token generation error:", error);
            const tokenError = new Error("Failed to generate authentication tokens");
            (tokenError as any).status = 500;
            throw tokenError;
        }
    }

    private async validateAndNormalizeEmail(email: string, excludeUserId?: string): Promise<string> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const normalizedEmail = email.toLowerCase().trim();

        if (!emailRegex.test(normalizedEmail)) {
            throw ErrorFactory.invalidEmail()
        }

        try {
            const existingUser = await UserService.prisma.users.findUnique({
                where: {email: normalizedEmail}
            })
            if (existingUser && existingUser.userId !== excludeUserId) {
                throw ErrorFactory.emailTaken();
            }
            return normalizedEmail;
        } catch (error: any) {
            if (error instanceof ValidationError || error instanceof ConflictError) {
                throw error;
            }
            // Wrap database errors
            throw new DatabaseError("Failed to validate email");
        }
    }

    private async validateName(name: string, userId: string): Promise<void> {
        if (!name?.trim()) {
            throw new ValidationError("API key name is required");
        }

        if (name.trim().length > 100) {
            throw new ValidationError("API key name is too long");
        }

        const existingKey = await UserService.prisma.apiKey.findFirst({
            where: {
                userId,
                name: name.trim()
            }
        });

        if (existingKey) {
            throw new ConflictError("An API key with this name already exists");
        }
    }

    private async generateApiKey(env: "live" | "test" = "live") {
        const raw = crypto.randomBytes(32).toString("hex");
        const apiKey = `penguin_${env}_sk_${raw}`;

        const hashed = await bcrypt.hash(apiKey, 10);

        // SHA256 lookup hash for fast DB query
        const lookupHash = crypto.createHash("sha256").update(apiKey).digest("hex");

        return {apiKey, hashed, lookupHash};
    }
}