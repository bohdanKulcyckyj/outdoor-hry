import { Router } from "express";

// routers
import { router as authRouter } from './auth' 

const rootRouter = Router()

rootRouter.use('/auth', authRouter);

export default rootRouter