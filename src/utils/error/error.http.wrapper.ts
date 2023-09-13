import { HttpException } from '@nestjs/common';
import { errorType } from 'src/constants/error';
import { iErrorInfo } from './error.interface';
import { errorCode } from 'src/constants/error/errorCode';

export class HttpExceptionWrapper extends HttpException {
    constructor(message: string, errors?: unknown) {
        // Getting error information
        const errorInfo: iErrorInfo = errorType?.[message];
        // Getting error status code
        const errStatusCode = errorInfo?.statusCode || 500;
        // Getting error message
        const errMessage = errorInfo?.message || message;
        // Getting error code
        const errCode = errorInfo?.errorCode || errorCode.DEFAULT_ERROR;

        super(
            {
                statusCode: errStatusCode,
                message: errMessage,
                errors: errors,
                errorCode: errCode,
            },
            errStatusCode,
        );
    }
}
