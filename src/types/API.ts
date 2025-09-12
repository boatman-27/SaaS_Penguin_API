export interface TierInfo {
    id: string;
    name: string;
    price: number;
    requestsPerDay: number;
    features: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Fact {
    fact: string;
    source: string;
}