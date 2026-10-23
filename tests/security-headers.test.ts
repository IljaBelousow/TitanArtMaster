import { expect, test } from "bun:test";
import { applySecurityHeaders } from "../src/lib/security-headers.server";

test("security headers preserve the response and restrict framing to same origin", async () => {
  const response = applySecurityHeaders(new Response("ok", { status: 201 }));
  expect(response.status).toBe(201);
  expect(await response.text()).toBe("ok");
  expect(response.headers.get("content-security-policy")).toContain("frame-src 'self';");
  expect(response.headers.get("content-security-policy")).not.toContain("higgsfield");
  expect(response.headers.get("x-content-type-options")).toBe("nosniff");
  expect(response.headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
});
