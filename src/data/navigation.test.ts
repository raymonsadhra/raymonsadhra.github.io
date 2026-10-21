import { describe, expect, it } from "vitest";
import { navItems, sectionAnchors } from "./site";

describe("Portfolio navigation", () => {
  it("uses exactly the simplified V17 navigation", () => {
    expect(navItems).toEqual([["Home", "/"], ["About Me", "/about"]]);
    expect(Object.values(sectionAnchors)).toEqual(["/", "/about", "/about#contact"]);
    expect(navItems.some(([label]) => label.includes("All Work"))).toBe(false);
  });
});
