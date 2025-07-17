import { AxiosRequestConfig } from 'axios';
export type FetchOptions = RequestInit & {
    clearContentType?: boolean;
};
export declare const request: <T>(url: string, options?: AxiosRequestConfig, shouldParseJSON?: boolean) => Promise<T>;
export declare const authedRequest: <T>(apiBasePath: string, endpoint: string, token: string, options?: AxiosRequestConfig, shouldParseJSON?: boolean) => Promise<T>;
export declare const publicRequest: <T>(apiBasePath: string, endpoint: string, options?: AxiosRequestConfig, shouldParseJSON?: boolean) => Promise<T>;
//# sourceMappingURL=utils.d.ts.map