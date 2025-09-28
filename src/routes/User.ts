import {Router} from "express";
import {UserService} from "../services/UserService.ts";
import {UserController} from "../controllers/UserController.ts";
import {requireAuth} from "../middleware/Auth.ts";

const router: Router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.post("/login", (req, res) => userController.login(req, res));
router.post("/register", (req, res) => userController.signup(req, res));

router.get("/validate", requireAuth, (req, res) =>
    userController.validate(req, res),
);

router.post("/logout", requireAuth, (req, res) =>
    userController.logout(req, res),
);

router.patch("/update-password", requireAuth, (req, res) =>
    userController.updatePassword(req, res),
);

router.patch("/update-user", requireAuth, (req, res) =>
    userController.updateUser(req, res),
)

router.delete("/delete-user", requireAuth, (req, res) =>
    userController.deleteAccount(req, res),
)

router.post("/logout", requireAuth, (req, res) =>
    userController.logout(req, res)
)

router.post("/forgot-password", (req, res) =>
    userController.forgotPassword(req, res)
)

router.post("/reset-password", (req, res) =>
    userController.resetPassword(req, res)
)


export default router;
