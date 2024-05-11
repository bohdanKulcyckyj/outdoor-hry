import { Router } from "express";

// routers
import { router as authRouter } from './auth' 
import { router as gamesRouter } from './games'

const rootRouter = Router()

rootRouter.use('/auth', authRouter);
rootRouter.use('/games', gamesRouter);

export default rootRouter