import {Router} from "express";
import {FactService} from "../services/FactService.js";
import {FactController} from "../controllers/FactsController.js";
import {UsageLogger} from "../utils/UsageService.js";
import {authApiKey} from "../middleware/Auth.js";

const router: Router = Router()

const factService = new FactService();
const usageLogger = new UsageLogger();
const factController = new FactController(factService, usageLogger);

router.get("/random", (req, res) =>
    factController.getRandomFact(req, res)
)

router.get("/", authApiKey, (req, res) =>
    factController.getFactById(req, res)
)

router.get("/search", authApiKey, (req, res) =>
    factController.getQueryFact(req, res)
)


export default router;