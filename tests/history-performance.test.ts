import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(path, import.meta.url), "utf8");

test("site styles keep shared responsive navigation and reduced-motion support", () => {
  const styles = read("../src/styles.css");
  expect(styles).toContain(".inner-topbar");
  expect(styles).toContain(".inner-menu-open .inner-nav");
  expect(styles).toContain("@media (prefers-reduced-motion: reduce)");
});

test("all referenced page hero and service images exist in the public assets tree", () => {
  const home = read("../src/routes/index.tsx");
  const services = read("../src/routes/services.tsx");
  expect(home).toContain("/assets/hero-living.jpg");
  expect(home).toContain("/assets/ceilings/matte.jpg");
  expect(services).toContain("/assets/living-room.jpg");
});
