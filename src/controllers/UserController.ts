import type {Request, Response} from "express";

import type {UserService} from "../services/UserService.ts";
import type {Credentials, NewUser} from "../types/User.ts";
import {AuthenticationError, DatabaseError, ValidationError} from "../types/Error.ts";
import type {TierInfo} from "../types/API.ts"


export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const creds: Credentials = req.body;

            const [user, accessToken, refreshToken] = await this.userService.login(creds);

            // Set refresh token as httpOnly cookie for security
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.status(200).json({
                success: true,
                user,
                accessToken,
                message: 'Login successful'
            });

        } catch (error: any) {
            console.error('Login controller error:', error);

            if (error instanceof AuthenticationError) {
                res.status(401).json({
                    success: false,
                    message: error.message
                });
            } else if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Internal server error'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
                });
            }
        }
    }

    async signup(req: Request, res: Response): Promise<void> {
        try {
            const newUser: NewUser = req.body;
            await this.userService.signup(newUser);

            res.status(201).json({
                success: true,
                message: 'Account created successfully',
            });

        } catch (error: any) {
            console.error('Signup controller error:', error);

            if (error instanceof ValidationError) {
                res.status(400).json({
                    success: false,
                    message: error.message
                });
            } else if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Failed to create account'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
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
            console.error('Pricing controller error:', error);

            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Unable to retrieve pricing information'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
                });
            }
        }
    }
}