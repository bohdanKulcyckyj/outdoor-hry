export type ApiResponse<TData, TError = string[]> =
    | ApiResponseSuccess<TData>
    | ApiResponseError<TError>;

export type ApiResponseSuccess<TData> = {
    code: string;
    message: string;
    success: true;
    data: TData;
};

export type ApiResponseError<TError> = {
    code: string;
    message: string;
    success: false;
    errors: TError;
};
