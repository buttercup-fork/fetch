// Built-in fetch is available everywhere Buttercup runs (Node 18+, browsers, web
// workers and React Native), so this re-exports it rather than using node-fetch.

// globalThis exists on every supported platform (Node 22+, current browsers, web workers, React Native)
const root = globalThis;

// Look fetch up on each call, so a fetch installed or patched after import
// (React Native polyfills, test stubs) is still used
export function fetch(input, init) {
    return root.fetch(input, init);
}

export const Headers = root.Headers;
export const Request = root.Request;
export const Response = root.Response;
