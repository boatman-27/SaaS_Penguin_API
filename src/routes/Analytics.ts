import {Router} from "express";
import {AnalyticsService} from "../services/AnalyticsService.ts";
import {AnalyticsController} from "../controllers/AnalyticsController.ts";
import {requireAuth} from "../middleware/Auth.ts";

const router = Router();
const analyticsService = new AnalyticsService();
const analyticsController = new AnalyticsController(analyticsService);

// Public dashboard data (no auth required)
router.get("/dashboard-data", async (req, res) =>
    analyticsController.getDashboardData(req, res)
);

// User-specific analytics endpoints (require authentication)
router.get("/overview", requireAuth, async (req, res) =>
    analyticsController.getUsageOverview(req, res)
);

router.get("/usage", requireAuth, async (req, res) =>
    analyticsController.getUsageAnalytics(req, res)
);

router.get("/keys", requireAuth, async (req, res) =>
    analyticsController.getKeyUsageStats(req, res)
);

router.get("/endpoints", requireAuth, async (req, res) =>
    analyticsController.getEndpointStats(req, res)
);

router.get("/status-codes", requireAuth, async (req, res) =>
    analyticsController.getStatusCodeDistribution(req, res)
);

router.get("/geographic", requireAuth, async (req, res) =>
    analyticsController.getGeographicUsage(req, res)
);

router.get("/errors", requireAuth, async (req, res) =>
    analyticsController.getErrorAnalysis(req, res)
);

router.get("/report", requireAuth, async (req, res) =>
    analyticsController.getComprehensiveReport(req, res)
);

export default router;