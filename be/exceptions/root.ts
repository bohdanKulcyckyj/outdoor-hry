import { ZodError } from "zod";
import { TError } from "../types/errors";

export class HttpException extends Error {
    message: string;
    errorCode: ErrorCode;
    statusCode: number;
    errors: TError;

    constructor(message: string, errorCode: ErrorCode, statusCode: number, errors: TError) {
        super();
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

export enum ErrorCode {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS,
    INCORRECT_PASSWORD,
    UNPROCESSABLE_ENTITY,
    INTERNAL_EXCEPTION,
    UNAUTHORIZED,
    SERVER_LOGIC_ERROR,
    SERVER_ERROR,
    BAD_QUERY_PARAMETER
}