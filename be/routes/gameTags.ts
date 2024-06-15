import { Router } from "express";
import { errorHandler } from "../errorHandler";
import { getGameTags } from "../controllers/gameTagsController";

const router = Router();
router.get('/', errorHandler(getGameTags))

export { router };