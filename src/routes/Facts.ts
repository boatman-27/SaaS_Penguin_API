import {Router} from "express";
import {FactService} from "../services/FactService.ts";
import {FactController} from "../controllers/FactsController.ts";
import {UsageLogger} from "../utils/UsageService.ts";

const router: Router = Router()

const factService = new FactService();
const usageLogger = new UsageLogger();
const factController = new FactController(factService, usageLogger);

router.get("/random", (req, res) =>
    factController.getRandomFact(req, res)
)

router.get("/", (req, res) =>
    factController.getFactById(req, res)
)

router.get("/search", (req, res) =>
    factController.getQueryFact(req, res)
)


export default router;