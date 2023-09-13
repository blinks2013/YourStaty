import { iErrorInfo } from 'src/utils/error/error.interface';

import * as CommonError from './common_error.constants';

// Define error name
export const errorName = {
    ...CommonError.errorName,
};

// Error information
export const errorType: Record<string, iErrorInfo> = {
    ...CommonError.errorType,
};
