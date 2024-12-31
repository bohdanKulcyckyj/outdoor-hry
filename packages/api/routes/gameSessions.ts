import { Router } from "express";
import { errorHandler } from "../errorHandler";
import GameSessionsController from "../controllers/gameSessions";

const router = Router();
// router.get('/', errorHandler(GameSessionsController.get))
router.get('/:slug', errorHandler(GameSessionsController.get))

export { router };