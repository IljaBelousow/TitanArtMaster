import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(path, import.meta.url), "utf8");

describe("TitanArtMaster site contract", () => {
  test("all public pages use the expected route declarations", () => {
    expect(read("../src/routes/index.tsx")).toContain('createFileRoute("/")');
    for (const route of ["about", "services", "ceilings", "contacts", "legal", "privacy"]) {
      expect(read(`../src/routes/${route}.tsx`)).toContain(`createFileRoute("/${route}")`);
    }
  });

  test("interior pages share the same shell and mobile navigation", () => {
    const layout = read("../src/components/InteriorPage.tsx");
    expect(layout).toContain("inner-topbar");
    expect(layout).toContain("inner-menu-toggle");
    expect(layout).toContain("setMenuOpen");
    expect(layout).toContain("inner-footer");
    expect(read("../src/routes/privacy.tsx")).toContain("minimal");
    expect(read("../src/routes/legal.tsx")).toContain("<InteriorPage");
  });

  test("homepage and interior pages use the site's real business contact", () => {
    expect(read("../src/routes/index.tsx")).toContain("+375333075077");
    expect(read("../src/components/InteriorPage.tsx")).toContain("+375333075077");
  });
});
