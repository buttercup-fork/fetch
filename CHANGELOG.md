# Fetch changelog

## Unreleased (CodeKunde fork)

 * Requires NodeJS 22+ (18 and 20 are end of life); CI covers 22 and 24
 * Readme badge served from the repo instead of a dead CDN link
 * CI runs on branch pushes only, not tags

## v0.3.0
_2026-09-26_ (CodeKunde fork)

 * **Breaking:** requires NodeJS 18+. NodeJS now uses its built-in `fetch`, like browsers, web workers and React Native already did, so `node-fetch` (and its deprecated `node-domexception`) is no longer a dependency
 * Single entry for all platforms; no build step
 * `fetch` looks up the global `fetch` on each call, so a polyfill or test stub installed after import is used

## v0.2.1
_2023-09-12_

 * Expose `RequestInit` from browser entry
 * Expose `RequestInfo` from both entries

## v0.2.0
_2023-09-12_

 * Expose `RequestInit` interface in node types

## v0.1.2
_2023-07-18_

 * React-Native entry in `package.json`

## v0.1.1
_2023-04-24_

 * **Bugfix**:
   * #1 - Illegal invocation bug when using `fetch` in browsers

## v0.1.0
_2023-02-05_

 * Initial release
