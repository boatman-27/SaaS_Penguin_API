import {PrismaClient} from "../generated/prisma"
import {DatabaseError, NotFoundError} from "../types/Error.ts";
import type {Fact} from "../types/API.ts";


export class FactService {
    private static prisma = new PrismaClient()

    async randomFact(): Promise<Fact> {
        const factsCount = await this.checkEmptyDb()
        try {
            const fact = await FactService.prisma.facts.findFirst({
                skip: Math.floor(Math.random() * factsCount),
                select: {fact: true, source: true}
            })
            
            return fact as Fact
        } catch (error: any) {
            console.error('Failed to fetch random fact: ', error);
            throw new DatabaseError("Failed to retrieve random fact");
        }
    }

    async queryFact(includedWord: string): Promise<Fact[]> {
        await this.checkEmptyDb()
        try {
            const facts = await FactService.prisma.facts.findMany({
                where: {
                    fact: {
                        contains: includedWord,
                        mode: "insensitive"
                    }
                },
                select: {fact: true, source: true}
            })

            if (!facts) {
                throw new NotFoundError(`No facts found containing the query: ${includedWord}`);
            }
            return facts
        } catch (error: any) {
            console.error('Failed to fetch random fact: ', error);
            throw new DatabaseError("Failed to retrieve fact with included word.");
        }

    }

    async factById(id: number): Promise<Fact> {
        const factsCount = await this.checkEmptyDb()
        try {
            const fact = await FactService.prisma.facts.findFirst({
                where: {id: id},
                select: {fact: true, source: true}
            })
            return fact as Fact
        } catch (error: any) {
            console.error('Failed to fetch random fact: ', error);
            throw new DatabaseError("Failed to retrieve random fact");
        }

    }

    async logUsage(
        userId: string,
        apiKey: string,
        endpoint: string,
        method: string,
        statusCode: number,
        ipAddress?: string,
    ): Promise<void> {
        try {
            await FactService.prisma.apiUsage.create({
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

    async sampleFacts(): Promise<Fact[]> {
        const factsCount = await this.checkEmptyDb()

        // Ensure we don't skip too far to get exactly 3 facts
        const maxSkip = Math.max(0, factsCount - 3);
        const skip = Math.floor(Math.random() * (maxSkip + 1));
        try {
            const facts = await FactService.prisma.facts.findMany({
                take: 3,
                skip: skip,
                select: {fact: true, source: true}
            });

            return facts as Fact[]
        } catch (error: any) {
            console.error("Failed to fetch sample facts:", error);
            throw new DatabaseError("Failed to retrieve sample facts");
        }
    }

    private async checkEmptyDb(): Promise<number> {
        const factsCount = await FactService.prisma.facts.count();
        if (factsCount === 0) {
            throw new DatabaseError("No facts available");
        }

        return factsCount
    }

}