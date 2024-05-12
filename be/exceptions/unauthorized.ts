import { TError } from "../types/errors";
import { ErrorCode, HttpException } from "./root";

export class UnauthorizedException extends HttpException {
    constructor(message: string, errorCode: ErrorCode, errors: TError) {
        super(message, errorCode, 401, errors)
    }
}