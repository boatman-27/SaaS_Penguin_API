export interface TierInfo {
    id: string;
    name: string;
    price: number;
    requestsPerDay: number;
    features: string[];
    createdAt: Date;
    updatedAt: Date;

}

export interface ApiKey {
    id: string;
    userId: string;
    keyHash: string;
    keyLookup: string;
    name: string;
    lastUsedAt: Date | null;
    createdAt: Date;
    rateLimit: number;
    usageCount: number;
    isActive: boolean;
}

export interface Fact {
    fact: string;
    source: string;
}

export interface Species {
    id: string;
    commonName: string;
    scientificName: string;
    species: string;

    weightMale?: number;
    weightFemale?: number;

    nestType?: string;
    favouriteFood?: string;
    conservationStatus?: string;

    identification?: string;
    habits?: string;

    // Relations
    distribution: Distribution[];
    dietItems: DietItem[];
    migrationPatterns: Migration[];

    createdAt: Date;
    updatedAt: Date;
}

export interface SpeciesFilters {
    conservationStatus?: string;
    region?: string;
    searchTerm?: string; // Search in common or scientific name
}

export interface Distribution {
    id: string;
    speciesId: string;

    region: string;
    location: string;
    breedingMonths?: string[]; // JSON array
    habitat?: string;
    populationEstimate?: number;

    createdAt: Date;
    updatedAt: Date;
}

export interface DietItem {
    id: string;
    speciesId: string;

    foodType: string;
    scientificName?: string;
    commonName?: string;
    percentage?: number;
    seasonal: boolean;
    location?: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface Migration {
    id: string;
    speciesId: string;

    migrationPeriod: string;
    fromLocation: string;
    toLocation?: string;
    distanceKm?: number;
    duration?: string;
    ageGroup?: string;

    createdAt: Date;
    updatedAt: Date;
}

// Species with everything
export type SpeciesFull = Species;

// Species summary for lists
export interface SpeciesSummary {
    id: string;
    commonName: string;
    scientificName: string;
    conservationStatus?: string
}
