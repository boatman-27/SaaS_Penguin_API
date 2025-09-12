import {Router} from "express";
import {UserService} from "../services/UserService.ts";
import {UserController} from "../controllers/UserController.ts";
import {FactService} from "../services/FactService.ts";
import {FactController} from "../controllers/FactsController.ts";

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

export default router;