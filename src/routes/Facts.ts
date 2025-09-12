import {Router} from "express";
import {FactService} from "../services/FactService.ts";
import {FactController} from "../controllers/FactsController.ts";

const router: Router = Router()

const factService = new FactService();
const factController = new FactController(factService);

router.get("/random", (req, res) =>
    factController.randomFact(req, res)
)

router.get("/", (req, res) =>
    factController.factById(req, res)
)

router.get("/search", (req, res) =>
    factController.queryFact(req, res)
)


export default router;