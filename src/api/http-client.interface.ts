/* eslint-disable @typescript-eslint/no-explicit-any */
type HTTPAlias = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';

type RequestFunction = {
  (url: string | URL, options?: IRequestOptions): Promise<any>;
};

export interface IRequestOptions {
  body?: Record<string, any>;
  headers?: Record<string, string>;
  responseType?: string;
}

export interface IHttpClient extends Record<HTTPAlias, RequestFunction> {}
