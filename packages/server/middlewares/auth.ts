import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../secrets";
import { prisma } from "..";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {    
    try {
        const authHeader = String(req.headers.authorization || req.headers.Authorization)
        if(!authHeader?.startsWith('Bearer ')) throw null
        const token = authHeader.replace("Bearer ", "")
        const payload = jwt.verify(String(token), JWT_SECRET) as any
        const user = await prisma.user.findFirst({
            where: {
                id: payload.userId,
                email: payload.userEmail
            }
        })
        if(!user) throw Error()
        req.user = user
        next()
    } catch(err: any) {
        next(new UnauthorizedException("Unauthorized", ErrorCode.UNAUTHORIZED, null))
    }
}

export default authMiddleware