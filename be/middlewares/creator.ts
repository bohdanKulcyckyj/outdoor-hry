import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";

const creatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.user && ['CREATOR', 'ADMIN'].includes(req.user.role)) {
        next()
    } else {
        next(new UnauthorizedException('Unauthorized', ErrorCode.UNAUTHORIZED, null))
    }
}

export default creatorMiddleware