import {PrismaClient} from "../generated/prisma/index.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import {v4 as uuidv4} from "uuid";

import {
    AuthenticationError,
    ConflictError,
    DatabaseError,
    ErrorFactory,
    InternalServerError,
    NotFoundError,
    ValidationError,
} from "../types/Error.ts";
import type {Credentials, NewUser, SanitizedUser, UpdateUserData,} from "../types/User.ts";
import {comparePasswords, hashPassword} from "../utils/Password.ts";
import {generateAccessToken, generateRefreshToken} from "../utils/Tokens.ts";
import {EmailService} from "../utils/EmailService.ts";
import type {ApiKey, TierInfo} from "../types/API.ts";

export class UserService {
    private static prisma = new PrismaClient();

    async initiatePasswordReset(email: string): Promise<void> {
        try {
            const user = await UserService.prisma.users.findFirst({
                where: {email: email.toLowerCase()},
            });

            if (!user) {
                console.error(`Password reset attempted for non-existent email: ${email}`);
                throw new NotFoundError();
            }

            const resetToken = crypto.randomBytes(32).toString('hex');
            const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

            await UserService.prisma.passwordResets.create({
                data: {
                    userId: user.userId,
                    token: resetToken,
                    expiresAt: resetTokenExpiry,
                    createdAt: new Date(),
                },
            });

            const emailService = new EmailService();
            await emailService.sendPasswordResetEmail(user.email, user.firstName, resetToken)

        } catch (error: any) {
            console.error("Database error in initiatePasswordReset:", error);
            throw new DatabaseError("Failed to initiate password reset");
        }
    }

    async resetPassword(token: string, newPassword: string): Promise<void> {
        try {
            const resetRecord = await UserService.prisma.passwordResets.findFirst({
                where: {
                    token,
                    expiresAt: {gte: new Date()},
                    usedAt: null,
                },
                include: {
                    user: true,
                },
            });

            if (!resetRecord) {
                throw new NotFoundError("Invalid or expired reset token");
            }

            const hashedPassword = await bcrypt.hash(newPassword, 12);

            await UserService.prisma.$transaction([
                UserService.prisma.users.update({
                    where: {userId: resetRecord.userId},
                    data: {
                        passwordHash: hashedPassword,
                        updatedAt: new Date(),
                    },
                }),
                UserService.prisma.passwordResets.update({
                    where: {id: resetRecord.id},
                    data: {
                        usedAt: new Date(),
                    },
                }),
            ]);

            await UserService.prisma.passwordResets.updateMany({
                where: {
                    userId: resetRecord.userId,
                    usedAt: null,
                    id: {not: resetRecord.id},
                },
                data: {
                    usedAt: new Date(),
                },
            });

        } catch (error: any) {
            if (error instanceof NotFoundError) {
                throw error;
            }

            console.error("Database error in resetPassword:", error);
            throw new DatabaseError("Failed to reset password");
        }
    }

    async deleteAccount(userId: string): Promise<void> {
        try {
            if (!userId) {
                throw new ValidationError("User ID is required");
            }
            const existingUser = await UserService.prisma.users.findUnique({
                where: {userId},
                select: {userId: true},
            });

            if (!existingUser) {
                throw new NotFoundError("User not found");
            }

            await UserService.prisma.users.delete({
                where: {userId}
            })
        } catch (error: any) {
            console.error("Database error in deleteAccount:", error);
            if (error instanceof ValidationError || error instanceof NotFoundError) {
                throw error;
            }
            throw new DatabaseError("Failed to delete user");

        }
    }

    async getKeys(userId: string): Promise<ApiKey[] | null> {
        try {
            if (!userId) {
                throw new ValidationError("User ID is required");
            }
            return await UserService.prisma.apiKey.findMany({
                where: {
                    userId: userId,
                },
            });
        } catch (error: any) {
            if (error instanceof ValidationError || error instanceof NotFoundError) {
                throw error;
            }
            throw new InternalServerError("Failed to generate comprehensive report");
        }
    }

