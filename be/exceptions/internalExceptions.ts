import { TError } from "../types/errors";
import { ErrorCode, HttpException } from "./root";

export class InternalException extends HttpException {
    constructor(message: string, errorCode: ErrorCode, errors: TError) {
        super(message, errorCode, 500, errors)
    }
}