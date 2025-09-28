import type {Request, Response} from "express";

import type {UserService} from "../services/UserService.ts";
import type {Credentials, NewUser} from "../types/User.ts";
import {AuthenticationError, ConflictError, DatabaseError, NotFoundError, ValidationError,} from "../types/Error.ts";
import type {TierInfo} from "../types/API.ts";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async forgotPassword(req: Request, res: Response): Promise<void> {
        try {
            const {email} = req.body;

            // Validate required fields
            if (!email) {
                throw new ValidationError("Email is required");
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new ValidationError("Please provide a valid email address");
            }

            await this.userService.initiatePasswordReset(email);

            // Always return success to prevent email enumeration attacks
            res.status(200).json({
                success: true,
                message: "If an account with that email exists, a password reset link has been sent",
            });
        } catch (error: any) {
            console.error("Forgot password controller error:", error);
            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    // Reset Password Controller Method (for when user clicks the reset link)
    async resetPassword(req: Request, res: Response): Promise<void> {
        try {
            const {token, newPassword, confirmPassword} = req.body;

            // Validate required fields
            if (!token || !newPassword || !confirmPassword) {
                throw new ValidationError(
                    "Reset token, new password, and password confirmation are required"
                );
            }

            if (newPassword !== confirmPassword) {
                throw new ValidationError("New password and confirmation do not match");
            }

            // Validate password strength (adjust criteria as needed)
            if (newPassword.length < 8) {
                throw new ValidationError("Password must be at least 8 characters long");
            }

            await this.userService.resetPassword(token, newPassword);

            res.status(200).json({
                success: true,
                message: "Password has been reset successfully",
            });
        } catch (error: any) {
            console.error("Reset password controller error:", error);
            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof NotFoundError) {
                res.status(400).json({
                    success: false,
                    message: "Invalid or expired reset token",
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async deleteAccount(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;

            if (!userId) {
                throw new ValidationError("User ID is required");
            }

            await this.userService.deleteAccount(userId);

            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
            });

            res.status(200).json({
                success: true,
                message: "Account deleted successfully",
            });
        } catch (error: any) {
            console.error("Delete account controller error:", error);

            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof NotFoundError) {
                res.status(404).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const updatedData = req.body;

            await this.userService.updateUser(userId, updatedData);
            res.status(201).json({
                success: true,
                message: "User updated successfully",
            });
        } catch (error: any) {
            console.error("Error updating user:", error);
            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof ConflictError) {
                res.status(409).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else if (error instanceof NotFoundError) {
                res.status(404).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            }
        }
    }

    async updatePassword(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId;
            const {oldPassword, newPassword, confirmPassword} = req.body;

            // Validate required fields
            if (!oldPassword || !newPassword || !confirmPassword) {
                throw new ValidationError(
                    "Old password, new password, and password confirmation are required",
                );
            }

            if (!userId) {
                throw new ValidationError("User Id is required");
            }

            if (newPassword != confirmPassword) {
                throw new ValidationError("New password and confirmation do not match");
            }

            await this.userService.updatePassword(userId, oldPassword, newPassword);

            res.status(200).json({
                success: true,
                message: "password updated successfully",
            });
        } catch (error: any) {
            console.error("Password update controller error:", error);
            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async getKeys(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const keys = await this.userService.getKeys(userId);

            res.status(200).json({
                success: true,
                data: keys,
            });
        } catch (error: any) {
            console.error("fetching keys error", error);
            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Unable to retrieve user keys",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async logout(req: Request, res: Response): Promise<void> {
        try {
            // Clear the httpOnly refresh token cookie
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Use secure in production
                sameSite: "strict",
                path: "/", // Make sure path matches the one used when setting the cookie
            });
            //!todo add blacklisting functionalities

            res.status(200).json({
                success: true,
                message: "Logout successful",
            });
        } catch (error: any) {
            console.error("Logout error:", error);
            res.status(500).json({
                success: false,
                message: "An unexpected error occurred",
            });
        }
    }

    async validate(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const user = await this.userService.getUserByUserId(userId);

            res.status(200).json({
                success: true,
                user: user,
                message: "Validation successful",
            });
        } catch (error: any) {
            console.error("validation error", error);
            if (error instanceof AuthenticationError) {
                res.status(401).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async renameKey(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {name, keyId} = req.body;

            if (!name) {
                throw new ValidationError("name is required");
            }

            if (!keyId) {
                throw new ValidationError("keyId is required");
            }

            await this.userService.renameKey(name, keyId, userId);

            res.status(201).json({
                success: true,
                message: `Key renamed successfully.`,
            });
        } catch (error: any) {
            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof ConflictError) {
                res.status(409).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else if (error instanceof AuthenticationError) {
                res.status(401).json({
                    success: false,
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async deleteApiKey(req: Request, res: Response): Promise<void> {
        try {
            const {keyId} = req.body;
            const userId = req.user?.userId as string;
            if (!keyId) {
                throw new ValidationError("keyId is required");
            }

            await this.userService.deleteApiKey(keyId, userId);

            res.status(200).json({
                sucess: true,
                message: `Key deleted successfully.`,
            });
        } catch (error: any) {
            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof ConflictError) {
                res.status(409).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async generateApiKey(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {name} = req.body;

            if (!name) {
                throw new ValidationError("name is required");
            }
            await this.userService.generateNewKey(userId, name);

            res.status(201).json({
                success: true,
                message: `Key generated successfully.`,
            });
        } catch (error: any) {
            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof ConflictError) {
                res.status(409).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const creds: Credentials = req.body;

            const [user, accessToken, refreshToken] =
                await this.userService.login(creds);

            // Set refresh token as httpOnly cookie for security
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.status(200).json({
                success: true,
                user,
                accessToken,
                message: "Login successful",
            });
        } catch (error: any) {
            console.error("Login controller error:", error);

            if (error instanceof AuthenticationError) {
                res.status(401).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async signup(req: Request, res: Response): Promise<void> {
        try {
            const newUser: NewUser = req.body;
            const [user, accessToken, refreshToken] =
                await this.userService.signup(newUser);

            // Set refresh token as httpOnly cookie for security
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.status(201).json({
                success: true,
                user: newUser,
                accessToken: accessToken,
                message: "Account created successfully",
            });
        } catch (error: any) {
            console.error("Signup controller error:", error);

            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message,
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Failed to create account",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }

    async pricing(req: Request, res: Response): Promise<void> {
        try {
            const tiers: TierInfo[] = await this.userService.pricing();

            res.status(200).json({
                success: true,
                data: tiers,
            });
        } catch (error: any) {
            console.error("Pricing controller error:", error);

            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: "Unable to retrieve pricing information",
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "An unexpected error occurred",
                });
            }
        }
    }
}
