import { Router } from "express";
import { errorHandler } from "../errorHandler";
import { get, list } from "../controllers/gameController";

const router = Router();
router.get('/', errorHandler(list))
router.get('/:slug', errorHandler(get))

export { router };