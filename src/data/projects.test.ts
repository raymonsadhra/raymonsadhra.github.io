import { describe, expect, it } from "vitest";
import { projects, getProject } from "./projects";

describe("project content", () => {
  it("has unique, route-safe slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9-]+$/));
  });
  it("resolves every project detail route", () => {
    projects.forEach((project) => expect(getProject(project.slug)).toEqual(project));
  });
  it("models Ghost Runner without inventing a custom backend", () => {
    const ghostRunner = getProject("ghost-runner");
    expect(ghostRunner?.architecture).toEqual(["React Native / Expo mobile app", "Tracking and race logic", "Firebase persistence"]);
    expect(ghostRunner?.decisions).toEqual(["Real-time GPS tracking", "Timestamped ghost replay", "Cloud-backed persistence"]);
  });
});
