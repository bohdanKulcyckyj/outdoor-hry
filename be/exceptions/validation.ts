import { ErrorCode, HttpException } from "./root";

export class UnprocessableEntityException extends HttpException {
    constructor(message: string, errors: any) {
        super(message, ErrorCode.UNPROCESSABLE_ENTITY, 422, errors)
    }
}