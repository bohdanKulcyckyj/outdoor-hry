import { Router } from 'express'
import { errorHandler } from '../errorHandler'
import AuthController from '../controllers/auth'
import authMiddleware from '../middlewares/auth'

const router = Router()
router.post('/signin', errorHandler(AuthController.signIn))
router.post('/signup', errorHandler(AuthController.signUp))
router.post('/refresh-token', errorHandler(AuthController.refreshAccessToken))

export { router }
