import { describe, expect, it } from "vitest";
import { navItems, projectBackHref, sectionAnchors, workBackHref } from "./site";

describe("Portfolio navigation", () => {
  it("returns every project case study to the project grid", () => {
    expect(projectBackHref).toBe("/#projects");
  });

  it("uses the same project anchor in the header", () => {
    expect(navItems.find(([label]) => label === "Projects")?.[1]).toBe(projectBackHref);
  });

  it("keeps every homepage navigation target valid", () => {
    expect(Object.values(sectionAnchors)).toEqual([
      "/#home", "/#work", "/#projects", "/#experience", "/#about", "/#contact",
    ]);
  });

  it("returns experience case studies to featured work", () => {
    expect(workBackHref).toBe("/#work");
  });

  it("uses the V9 professional navigation order", () => {
    expect(navItems.map(([label]) => label)).toEqual(["Home", "Work", "Projects", "Experience", "About", "Contact"]);
  });
});
