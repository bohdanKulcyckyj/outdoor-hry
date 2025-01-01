import { Router } from 'express'
import { errorHandler } from '../errorHandler'
import GamesController from '../controllers/games'
import authMiddleware from '../middlewares/auth'

const router = Router()
router.use(authMiddleware)
router.get('/', errorHandler(GamesController.list)).use(authMiddleware)
router.get('/:slug', errorHandler(GamesController.get)).use(authMiddleware)

export { router }
