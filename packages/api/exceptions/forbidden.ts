import { HttpException, ErrorCode } from "./root";

export class ForbiddenException extends HttpException {
    constructor(message: string, errorCode: ErrorCode) {
        super(message, errorCode, 403, null);
    }
}