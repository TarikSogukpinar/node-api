import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.post("/register", userController.registerUser);

export default router;
