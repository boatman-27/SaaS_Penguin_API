import {PrismaClient} from "../generated/prisma/index.js"
import type {Request, Response} from "express";
import crypto from "crypto";
import {AuthenticationError, DatabaseError, ValidationError} from "../types/Error.ts";

export class UsageLogger {
    private static prisma = new PrismaClient()

    async logUsage(
        userId: string,
        apiKey: string,
        endpoint: string,
        method: string,
        statusCode: number,
        ipAddress?: string,
    ): Promise<void> {
        try {
            await UsageLogger.prisma.apiUsage.create({
                data: {
                    userId,
                    apiKey,
                    endpoint,
                    method,
                    statusCode,
                    ipAddress: ipAddress,
                    createdAt: new Date()
                }
            });
        } catch (error: any) {
            console.error('Failed to log API usage:', error);
        }
    }

    async trackUsage(req: Request, statusCode: number): Promise<void> {
        try {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            await this.logUsage(
                req.user?.userId as string,
                req.user?.apiKey as string,
                req.originalUrl || req.url,
                req.method,
                statusCode,
                ip as string,
            )
            console.log("in track usage");

            if (statusCode == 200) {
                await this.updateApiKeyUsage(req.user?.apiKey as string)
            } else {
                console.log(`in track usage usage:`, statusCode)
            }

        } catch (error) {
            console.error('Failed to track usage:', error);
        }
    }

    async updateApiKeyUsage(apiKey: string): Promise<void> {
        // SHA256 hash for DB lookup
        const lookupHash = crypto.createHash("sha256").update(apiKey as string).digest("hex");
        console.log("Usage update api key:", apiKey);

        try {
            await UsageLogger.prisma.apiKey.update({
                where: {keyLookup: lookupHash},
                data: {
                    lastUsedAt: new Date(),
                    usageCount: {increment: 1}
                },
            });
        } catch (error) {
            console.error('Failed to update API key usage:', error);
        } finally {
            console.log("Update API key usage");
            await UsageLogger.prisma.$disconnect();
        }
    }

    async handleError(res: Response, error: any): Promise<number> {
        console.error('Facts controller error: ', error);

        if (error instanceof ValidationError) {
            res.status(400).json({success: false, message: error.message || "Missing API Key"})
            return 400
        }
        if (error instanceof AuthenticationError) {
            res.status(401).json({success: false, message: "Invalid API Key"})
            return 401
        }
        if (error instanceof DatabaseError) {
            res.status(500).json({success: false, message: "Failed to fetch fact"})
            return 500
        }

        res.status(500).json({success: false, message: "An unexpected error occurred"})
        return 500
    }


}