import { Router } from "express";
import { errorHandler } from "../errorHandler";
import GamesController from "../controllers/games";

const router = Router();
router.get('/', errorHandler(GamesController.list))
router.get('/:slug', errorHandler(GamesController.get))

export { router };