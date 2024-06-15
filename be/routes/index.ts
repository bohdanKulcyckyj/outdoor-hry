import { Router } from 'express'

// routers
import { router as authRouter } from './auth'
import { router as gamesRouter } from './games'
import { router as gameTagsRouter } from './gameTags'

const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/games', gamesRouter)
rootRouter.use('/game-tags', gameTagsRouter)

export default rootRouter
