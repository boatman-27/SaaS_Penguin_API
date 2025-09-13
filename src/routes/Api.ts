import {Router} from "express";
import {UserService} from "../services/UserService.ts";
import {UserController} from "../controllers/UserController.ts";
import {FactService} from "../services/FactService.ts";
import {FactController} from "../controllers/FactsController.ts";
import {authApiKey, requireAuth} from "../middleware/Auth.ts";

const router: Router = Router()
const userService = new UserService();
const userController = new UserController(userService);

const factService = new FactService();
const factController = new FactController(factService);

router.get("/pricing", (req, res) =>
    userController.pricing(req, res)
)

router.get("/facts/sample", (req, res) =>
    factController.sampleFacts(req, res)
)

router.post("/keys", requireAuth, (req, res) =>
    userController.generateApiKey(req, res)
)

router.patch("/keys", authApiKey, (req, res) =>
    userController.renameKey(req, res)
)

router.delete("/keys", authApiKey, (req, res) =>
    userController.deleteApiKey(req, res)
)


export default router;