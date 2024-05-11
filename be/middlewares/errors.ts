import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/root";

const errorMiddleware = (error: HttpException, _: Request, res: Response, next: NextFunction) => {
    res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
        errors: error.errors
    })
}  

export default errorMiddleware