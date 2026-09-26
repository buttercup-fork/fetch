# @buttercup/fetch

Fetch adapter for cross-platform use: exports `fetch`, `Headers`, `Request` and `Response`.

This is the CodeKunde fork of [buttercup/fetch](https://github.com/buttercup/fetch) 0.2.1. The original used `node-fetch` on NodeJS and the built-in `fetch` elsewhere. NodeJS has had a built-in `fetch` since version 18, so this fork uses the built-in one everywhere (NodeJS 18+, browsers, web workers and React Native) and has no dependencies. That drops `node-fetch` and its deprecated `node-domexception` dependency.

`fetch` looks up the global `fetch` on each call, so a polyfill or test stub installed after import is still used.

## Usage

```js
import { fetch, Headers } from "@buttercup/fetch";

const response = await fetch("https://example.com", {
    headers: new Headers({ Accept: "application/json" })
});
```

## Tests

```sh
npm test
```
