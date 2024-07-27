import { Router } from "express";
import { errorHandler } from "../errorHandler";
import GameTagsController from "../controllers/gameTags";

const router = Router();
router.get('/', errorHandler(GameTagsController.list))

export { router };