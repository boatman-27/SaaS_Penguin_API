import type {Request, Response} from "express";

import type {FactService} from "../services/FactService.ts";
import {DatabaseError, ValidationError} from "../types/Error.ts";
import type {Fact} from "../types/API.ts";
import {PrismaClient} from "../generated/prisma"
import {UsageLogger} from "../utils/UsageService.ts";

export class FactController {

    private static prisma = new PrismaClient()
    private factService: FactService
    private usageLogger: UsageLogger;

    constructor(factService: FactService, usageLogger: UsageLogger) {
        this.factService = factService
        this.usageLogger = usageLogger
    }

    async getRandomFact(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const fact: Fact = await this.factService.getRandomFact()
            statusCode = 200
            res.status(200).json({
                success: true,
                fact
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getQueryFact(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const includedWord = req.query.includedWord as string
            if (!includedWord || includedWord.trim() === "") {
                throw new ValidationError("must include a word or a sentence");
            }

            const facts: Fact[] = await this.factService.getQueryFact(includedWord)
            statusCode = 200
            res.status(200).json({
                success: true,
                facts
            })

        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getFactById(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const id = Number(req.query.id)
            if (isNaN(id)) {
                throw new ValidationError("Fact ID must be a number")
            }

            const fact: Fact = await this.factService.getFactById(id)
            statusCode = 200
            res.status(200).json({
                success: true,
                fact
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getSampleFacts(req: Request, res: Response): Promise<void> {
        try {
            const facts: Fact[] = await this.factService.getSampleFacts()

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
}