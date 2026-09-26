import { after, before, describe, it } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { Headers, Request, Response, fetch } from "../index.js";

describe("@buttercup/fetch", function () {
    let server, url;

    before(async function () {
        server = createServer((req, res) => {
            let body = "";
            req.on("data", (chunk) => (body += chunk));
            req.on("end", () => {
                res.writeHead(200, {
                    "Content-Type": "application/json",
                    "X-Test": "yes"
                });
                res.end(
                    JSON.stringify({
                        method: req.method,
                        auth: req.headers.authorization ?? null,
                        body
                    })
                );
            });
        });
        await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
        url = `http://127.0.0.1:${server.address().port}/`;
    });

    after(function () {
        server.close();
    });

    it("exports the built-in classes", function () {
        assert.equal(Headers, globalThis.Headers);
        assert.equal(Request, globalThis.Request);
        assert.equal(Response, globalThis.Response);
    });

    it("performs requests with the built-in fetch", async function () {
        const response = await fetch(url, {
            method: "POST",
            headers: new Headers({ Authorization: "Bearer abc" }),
            body: Buffer.from("hello")
        });
        assert.ok(response instanceof Response);
        assert.equal(response.status, 200);
        assert.ok(response.headers instanceof Headers);
        assert.equal(response.headers.get("x-test"), "yes");
        assert.deepEqual(await response.json(), {
            method: "POST",
            auth: "Bearer abc",
            body: "hello"
        });
    });

    it("uses a fetch replaced after import", async function () {
        const original = globalThis.fetch;
        globalThis.fetch = async () => new Response("stubbed");
        try {
            assert.equal(await (await fetch(url)).text(), "stubbed");
        } finally {
            globalThis.fetch = original;
        }
    });
});
