import {Router} from "express";
import {UserService} from "../services/UserService.ts";
import {UserController} from "../controllers/UserController.ts";

const router: Router = Router()
const userService = new UserService();
const userController = new UserController(userService);

router.post("/login", (req, res) =>
    userController.login(req, res)
)
router.post("/register", (req, res) =>
    userController.signup(req, res)
)

export default router;
