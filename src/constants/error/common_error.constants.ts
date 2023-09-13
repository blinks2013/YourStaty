import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    CUSTOM_COMMON_ERROR: 'CUSTOM_COMMON_ERROR',
    DATA_VALIDATION_ERROR: 'DATA_VALIDATION_ERROR',
};

export const errorType = {
    CUSTOM_COMMON_ERROR: {
        message: 'Custom common error',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.CUSTOM_COMMON_ERROR,
    },
    DATA_VALIDATION_ERROR: {
        message: 'Data validation error',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.DATA_VALIDATION_ERROR,
    },
};
