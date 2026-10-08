# Fetch
> Fetch adapter for cross-platform use.

**CodeKunde fork** of [buttercup/fetch](https://github.com/buttercup/fetch), from 0.2.1. NodeJS has had a built-in `fetch` since version 18, so from 0.3.0 this fork uses the built-in one everywhere and no longer needs `node-fetch` (see the [changelog](CHANGELOG.md)). The badges below are upstream's.

[![Buttercup](images/buttercup-slim.svg)](https://buttercup.codekunde.net) [![npm (scoped)](https://img.shields.io/npm/v/@buttercup/fetch)](https://www.npmjs.com/package/@buttercup/fetch) ![Tests](https://github.com/buttercup/fetch/actions/workflows/test.yml/badge.svg)

## About

This library exports `fetch` in various environments, such as within a browser or under NodeJS:

 * Browsers, web workers and React Native get the native `fetch`
 * NodeJS (22+) gets its built-in `fetch` (versions before 0.3.0 used `node-fetch`)

_This library was designed to be used primarily within Buttercup and its supporting libraries: Features and fixes implemented here will be oriented to furthering Buttercup's goals, and unnessarily changes may be rejected due to that._

## Installation

Install this library; it has no dependencies, on any platform. This fork isn't on npm (the npm package is upstream's 0.2.1, which uses `node-fetch`), so install it from git:

```shell
npm install git+http://192.168.168.6:3050/buttercup.codekunde/fetch.git#main --save
```

`fetch` looks up the global `fetch` on each call, so a polyfill or test stub installed after import is still used.

## Usage

You can import the various components related to fetch regardless of the entry your application uses:

```typescript
import {
    fetch,
    Headers,
    Request,
    Response
} from "@buttercup/fetch";

// ...

const res = await fetch("https://...");
```
