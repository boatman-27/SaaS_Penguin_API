import { PrismaClient } from "../generated/prisma";
import {
  DatabaseError,
  InternalServerError,
  NotFoundError,
  ValidationError,
} from "../types/Error.ts";
import type {
  DailyUsage,
  DashboardData,
  DashboardOverview,
  EndpointStats,
  ErrorAnalysis,
  GeographicUsage,
  KeyUsageStats,
  StatusCodeDistribution,
  TimeRange,
} from "../types/Analytics.ts";

export class AnalyticsService {
  private static prisma = new PrismaClient();

  async getDashboardData(): Promise<DashboardData> {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const [totalFacts, totalSpecies, apiCallsToday, numberOfUsers] =
        await Promise.all([
          AnalyticsService.prisma.facts.count(),
          AnalyticsService.prisma.species.count(),
          AnalyticsService.prisma.apiUsage.count({
            where: {
              createdAt: {
                gte: today,
                lt: tomorrow,
              },
            },
          }),
          AnalyticsService.prisma.users.count({}),
        ]);

      return {
        totalFacts,
        totalSpecies,
        apiCallsToday,
        numberOfUsers,
      };
    } catch (error: any) {
      console.error("Failed to retrieve dashboard data", error);
      throw new DatabaseError("Failed to retrieve dashboard data");
    }
  }

  async getUsageOverview(
    userId: string,
    timeRange?: TimeRange,
  ): Promise<{
    totalCalls: number;
    activeKeys: number;
    successRate: number;
    topEndpoints: EndpointStats[];
    currentPeriodUsage: number;
    totalRateLimit: number;
  }> {
    try {
      if (!userId) {
        throw new ValidationError("User ID is required");
      }

      const whereClause = {
        userId,
        ...(timeRange && {
          createdAt: {
            gte: timeRange.start,
            lte: timeRange.end,
          },
        }),
      };

      const [
        totalCalls,
        successfulCalls,
        activeKeysCount,
        topEndpoints,
        userKeys,
      ] = await Promise.all([
        AnalyticsService.prisma.apiUsage.count({ where: whereClause }),

        AnalyticsService.prisma.apiUsage.count({
          where: {
            ...whereClause,
            statusCode: { gte: 200, lt: 300 },
          },
        }),

        // Active API keys
        AnalyticsService.prisma.apiKey.count({
          where: { userId, isActive: true },
        }),

        AnalyticsService.prisma.apiUsage.groupBy({
          by: ["endpoint", "method"],
          where: whereClause,
          _count: { id: true },
          orderBy: { _count: { id: "desc" } },
          take: 5,
        }),

        AnalyticsService.prisma.apiKey.findMany({
          where: { userId, isActive: true },
          select: { rateLimit: true },
        }),
      ]);

      const successRate =
        totalCalls > 0 ? (successfulCalls / totalCalls) * 100 : 0;
      const totalRateLimit = userKeys.reduce(
        (sum, key) => sum + key.rateLimit,
        0,
      );

      const formattedEndpoints: EndpointStats[] = topEndpoints.map(
        (endpoint) => ({
          endpoint: endpoint.endpoint,
          method: endpoint.method,
          callCount: endpoint._count.id,
          successRate: 0,
        }),
      );

      return {
        totalCalls,
        activeKeys: activeKeysCount,
        successRate,
        topEndpoints: formattedEndpoints,
        currentPeriodUsage: totalCalls,
        totalRateLimit,
      };
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new DatabaseError("Failed to fetch dashboard overview");
    }
  }

  async getUsageAnalytics(
    userId: string,
    timeRange: TimeRange,
    granularity: "day" | "hour" = "day",
  ): Promise<DailyUsage[]> {
    try {
      if (!userId) {
        throw new ValidationError("User ID is required");
      }

      if (!timeRange.start || !timeRange.end) {
        throw new ValidationError(
          "Time range start and end dates are required",
        );
      }

      if (timeRange.start >= timeRange.end) {
        throw new ValidationError("Start date must be before end date");
      }

      const dateFormat =
        granularity === "day"
          ? "DATE(created_at)"
          : "DATE_FORMAT(created_at, '%Y-%m-%d %H:00:00')";

      // Using raw SQL for better performance with date grouping
      const results = (await AnalyticsService.prisma.$queryRaw`
                SELECT ${dateFormat} as date,
                    COUNT(*) as calls,
                    COUNT(CASE WHEN status_code >= 400 THEN 1 END) as errors,
                    COUNT(DISTINCT ip_address) as uniqueUsers
                FROM api_usage
                WHERE user_id = ${userId}
                  AND created_at >= ${timeRange.start}
                  AND created_at <= ${timeRange.end}
                GROUP BY ${dateFormat}
                ORDER BY date ASC
            `) as Array<{
        date: string;
        calls: bigint;
        errors: bigint;
        uniqueUsers: bigint;
      }>;

      return results.map((row) => ({
        date: row.date,
        calls: Number(row.calls),
        errors: Number(row.errors),
        uniqueUsers: Number(row.uniqueUsers),
      }));
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new DatabaseError("Failed to fetch usage analytics");
    }
  }

  async getKeyUsageStats(
    userId: string,
    timeRange?: TimeRange,
  ): Promise<KeyUsageStats[]> {
    try {
      if (!userId) {
        throw new ValidationError("User ID is required");
      }

      const whereClause = timeRange
        ? {
            userId,
            createdAt: {
              gte: timeRange.start,
              lte: timeRange.end,
            },
          }
        : { userId };

      const keys = await AnalyticsService.prisma.apiKey.findMany({
        where: { userId },
        select: {
          id: true,
          name: true,
          rateLimit: true,
          lastUsedAt: true,
          isActive: true,
          keyLookup: true,
        },
      });

      const keyStats = await Promise.all(
        keys.map(async (key) => {
          const callCount = await AnalyticsService.prisma.apiUsage.count({
            where: {
              ...whereClause,
              apiKey: key.keyLookup,
            },
          });

          const rateLimitUtilization =
            key.rateLimit > 0 ? (callCount / key.rateLimit) * 100 : 0;

          return {
            keyId: key.id,
            keyName: key.name,
            callCount,
            lastUsed: key.lastUsedAt,
            rateLimitUtilization,
            isActive: key.isActive,
          };
        }),
      );

      return keyStats.sort((a, b) => b.callCount - a.callCount);
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new DatabaseError("Failed to fetch key usage statistics");
    }
  }

  async getEndpointStats(
    userId: string,
    timeRange?: TimeRange,
  ): Promise<EndpointStats[]> {
    try {
      if (!userId) {
        throw new ValidationError("User ID is required");
      }

      const whereClause = {
        userId,
        ...(timeRange && {
          createdAt: {
            gte: timeRange.start,
            lte: timeRange.end,
          },
        }),
      };

      const endpointData = await AnalyticsService.prisma.apiUsage.groupBy({
        by: ["endpoint", "method"],
        where: whereClause,
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
      });

      const endpointStats = await Promise.all(
        endpointData.map(async (endpoint) => {
          const successfulCalls = await AnalyticsService.prisma.apiUsage.count({
            where: {
              ...whereClause,
              endpoint: endpoint.endpoint,
              method: endpoint.method,
              statusCode: { gte: 200, lt: 300 },
            },
          });

          const successRate =
            endpoint._count.id > 0
              ? (successfulCalls / endpoint._count.id) * 100
              : 0;

          return {
            endpoint: endpoint.endpoint,
            method: endpoint.method,
            callCount: endpoint._count.id,
            successRate,
          };
        }),
      );

      return endpointStats;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new DatabaseError("Failed to fetch endpoint statistics");
    }
  }

  async getStatusCodeDistribution(
    userId: string,
    timeRange?: TimeRange,
  ): Promise<StatusCodeDistribution[]> {
    try {
      if (!userId) {
        throw new ValidationError("User ID is required");
      }

      const whereClause = {
        userId,
        ...(timeRange && {
          createdAt: {
            gte: timeRange.start,
            lte: timeRange.end,
          },
        }),
      };

      const statusCodeData = await AnalyticsService.prisma.apiUsage.groupBy({
        by: ["statusCode"],
        where: whereClause,
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
      });

      const totalCalls = statusCodeData.reduce(
        (sum, item) => sum + item._count.id,
        0,
      );

      return statusCodeData.map((item) => ({
        statusCode: item.statusCode,
        count: item._count.id,
        percentage: totalCalls > 0 ? (item._count.id / totalCalls) * 100 : 0,
      }));
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new DatabaseError("Failed to fetch status code distribution");
    }
  }

  async getGeographicUsage(
    userId: string,
    timeRange?: TimeRange,
    limit: number = 10,
  ): Promise<GeographicUsage[]> {
    try {
      if (!userId) {
        throw new ValidationError("User ID is required");
      }

      if (limit <= 0 || limit > 100) {
        throw new ValidationError("Limit must be between 1 and 100");
      }

      const whereClause = {
        userId,
        ipAddress: { not: null },
        ...(timeRange && {
          createdAt: {
            gte: timeRange.start,
            lte: timeRange.end,
          },
        }),
      };

      const ipData = await AnalyticsService.prisma.apiUsage.groupBy({
        by: ["ipAddress"],
        where: whereClause,
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
        take: limit,
      });

      return ipData
        .filter((item) => item.ipAddress !== null)
        .map((item) => ({
          ipAddress: item.ipAddress!,
          callCount: item._count.id,
        }));
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new DatabaseError("Failed to fetch geographic usage");
    }
  }

  async getErrorAnalysis(
    userId: string,
    timeRange?: TimeRange,
  ): Promise<{
    totalErrors: number;
    errorRate: number;
    topErrorEndpoints: Array<{
      endpoint: string;
      method: string;
      errorCount: number;
      mostCommonStatusCode: number;
    }>;
  }> {
    try {
      if (!userId) {
        throw new ValidationError("User ID is required");
      }

      const whereClause = {
        userId,
        statusCode: { gte: 400 },
        ...(timeRange && {
          createdAt: {
            gte: timeRange.start,
            lte: timeRange.end,
          },
        }),
      };

      const [totalErrors, totalCalls, errorEndpoints] = await Promise.all([
        AnalyticsService.prisma.apiUsage.count({ where: whereClause }),

        AnalyticsService.prisma.apiUsage.count({
          where: {
            userId,
            ...(timeRange && {
              createdAt: {
                gte: timeRange.start,
                lte: timeRange.end,
              },
            }),
          },
        }),

        AnalyticsService.prisma.apiUsage.groupBy({
          by: ["endpoint", "method"],
          where: whereClause,
          _count: { id: true },
          orderBy: { _count: { id: "desc" } },
          take: 5,
        }),
      ]);

      const errorRate = totalCalls > 0 ? (totalErrors / totalCalls) * 100 : 0;

      const topErrorEndpoints = await Promise.all(
        errorEndpoints.map(async (endpoint) => {
          const statusCodes = await AnalyticsService.prisma.apiUsage.groupBy({
            by: ["statusCode"],
            where: {
              ...whereClause,
              endpoint: endpoint.endpoint,
              method: endpoint.method,
            },
            _count: { id: true },
            orderBy: { _count: { id: "desc" } },
            take: 1,
          });

          return {
            endpoint: endpoint.endpoint,
            method: endpoint.method,
            errorCount: endpoint._count.id,
            mostCommonStatusCode: statusCodes[0]?.statusCode || 0,
          };
        }),
      );

      return {
        totalErrors,
        errorRate,
        topErrorEndpoints,
      };
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new DatabaseError("Failed to fetch error analysis");
    }
  }

  async getComprehensiveReport(
    userId: string,
    timeRange: TimeRange,
  ): Promise<{
    overview: DashboardOverview;
    usage: DailyUsage[];
    endpoints: EndpointStats[];
    statusCodes: StatusCodeDistribution[];
    errors: ErrorAnalysis;
    keys: KeyUsageStats[];
  }> {
    try {
      await this.validateUserAccess(userId);

      const [overview, usage, endpoints, statusCodes, errors, keys] =
        await Promise.all([
          this.getUsageOverview(userId, timeRange),
          this.getUsageAnalytics(userId, timeRange),
          this.getEndpointStats(userId, timeRange),
          this.getStatusCodeDistribution(userId, timeRange),
          this.getErrorAnalysis(userId, timeRange),
          this.getKeyUsageStats(userId, timeRange),
        ]);

      return {
        overview,
        usage,
        endpoints,
        statusCodes,
        errors,
        keys,
      };
    } catch (error) {
      if (error instanceof ValidationError || error instanceof NotFoundError) {
        throw error;
      }
      throw new InternalServerError("Failed to generate comprehensive report");
    }
  }

  private async validateUserAccess(userId: string): Promise<void> {
    const user = await AnalyticsService.prisma.users.findUnique({
      where: { userId },
      select: { userId: true },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }
  }
}

