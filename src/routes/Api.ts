import {Router} from "express";
import {UserService} from "../services/UserService.ts";
import {UserController} from "../controllers/UserController.ts";
import {FactService} from "../services/FactService.ts";
import {FactController} from "../controllers/FactsController.ts";
import {requireAuth} from "../middleware/Auth.ts";
import {UsageLogger} from "../utils/UsageService.ts";
import {SpeciesService} from "../services/SpeciesService.ts";
import {SpeciesController} from "../controllers/SpeciesController.ts";

const router: Router = Router()
const userService = new UserService();
const usageLogger = new UsageLogger();
const factService = new FactService();
const speciesService = new SpeciesService();

const userController = new UserController(userService);
const factController = new FactController(factService, usageLogger);
const speciesController = new SpeciesController(speciesService, usageLogger);

router.get("/facts/sample", (req, res) =>
    factController.getSampleFacts(req, res)
)

router.get("/keys", requireAuth, (req, res) =>
    userController.getKeys(req, res)
)

router.post("/keys", requireAuth, (req, res) =>
    userController.generateApiKey(req, res)
)

router.patch("/keys", requireAuth, (req, res) =>
    userController.renameKey(req, res)
)

router.delete("/keys", requireAuth, (req, res) =>
    userController.deleteApiKey(req, res)
)

router.get("/food", (req, res) =>
    speciesController.getAvailableFoodTypes(req, res)
)

router.get("/regions", (req, res) =>
    speciesController.getAvailableRegions(req, res)
)

router.get("/conservations", (req, res) =>
    speciesController.getAvailableConservationStatuses(req, res)
)

export default router;