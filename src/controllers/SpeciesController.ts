import type {SpeciesService} from "../services/SpeciesService.ts";
import type {Request, Response} from "express";
import {UsageLogger} from "../utils/UsageService.ts";
import {DatabaseError, ValidationError} from "../types/Error.ts";
import type {Species, SpeciesFilters, SpeciesSummary} from "../types/API.ts";

export class SpeciesController {
    private speciesService: SpeciesService;
    private usageLogger: UsageLogger

    constructor(speciesService: SpeciesService, usageLogger: UsageLogger) {
        this.speciesService = speciesService;
        this.usageLogger = usageLogger;
    }

    // dropdown
    async getAvailableFoodTypes(req: Request, res: Response): Promise<void> {
        try {
            const foodTypes: string[] = await this.speciesService.getAvailableFoodTypes()

            res.status(200).json({
                success: true,
                data: foodTypes
            })
        } catch (error: any) {
            console.error("Species controller error: ", error)

            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Unable to retrieve food types'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
                });
            }
        }
    }

    async getAvailableRegions(req: Request, res: Response): Promise<void> {
        try {
            const regions: string[] = await this.speciesService.getAvailableRegions()
            res.status(200).json({
                success: true,
                data: regions
            })
        } catch (error: any) {
            console.error("Species controller error: ", error)

            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Unable to retrieve regions'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
                });
            }
        }
    }

    async getAvailableConservationStatuses(req: Request, res: Response): Promise<void> {
        try {
            const conservationStatuses: string[] = await this.speciesService.getAvailableConservationStatuses()
            res.status(200).json({
                success: true,
                data: conservationStatuses
            })
        } catch (error: any) {
            console.error("Species controller error: ", error)

            if (error instanceof DatabaseError) {
                res.status(500).json({
                    success: false,
                    message: 'Unable to retrieve conservation statuses'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'An unexpected error occurred'
                });
            }
        }
    }

    // breeding months
    async getSpeciesByBreedingMonth(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const month = req.query.breedingMonth as string
            if (!month || month.trim() == "") {
                throw new ValidationError("must include a month");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByBreedingMonth(month);
            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    // food
    async getSpeciesByDiet(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const diet = req.query.diet as string
            if (!diet || diet.trim() === "") {
                throw new ValidationError("must include a diet");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByDiet(diet)
            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })

        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getSpeciesBySeasonalDiet(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const answer = req.query.bool as string
            if (!answer || answer.trim() === "") {
                throw new ValidationError("must include a boolean");
            }

            const bool = this.validateBooleanInput(answer);
            if (bool === null) {
                throw new ValidationError("Invalid boolean value. Use true/yes/1 or false/no/0");
            }
            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesBySeasonalDiet(bool)

            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })

        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    // region
    async getSpeciesByRegion(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const region = req.query.region as string
            if (!region || region.trim() === "") {
                throw new ValidationError("must include a region");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByRegion(region)

            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    // conservation status
    async getSpeciesByStatus(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const status = req.query.status as string
            if (!status || status.trim() === "") {
                throw new ValidationError("must include a status");
            }
            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByStatus(status)

            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    // weights
    async getSpeciesByMinWeight(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const weightStr = req.query.weight as string
            if (!weightStr || weightStr.trim() === "") {
                throw new ValidationError("Weight parameter is required");
            }
            const weight = Number(weightStr);
            if (isNaN(weight)) {
                throw new ValidationError("Weight must be a valid number");
            }
            if (weight < 0) {
                throw new ValidationError("Weight must be positive");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByMinWeight(weight)

            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getSpeciesByMaxWeight(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const weightStr = req.query.weight as string
            if (!weightStr || weightStr.trim() === "") {
                throw new ValidationError("Weight parameter is required");
            }
            const weight = Number(weightStr);
            if (isNaN(weight)) {
                throw new ValidationError("Weight must be a valid number");
            }
            if (weight < 0) {
                throw new ValidationError("Weight must be positive");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByMaxWeight(weight)
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getSpeciesByWeightRange(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const minWeightStr = req.query.minWeight as string
            const maxWeightStr = req.query.maxWeight as string

            if (!minWeightStr || minWeightStr.trim() === "" || !maxWeightStr || maxWeightStr.trim() === "") {
                throw new ValidationError("Minimum and Maximum Weight parameters are required");
            }

            const minWeight = Number(minWeightStr);
            const maxWeight = Number(maxWeightStr);
            if (isNaN(minWeight)) {
                throw new ValidationError("Minimum Weight must be a valid number");
            }
            if (isNaN(maxWeight)) {
                throw new ValidationError("Maximum Weight must be a valid number");
            }

            if (minWeight < 0 || maxWeight < 0) {
                throw new ValidationError("Weights should be positive");
            }

            if (maxWeight < minWeight) {
                throw new ValidationError("Maximum Weight should be greater than minimum Weight");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByWeightRange(minWeight, maxWeight);
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    // population
    async getSpeciesByMinPopulation(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const populationStr = req.query.population as string
            if (!populationStr || populationStr.trim() === "") {
                throw new ValidationError("Population parameter is required");
            }
            const population = Number(populationStr);
            if (isNaN(population)) {
                throw new ValidationError("Population must be a valid number");
            }
            if (population < 0) {
                throw new ValidationError("Population must be positive");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByMinPopulation(population)
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getSpeciesByMaxPopulation(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const populationStr = req.query.population as string
            if (!populationStr || populationStr.trim() === "") {
                throw new ValidationError("Population parameter is required");
            }
            const population = Number(populationStr);
            if (isNaN(population)) {
                throw new ValidationError("Population must be a valid number");
            }
            if (population < 0) {
                throw new ValidationError("Population must be positive");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByMaxPopulation(population)
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getSpeciesByPopulationRange(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const minPopulationStr = req.query.minPopulation as string
            const maxPopulationStr = req.query.maxPopulation as string

            if (!minPopulationStr || minPopulationStr.trim() === "" || !maxPopulationStr || maxPopulationStr.trim() === "") {
                throw new ValidationError("Minimum and Maximum Population parameters are required");
            }

            const minPopulation = Number(minPopulationStr);
            const maxPopulation = Number(maxPopulationStr);
            if (isNaN(minPopulation) || isNaN(maxPopulation)) {
                throw new ValidationError("Minimum and Maximum Population must be a valid number");
            }

            if (minPopulation < 0 || maxPopulation < 0) {
                throw new ValidationError("Populations should be positive");
            }

            if (minPopulation > maxPopulation) {
                throw new ValidationError("Maximum Population should be greater than minimum Population");
            }

            const speciesInfo: Species[] | null = await this.speciesService.getSpeciesByPopulationtRange(minPopulation, maxPopulation);

            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })
        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    async getSpeciesSummaries(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            // Extract query parameters
            const conservationStatus = req.query.conservationStatus as string;
            const searchTerm = req.query.searchTerm as string;

            // Build filters object
            const filters: SpeciesFilters = {};

            if (conservationStatus && conservationStatus.trim() !== "") {
                filters.conservationStatus = conservationStatus.trim();
            }

            if (searchTerm && searchTerm.trim() !== "") {
                filters.searchTerm = searchTerm.trim();
            }

            // Call service
            const speciesInfo: SpeciesSummary[] = await this.speciesService.getSpeciesSummaries(filters);

            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo,
                count: speciesInfo.length
            });

        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error);
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode);
            }
        }
    }

    async getSpeciesInfo(req: Request, res: Response): Promise<void> {
        let statusCode = 500
        try {
            const searchTerm = req.query.searchTerm as string
            if (!searchTerm || searchTerm.trim() === "") {
                throw new ValidationError("must include a search term");
            }

            const speciesInfo: Species | null = await this.speciesService.getSpeciesInfo(searchTerm)

            statusCode = 200
            res.status(200).json({
                success: true,
                data: speciesInfo
            })

        } catch (error: any) {
            statusCode = await this.usageLogger.handleError(res, error)
        } finally {
            if (req.user) {
                await this.usageLogger.trackUsage(req, statusCode)
            }
        }
    }

    private validateBooleanInput(input: string): boolean | null {
        const cleanInput = input.toLowerCase().trim();

        const trueValues: string[] = [
            "true", "yes", "y", "ok", "okay", "accept",
            "1",
            "yep", "yeah", "yup", "sure", "correct", "right",
            "affirmative", "confirmed", "agreed",
            "def", "definitely", "absolutely", "totally"
        ];
        const falseValues = ["false", "no", "n", "cancel", "reject", "0", "nope", "nah"];

        if (trueValues.includes(cleanInput)) return true;
        if (falseValues.includes(cleanInput)) return false;

        return null; // Invalid input
    }
}