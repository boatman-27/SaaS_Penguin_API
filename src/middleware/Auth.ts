import jwt from "jsonwebtoken";
import type {NextFunction, Request, Response} from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";

import {AuthenticationError, InternalServerError, RateLimitError, ValidationError} from "../types/Error.ts";
import {PrismaClient} from "../generated/prisma"

const prismaClient = new PrismaClient()

export function auth(req: Request): jwt.JwtPayload {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AuthenticationError("Missing Authorization Header");
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        // This is VALIDATION - user sent malformed header format
        throw new ValidationError("Invalid Authorization Header format. Expected 'Bearer <token>'");
    }

    const token = parts[1];
    if (!token) {
        throw new ValidationError("Missing Token");
    }

    const secret = process.env.ACCESS_SECRET;
    if (!secret) {
        throw new InternalServerError("Server configuration error");
    }

    try {
        const decoded = jwt.verify(token, secret) as jwt.JwtPayload

        if (decoded.exp && decoded.exp < Math.floor(Date.now() / 1000)) {
            throw new AuthenticationError("Token has expired");
        }

        return decoded;
    } catch (err) {
        // Handle custom errors first (from our explicit checks above)
        if (err instanceof AuthenticationError || err instanceof ValidationError) {
            throw err;
        }

        // Handle JWT library errors
        if (err instanceof jwt.TokenExpiredError) {
            throw new AuthenticationError("Token has expired");
        }
        if (err instanceof jwt.JsonWebTokenError) {
            throw new AuthenticationError("Invalid token");
        }

        throw new AuthenticationError("Token verification failed");
    }
}

// export function requireAuth(req: Request, res: Response, next: NextFunction) {
//     try {
//         const claims = auth(req);
//         if (!req.user) req.user = {userId: claims}
//         next();
//     } catch (err: any) {
//         res.status(401).json({
//             error:
//                 err?.message ||
//                 (typeof err === "string" && err) ||
//                 JSON.stringify(err) ||
//                 "Unknown error",
//         });
//     }
// }

export async function authApiKey(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        throw new ValidationError("Missing API Key");
    }

    // SHA256 hash for DB lookup
    const lookupHash = crypto.createHash("sha256").update(apiKey as string).digest("hex");

    const keyRecord = await prismaClient.apiKey.findUnique({
        where: {keyLookup: lookupHash, isActive: true},
    });

    if (!keyRecord) {
        throw new AuthenticationError("Invalid API Key");
    }

    // bcrypt verification
    const isValid = await bcrypt.compare(apiKey as string, keyRecord.keyHash);
    if (!isValid) {
        throw new AuthenticationError("Invalid API Key");
    }

    if (keyRecord.usageCount == keyRecord.rateLimit) {
        throw new RateLimitError("Reached rate limit for the day")
    }

    req.user = {userId: keyRecord.userId, apiKey: apiKey as string};
    next();
}
