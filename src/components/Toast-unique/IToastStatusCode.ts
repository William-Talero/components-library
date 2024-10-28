import { ToastOptions } from './IToast';
import { StatusCodeValid } from './ToastTypes';

export interface IToastStatusCode {
    [statusCode: StatusCodeValid]: StatusMessage;
}

interface StatusMessage {
    message: string;
    options: ToastOptions;
}