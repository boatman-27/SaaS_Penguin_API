import {Router} from "express";
import {UsageLogger} from "../utils/UsageService.js";
import {SpeciesService} from "../services/SpeciesService.js";
import {SpeciesController} from "../controllers/SpeciesController.js";

const router: Router = Router()
const speciesService = new SpeciesService();
const usageLogger = new UsageLogger();
const speciesController = new SpeciesController(speciesService, usageLogger)

router.get("/full", (req, res) =>
    speciesController.getSpeciesInfo(req, res)
)

router.get("/breeding-month", (req, res) =>
    speciesController.getSpeciesByBreedingMonth(req, res)
)

router.get("/diet", (req, res) =>
    speciesController.getSpeciesByDiet(req, res)
)

router.get("/seasonal-diet", (req, res) =>
    speciesController.getSpeciesBySeasonalDiet(req, res)
)

router.get("/region", (req, res) =>
    speciesController.getSpeciesByRegion(req, res)
)

router.get("/status", (req, res) =>
    speciesController.getSpeciesByStatus(req, res)
)

router.get("/min-weight", (req, res) =>
    speciesController.getSpeciesByMinWeight(req, res)
)

router.get("/max-weight", (req, res) =>
    speciesController.getSpeciesByMaxWeight(req, res)
)

router.get("/range-weight", (req, res) =>
    speciesController.getSpeciesByWeightRange(req, res)
)

router.get("/min-population", (req, res) =>
    speciesController.getSpeciesByMinPopulation(req, res)
)

router.get("/max-population", (req, res) =>
    speciesController.getSpeciesByMaxPopulation(req, res)
)

router.get("/range-population", (req, res) =>
    speciesController.getSpeciesByPopulationRange(req, res)
)

router.get("/summary", (req, res) =>
    speciesController.getSpeciesSummaries(req, res)
)

export default router;