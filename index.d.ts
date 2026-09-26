export declare const fetch: typeof globalThis.fetch;

export declare const Headers: typeof globalThis.Headers;
export type Headers = globalThis.Headers;

export declare const Request: typeof globalThis.Request;
export type Request = globalThis.Request;

export declare const Response: typeof globalThis.Response;
export type Response = globalThis.Response;

export type RequestInfo = Parameters<typeof globalThis.fetch>[0];
export type RequestInit = NonNullable<Parameters<typeof globalThis.fetch>[1]>;
