import { describe, expect, it } from "vitest";
import { navItems, projectBackHref, treeAnchors } from "./site";

describe("World Tree navigation", () => {
  it("returns every case study to the project canopy", () => {
    expect(projectBackHref).toBe("/#projects");
  });

  it("uses the same project anchor in the header", () => {
    expect(navItems.find(([label]) => label === "Projects")?.[1]).toBe(projectBackHref);
  });

  it("keeps every homepage navigation target valid", () => {
    expect(Object.values(treeAnchors)).toEqual([
      "/#projects", "/#projects", "/#experience", "/#research", "/#about", "/#life", "/#contact",
    ]);
  });
});