    async updateUser(userId: string, updateData: UpdateUserData): Promise<void> {
        try {
            const existingUser = await UserService.prisma.users.findUnique({
                where: {userId},
            });

            if (!existingUser) {
                throw new NotFoundError("User not found");
            }

            this.validateUpdateData(updateData);

            if (updateData.email && updateData.email !== existingUser.email) {
                const emailExists = await UserService.prisma.users.findFirst({
                    where: {
                        email: updateData.email,
                        userId: {not: userId}, // Exclude current user
                    },
                });

                if (emailExists) {
                    throw new ConflictError("Email already in use");
                }
            }

            await UserService.prisma.users.update({
                where: {userId},
                data: {
                    ...updateData,
                    updatedAt: new Date(),
                },
            });
        } catch (error: any) {
            if (
                error instanceof ValidationError ||
                error instanceof NotFoundError ||
                error instanceof ConflictError
            ) {
                throw error;
            }
            if (error.code === "P2002") {
                throw new ConflictError("Email already in use");
            }

            if (error.code === "P2025") {
                throw new NotFoundError("User not found");
            }

            console.error("Database error in updateUser:", error);
            throw new DatabaseError("Failed to update user");
        }
    }

    async renameKey(
        newName: string,
        keyId: string,
        userId: string,
    ): Promise<void> {
        await this.validateName(newName, userId);

        try {
            const updatedKey = await UserService.prisma.apiKey.updateMany({
                data: {
                    name: newName.trim(),
                },
                where: {
                    id: keyId,
                    userId: userId,
                },
            });

            // Check if the API key was actually found and updated
            if (updatedKey.count === 0) {
                throw new ValidationError(
                    "API key not found or does not belong to user",
                );
            }
        } catch (error: any) {
            console.error("API key rename error:", error);

            if (error instanceof ConflictError || error instanceof ValidationError) {
                throw error;
            }

            // Handle specific Prisma errors
            if (error.code === "P2002") {
                // Unique constraint violation
                throw new ConflictError("An API key with this name already exists");
            }

            throw new DatabaseError("Failed to rename API key.");
        }
    }

    async deleteApiKey(keyId: string, userId: string): Promise<void> {
        try {
            await UserService.prisma.$transaction(async (tx) => {
                const keyCount = await tx.apiKey.count({
                    where: {userId: userId},
                });

                if (keyCount <= 1) {
                    throw new ConflictError(
                        "Cannot delete the last API key. You must have at least one key.",
                    );
                }

                await tx.apiKey.delete({
                    where: {
                        id: keyId,
                        userId: userId, // Double-check ownership
                    },
                });
            });
        } catch (error: any) {
            if (error instanceof ConflictError) {
                throw error;
            }
            if (error.code === "P2025") {
                throw new ValidationError(
                    "API key not found or does not belong to user",
                );
            }
            console.error("Deletion error:", error);
            throw new DatabaseError("Failed to delete API key");
        }
    }

    async generateNewKey(userId: string, name: string): Promise<void> {
        await this.validateName(name, userId);
        const {
            apiKey,
            hashed: hashedApiKey,
            lookupHash,
        } = await this.generateApiKey("live");
        try {
            await UserService.prisma.apiKey.create({
                data: {
                    userId,
                    name: name.trim(),
                    keyLookup: lookupHash,
                    keyHash: hashedApiKey,
                },
            });

            try {
                const user = await UserService.prisma.users.findUnique({
                    where: {userId},
                });
                const emailService = new EmailService();
                await emailService.sendNewApiKey(user!.email, apiKey);
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
                where: {email: normalizedEmail},
            });

            if (user) {
                passwordsMatch = await comparePasswords(
                    creds.password,
                    user.passwordHash,
                );
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
        };

        const tokens = this.generateAuthTokens(sanitizedUser);
        return [sanitizedUser, tokens.accessToken, tokens.refreshToken];
    }

