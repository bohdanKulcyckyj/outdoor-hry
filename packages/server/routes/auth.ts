import { Router } from "express";
import { errorHandler } from "../errorHandler";
import { signIn, signUp } from "../controllers/authController";
import authMiddleware from "../middlewares/auth";

const router = Router();
router.post('/signin', errorHandler(signIn))
router.post('/signup', errorHandler(signUp))

export { router };