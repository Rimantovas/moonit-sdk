import { AxiosRequestConfig } from 'axios';
import { BaseApiClient } from './BaseApiClient';
export declare class ApiClient extends BaseApiClient {
    protected readonly apiBasePath: string;
    constructor(options: {
        apiBasePath: string;
    });
    authedRequest: <T>(endpoint: string, token: string, options?: AxiosRequestConfig, shouldParseJSON?: boolean) => Promise<T>;
    publicRequest: <T>(endpoint: string, options?: AxiosRequestConfig, shouldParseJSON?: boolean) => Promise<T>;
}
//# sourceMappingURL=ApiClient.d.ts.map