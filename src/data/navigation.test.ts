import { describe, expect, it } from "vitest";
import { navItems, projectBackHref, sectionAnchors, workBackHref } from "./site";

describe("Portfolio navigation", () => {
  it("returns every project case study to all work", () => {
    expect(projectBackHref).toBe("/work");
  });

  it("uses the same all-work destination in the header", () => {
    expect(navItems.find(([label]) => label === "All Work")?.[1]).toBe(projectBackHref);
  });

  it("keeps every homepage navigation target valid", () => {
    expect(Object.values(sectionAnchors)).toEqual([
      "/", "/work", "/work", "/experience", "/about", "/about#contact",
    ]);
  });

  it("returns experience case studies to featured work", () => {
    expect(workBackHref).toBe("/work");
  });

  it("uses exactly the V11 navigation order", () => {
    expect(navItems.map(([label]) => label)).toEqual(["Home", "All Work", "About"]);
  });
});
