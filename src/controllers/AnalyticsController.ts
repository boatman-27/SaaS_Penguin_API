import type {Request, Response} from "express";
import type {AnalyticsService} from "../services/AnalyticsService.ts";
import {DatabaseError, InternalServerError, NotFoundError, ValidationError} from "../types/Error.ts";

export class AnalyticsController {
    private analyticsService: AnalyticsService

    constructor(analyticsService: AnalyticsService) {
        this.analyticsService = analyticsService
    }

    async getDashboardData(req: Request, res: Response): Promise<void> {
        try {
            const {
                totalSpecies,
                totalFacts,
                apiCallsToday,
                numberOfUsers
            } = await this.analyticsService.getDashboardData()

            res.status(200).json({
                success: true,
                data: {
                    totalFacts,
                    totalSpecies,
                    apiCallsToday,
                    numberOfUsers
                }
            })

        } catch (error: any) {
            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Unable to retrieve dashboard data'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
                });
            }
        }
    }

    async getUsageOverview(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end} = req.query;

            let timeRange;
            if (start && end) {
                timeRange = {
                    start: new Date(start as string),
                    end: new Date(end as string)
                };
            }

            const overview = await this.analyticsService.getUsageOverview(userId, timeRange);

            res.status(200).json({
                success: true,
                data: overview
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    async getUsageAnalytics(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end, granularity = 'day'} = req.query;

            if (!start || !end) {
                res.status(400).json({
                    success: false,
                    message: 'Start and end dates are required'
                });
            }

            const timeRange = {
                start: new Date(start as string),
                end: new Date(end as string)
            };

            const usage = await this.analyticsService.getUsageAnalytics(
                userId,
                timeRange,
                granularity as 'day' | 'hour'
            );

            res.status(200).json({
                success: true,
                data: usage
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    async getKeyUsageStats(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end} = req.query;

            let timeRange;
            if (start && end) {
                timeRange = {
                    start: new Date(start as string),
                    end: new Date(end as string)
                };
            }

            const keyStats = await this.analyticsService.getKeyUsageStats(userId, timeRange);

            res.status(200).json({
                success: true,
                data: keyStats
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    async getEndpointStats(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end} = req.query;

            let timeRange;
            if (start && end) {
                timeRange = {
                    start: new Date(start as string),
                    end: new Date(end as string)
                };
            }

            const endpointStats = await this.analyticsService.getEndpointStats(userId, timeRange);

            res.status(200).json({
                success: true,
                data: endpointStats
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    async getStatusCodeDistribution(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end} = req.query;

            let timeRange;
            if (start && end) {
                timeRange = {
                    start: new Date(start as string),
                    end: new Date(end as string)
                };
            }

            const statusCodes = await this.analyticsService.getStatusCodeDistribution(userId, timeRange);

            res.status(200).json({
                success: true,
                data: statusCodes
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    async getGeographicUsage(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end, limit = '10'} = req.query;

            let timeRange;
            if (start && end) {
                timeRange = {
                    start: new Date(start as string),
                    end: new Date(end as string)
                };
            }

            const geographic = await this.analyticsService.getGeographicUsage(
                userId,
                timeRange,
                parseInt(limit as string)
            );

            res.status(200).json({
                success: true,
                data: geographic
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    async getErrorAnalysis(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end} = req.query;

            let timeRange;
            if (start && end) {
                timeRange = {
                    start: new Date(start as string),
                    end: new Date(end as string)
                };
            }

            const errorAnalysis = await this.analyticsService.getErrorAnalysis(userId, timeRange);

            res.status(200).json({
                success: true,
                data: errorAnalysis
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    async getComprehensiveReport(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?.userId as string;
            const {start, end} = req.query;

            if (!start || !end) {
                res.status(400).json({
                    success: false,
                    message: 'Start and end dates are required for comprehensive report'
                });
            }

            const timeRange = {
                start: new Date(start as string),
                end: new Date(end as string)
            };

            const report = await this.analyticsService.getComprehensiveReport(userId, timeRange);

            res.status(200).json({
                success: true,
                data: report
            });

        } catch (error: any) {
            this.handleError(res, error);
        }
    }

    private handleError(res: Response, error: any): void {
        console.error('Analytics error:', error);

        if (error instanceof ValidationError) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        } else if (error instanceof NotFoundError) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        } else if (error instanceof DatabaseError) {
            res.status(500).json({
                success: false,
                message: 'Database error occurred'
            });
        } else if (error instanceof InternalServerError) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'An unexpected error occurred'
            });
        }
    }
}