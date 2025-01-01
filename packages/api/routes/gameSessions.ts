import { Router } from "express";
import { errorHandler } from "../errorHandler";
import gameSessionParticipantMiddleware from "../middlewares/gameSessionParticipant";
import GameSessionsController from "../controllers/gameSessions";
import authMiddleware from "../middlewares/auth";

const router = Router();
router.use(authMiddleware)
router.get('/:sessionId', [gameSessionParticipantMiddleware], errorHandler(GameSessionsController.get))

export { router };