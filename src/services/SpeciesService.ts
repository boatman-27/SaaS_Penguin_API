import {PrismaClient} from "../generated/prisma/index.js"
import {DatabaseError} from "../types/Error.ts";
import type {Species, SpeciesFilters, SpeciesSummary} from "../types/API.ts";


export class SpeciesService {
    private static prisma = new PrismaClient()

    // dropdown functionalities
    async getAvailableFoodTypes(): Promise<string[]> {
        try {
            const result = await SpeciesService.prisma.dietItem.findMany({
                select: {foodType: true},
                distinct: ['foodType']
            });
            return result.map(item => item.foodType);
        } catch (error: any) {
            console.error('Failed to fetch food types: ', error);
            throw new DatabaseError("Failed to retrieve food types");
        }
    }

    async getAvailableRegions(): Promise<string[]> {
        try {
            const result = await SpeciesService.prisma.distribution.findMany({
                select: {region: true},
                distinct: ['region']
            });
            return result.map(item => item.region);
        } catch (error: any) {
            console.error('Failed to fetch regions: ', error);
            throw new DatabaseError("Failed to retrieve regions");
        }
    }

    async getAvailableConservationStatuses(): Promise<string[]> {
        try {
            const result = await SpeciesService.prisma.species.findMany({
                where: {conservationStatus: {not: null}},
                select: {conservationStatus: true},
                distinct: ['conservationStatus']
            });

            return result
                .map(item => item.conservationStatus)
                .filter(Boolean) as string[];
        } catch (error: any) {
            console.error('Failed to fetch conservation statuses: ', error);
            throw new DatabaseError("Failed to retrieve conservation statuses");
        }
    }

    // breeding months
    async getSpeciesByBreedingMonth(month: string): Promise<Species[]> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    distribution: {
                        some: {
                            breedingMonths: {
                                array_contains: month
                            }
                        }
                    }
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species by breeding month: ', error);
            throw new DatabaseError("Failed to retrieve species by breeding month");
        }
    }

    // food
    async getSpeciesByDiet(foodType: string): Promise<Species[] | null> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    dietItems: {
                        some: {
                            foodType: {contains: foodType.trim(), mode: 'insensitive'}
                        }
                    }
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species by diet: ', error);
            throw new DatabaseError("Failed to retrieve species by diet");
        }
    }

    async getSpeciesBySeasonalDiet(seasonal: boolean): Promise<Species[]> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    dietItems: {
                        some: {
                            seasonal: seasonal
                        }
                    }
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species by seasonal diet: ', error);
            throw new DatabaseError("Failed to retrieve species by seasonal diet");
        }
    }

    // region
    async getSpeciesByRegion(region: string): Promise<Species[] | null> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    distribution: {
                        some: {
                            region: {contains: region.trim(), mode: "insensitive"},
                        }
                    }
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })

            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    // conservation status
    async getSpeciesByStatus(status: string): Promise<Species[] | null> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    conservationStatus: {contains: status.trim(), mode: 'insensitive'}
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    // population
    async getSpeciesByMinPopulation(minPopulation: number): Promise<Species[]> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    distribution: {
                        some: {
                            populationEstimate: {gte: minPopulation}

                        }
                    }
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    async getSpeciesByMaxPopulation(maxPopulation: number): Promise<Species[]> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    distribution: {
                        some: {
                            populationEstimate: {lte: maxPopulation}

                        }
                    }
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    async getSpeciesByPopulationtRange(minPopulation: number, maxPopulation: number): Promise<Species[]> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    distribution: {
                        some: {
                            populationEstimate: {lte: maxPopulation, gte: minPopulation}

                        }
                    }
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    // weights
    async getSpeciesByMinWeight(minWeight: number): Promise<Species[] | null> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    OR: [
                        {weightMale: {gte: minWeight}},
                        {weightFemale: {gte: minWeight}}
                    ]
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    async getSpeciesByMaxWeight(maxWeight: number): Promise<Species[]> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    OR: [
                        {weightMale: {lte: maxWeight}},
                        {weightFemale: {lte: maxWeight}}
                    ]
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    async getSpeciesByWeightRange(minWeight: number, maxWeight: number): Promise<Species[]> {
        await this.checkEmptyDb()
        try {
            const filteredSpecies = await SpeciesService.prisma.species.findMany({
                where: {
                    OR: [
                        {weightMale: {gte: minWeight, lte: maxWeight}},
                        {weightFemale: {gte: minWeight, lte: maxWeight}}
                    ]
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })
            return filteredSpecies as Species[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    // specify specie
    async getSpeciesInfo(searchTerm: string): Promise<Species | null> {
        await this.checkEmptyDb()

        try {
            const speciesInfo = await SpeciesService.prisma.species.findFirst({
                where: {
                    OR: [
                        {commonName: {contains: searchTerm, mode: 'insensitive'}},
                        {scientificName: {contains: searchTerm, mode: 'insensitive'}}
                    ]
                },
                include: {
                    distribution: true,
                    dietItems: true,
                    migrationPatterns: true,
                }
            })

            return speciesInfo as Species
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    // all species
    async getSpeciesSummaries(filters: SpeciesFilters): Promise<SpeciesSummary[]> {
        await this.checkEmptyDb()

        const {conservationStatus, searchTerm} = filters;

        const where: any = {};

        if (conservationStatus) {
            where.conservationStatus = conservationStatus;
        }

        if (searchTerm) {
            where.OR = [
                {commonName: {contains: searchTerm, mode: 'insensitive'}},
                {scientificName: {contains: searchTerm, mode: 'insensitive'}}
            ];
        }

        try {
            const summaries = await SpeciesService.prisma.species.findMany({
                where,
                select: {
                    id: true,
                    commonName: true,
                    scientificName: true,
                    conservationStatus: true
                }
            })

            return summaries as SpeciesSummary[]
        } catch (error: any) {
            console.error('Failed to fetch species data: ', error);
            throw new DatabaseError("Failed to retrieve species data");
        }
    }

    private async checkEmptyDb(): Promise<boolean> {
        const count = await SpeciesService.prisma.species.count()
        if (count == 0) {
            throw new DatabaseError("No species found")
        }

        return true
    }
}