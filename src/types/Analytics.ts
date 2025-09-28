export interface DashboardData {
    totalFacts: number;
    totalSpecies: number;
    apiCallsToday: number;
    numberOfUsers: number;
}

export type DashboardOverview = {
    totalCalls: number;
    activeKeys: number;
    successRate: number;
    topEndpoints: EndpointStats[];
    currentPeriodUsage: number;
    totalRateLimit: number;
};

export type ErrorAnalysis = {
    totalErrors: number;
    errorRate: number;
    topErrorEndpoints: Array<{
        endpoint: string;
        method: string;
        errorCount: number;
        mostCommonStatusCode: number;
    }>;
};

export interface TimeRange {
    start: Date;
    end: Date;
}

export interface UsageStats {
    totalCalls: number;
    successRate: number;
    errorRate: number;
    uniqueIPs: number;
}

export interface EndpointStats {
    endpoint: string;
    method: string;
    callCount: number;
    successRate: number;
    avgResponseTime?: number;
}

export interface StatusCodeDistribution {
    statusCode: number;
    count: number;
    percentage: number;
}

export interface DailyUsage {
    date: string;
    calls: number;
    errors: number;
    uniqueUsers: number;
}

export interface KeyUsageStats {
    keyId: string;
    keyName: string;
    callCount: number;
    lastUsed: Date | null;
    rateLimitUtilization: number;
    isActive: boolean;
}

export interface GeographicUsage {
    country?: string;
    region?: string;
    ipAddress: string;
    callCount: number;
}