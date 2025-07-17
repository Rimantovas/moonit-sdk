import { AxiosResponse } from 'axios';
export declare class ResponseError extends Error {
    response: AxiosResponse;
    message: string;
    constructor(response: AxiosResponse, message: string);
}
//# sourceMappingURL=ResponseError.d.ts.map