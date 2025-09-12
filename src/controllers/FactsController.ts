import type {Request, Response} from "express";
import crypto from "crypto";

import type {FactService} from "../services/FactService.ts";
import {AuthenticationError, DatabaseError, ValidationError} from "../types/Error.ts";
import type {Fact} from "../types/API.ts";
import {PrismaClient} from "../generated/prisma"

export class FactController {

    private static prisma = new PrismaClient()
    private factService: FactService

    constructor(factService: FactService) {
        this.factService = factService
    }

    async randomFact(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const fact: Fact = await this.factService.randomFact()
            statusCode = 200
            res.status(200).json({
                success: true,
                fact
            })
        } catch (error: any) {
            statusCode = await this.handleError(res, error)
        } finally {
            if (req.user) {
                await this.trackUsage(req, statusCode)
            }
        }
    }

    async queryFact(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const includedWord = req.query.includedWord as string
            if (!includedWord || includedWord.trim() === "") {
                throw new ValidationError("must include a word or a sentence");
            }

            const fact: Fact = await this.factService.queryFact(includedWord)
            statusCode = 200
            res.status(200).json({
                success: true,
                fact
            })
        } catch (error: any) {
            statusCode = await this.handleError(res, error)
        } finally {
            if (req.user) {
                await this.trackUsage(req, statusCode)
            }
        }
    }

    async factById(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const id = Number(req.query.id)
            if (isNaN(id)) {
                throw new ValidationError("Fact ID must be a number")
            }

            const fact: Fact = await this.factService.factById(id)
            statusCode = 200
            res.status(200).json({
                success: true,
                fact
            })
        } catch (error: any) {
            statusCode = await this.handleError(res, error)
        } finally {
            if (req.user) {
                await this.trackUsage(req, statusCode)
            }
        }
    }

    async sampleFacts(req: Request, res: Response): Promise<void> {
        try {
            const facts: Fact[] = await this.factService.sampleFacts()

            res.status(200).json({
                status: "success",
                data: facts
            })
        } catch (error: any) {
            console.error('Facts controller error: ', error);

            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Unable to retrieve random facts'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
                });
            }
        }
    }

    private async trackUsage(req: Request, statusCode: number): Promise<void> {
        try {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            await this.factService.logUsage(
                req.user?.userId as string,
                req.user?.apiKey as string,
                req.originalUrl || req.url,
                req.method,
                statusCode,
                ip as string,
            )

            if (statusCode == 200) {
                await this.updateApiKeyUsage(req.user?.apiKey as string)
            }

        } catch (error) {
            console.error('Failed to track usage:', error);
        }
    }

    private async updateApiKeyUsage(apiKey: string): Promise<void> {
        // SHA256 hash for DB lookup
        const lookupHash = crypto.createHash("sha256").update(apiKey as string).digest("hex");

        try {
            await FactController.prisma.apiKey.update({
                where: {keyLookup: lookupHash},
                data: {
                    lastUsedAt: new Date(),
                    usageCount: {increment: 1}
                },
            });
        } catch (error) {
            console.error('Failed to update API key usage:', error);
        } finally {
            await FactController.prisma.$disconnect();
        }
    }

    private async handleError(res: Response, error: any): Promise<number> {
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