import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post("/login", userController.loginUser);

export default router;
