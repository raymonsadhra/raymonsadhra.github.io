import { describe, expect, it } from "vitest";
import { navItems, projectBackHref, treeAnchors } from "./site";
import { treeRegions } from "./worldTree";

describe("World Tree navigation", () => {
  it("returns every case study to the project canopy", () => {
    expect(projectBackHref).toBe("/#projects");
  });

  it("uses the same project anchor in the header", () => {
    expect(navItems.find(([label]) => label === "Projects")?.[1]).toBe(projectBackHref);
  });

  it("keeps every homepage navigation target valid", () => {
    expect(Object.values(treeAnchors)).toEqual([
      "/#home", "/#projects", "/#experience", "/#research", "/#about", "/#life", "/#contact",
    ]);
  });

  it("tracks the V7 landscape from sky to ground", () => {
    expect(treeRegions.map(({ id, label }) => `${id}:${label}`)).toEqual([
      "home:Sky", "projects:Canopy", "research:Research", "experience:Branches",
      "base:Base", "about:Roots", "life:Life", "contact:Ground",
    ]);
  });
});
