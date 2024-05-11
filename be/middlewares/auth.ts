import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../secrets";
import { prisma } from "..";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    
    try {
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