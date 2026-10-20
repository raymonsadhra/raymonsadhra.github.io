import { describe, expect, it } from "vitest";
import { navItems, projectBackHref, sectionAnchors, workBackHref } from "./site";

describe("Portfolio navigation", () => {
  it("returns every project case study to selected work", () => {
    expect(projectBackHref).toBe("/#work");
  });

  it("uses the same work anchor in the header", () => {
    expect(navItems.find(([label]) => label === "Work")?.[1]).toBe(projectBackHref);
  });

  it("keeps every homepage navigation target valid", () => {
    expect(Object.values(sectionAnchors)).toEqual([
      "/", "/#work", "/#work", "/experience", "/about", "/contact",
    ]);
  });

  it("returns experience case studies to featured work", () => {
    expect(workBackHref).toBe("/#work");
  });

  it("uses the V10 chip navigation order", () => {
    expect(navItems.map(([label]) => label)).toEqual(["Home", "About", "Work", "Contact"]);
  });
});
