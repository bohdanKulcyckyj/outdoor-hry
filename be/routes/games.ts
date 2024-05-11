import { Router } from "express";
import { errorHandler } from "../errorHandler";
import { getGames } from "../controllers/gameController";

const router = Router();
router.get('/', errorHandler(getGames))

export { router };