    async signup(newUser: NewUser): Promise<[SanitizedUser, string, string]> {
        this.validateSignUpInput(newUser);
        const normalizedEmail = await this.validateAndNormalizeEmail(newUser.email);

        // generate user id
        const userId = uuidv4();

        let hashedPassword;
        try {
            hashedPassword = await hashPassword(newUser.password);
        } catch (error: any) {
            if (error instanceof ValidationError) {
                throw error;
            }
            console.error("Password hashing error:", error);
            throw new DatabaseError("Failed to create account");
        }

        const {
            apiKey,
            hashed: hashedApiKey,
            lookupHash,
        } = await this.generateApiKey("live");

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
            const sanitizedUser: SanitizedUser = {
                userId: userId,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                company: newUser.company,
            };

            const tokens = this.generateAuthTokens(sanitizedUser);
            try {
                const emailService = new EmailService();
                await emailService.sendWelcomeEmail(normalizedEmail, apiKey);
            } catch (error) {
                console.error("Welcome email failed:", error);
            }
            return [sanitizedUser, tokens.accessToken, tokens.refreshToken];
        } catch (error: any) {
            console.error("Insertion error:", error);
            throw new DatabaseError("Failed to create user");
        }
    }

    // UserService.ts - Add this method
    async pricing(): Promise<TierInfo[]> {
        try {
            const tiers = await UserService.prisma.pricingTier.findMany({
                orderBy: [{price: "asc"}, {name: "asc"}],
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

    async getUserByUserId(userId: string): Promise<SanitizedUser> {
        if (!userId || userId.trim() == "") {
            throw new ValidationError("User id is required");
        }
        let user;
        try {
            user = await UserService.prisma.users.findUnique({
                where: {userId: userId},
            });
            if (!user) {
                throw new ValidationError("User does not exist");
            }
        } catch (error: any) {
            if (error instanceof ValidationError) {
                throw error;
            }

            console.error("Get user by email:", error);
            throw new DatabaseError("Failed to retrieve user");
        }

        return {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            company: user.company,
        };
    }

    async updatePassword(
        userId: string,
        oldPassword: string,
        newPassword: string,
    ): Promise<void> {
        let user;
        try {
            user = await UserService.prisma.users.findUnique({
                where: {
                    userId: userId,
                },
            });
            if (!user) {
                throw ErrorFactory.userNotFound();
            }

            // Verify old password
            const isOldPasswordValid = await bcrypt.compare(
                oldPassword,
                user.passwordHash,
            );

            if (!isOldPasswordValid) {
                throw new ValidationError("Current password is incorrect");
            }

            const isSamePassword = await bcrypt.compare(
                newPassword,
                user.passwordHash,
            );
            if (isSamePassword) {
                throw new ValidationError(
                    "New Password must be different from current password",
                );
            }

            const hashedPassword = await hashPassword(newPassword);
            await UserService.prisma.users.update({
                where: {
                    userId: userId,
                },
                data: {
                    passwordHash: hashedPassword,
                    updatedAt: new Date(),
                },
            });
        } catch (error: any) {
            if (error instanceof ValidationError || error instanceof NotFoundError) {
                throw error;
            }

            console.error("Password update error:", error);
            throw new DatabaseError("Failed to update password");
        }
    }

    private validateLoginInput(creds: Credentials) {
        if (!creds.email?.trim()) {
            throw new ValidationError("Email is required");
        }
        if (!creds.password) {
            throw new ValidationError("Password is required");
        }
        if (creds.email.length > 254) {
            // Email length limit
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

    private async validateAndNormalizeEmail(
        email: string,
        excludeUserId?: string,
    ): Promise<string> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const normalizedEmail = email.toLowerCase().trim();

        if (!emailRegex.test(normalizedEmail)) {
            throw ErrorFactory.invalidEmail();
        }

        try {
            const existingUser = await UserService.prisma.users.findUnique({
                where: {email: normalizedEmail},
            });
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
                name: name.trim(),
            },
        });

        if (existingKey) {
            throw new ConflictError("An API key with this name already exists");
        }
    }

    private validateUpdateData(data: UpdateUserData): void {
        // Validate email format if provided
        if (data.email !== undefined) {
            if (typeof data.email !== "string" || data.email.trim() === "") {
                throw new ValidationError("Email cannot be empty");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new ValidationError("Invalid email format");
            }
        }

        // Validate firstName if provided
        if (data.firstName !== undefined) {
            if (typeof data.firstName !== "string" || data.firstName.trim() === "") {
                throw new ValidationError("First name cannot be empty");
            }

            if (data.firstName.length > 50) {
                throw new ValidationError("First name cannot exceed 50 characters");
            }
        }

        // Validate lastName if provided
        if (data.lastName !== undefined) {
            if (typeof data.lastName !== "string" || data.lastName.trim() === "") {
                throw new ValidationError("Last name cannot be empty");
            }

            if (data.lastName.length > 50) {
                throw new ValidationError("Last name cannot exceed 50 characters");
            }
        }

        // Validate company if provided (can be null/undefined)
        if (data.company !== undefined && data.company !== null) {
            if (typeof data.company !== "string") {
                throw new ValidationError("Company must be a string");
            }

            if (data.company.length > 100) {
                throw new ValidationError("Company name cannot exceed 100 characters");
            }
        }

        // Ensure at least one field is being updated
        const hasUpdateData = (Object.keys(data) as (keyof UpdateUserData)[]).some(
            (key) => data[key] !== undefined,
        );

        if (!hasUpdateData) {
            throw new ValidationError(
                "At least one field must be provided for update",
            );
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
