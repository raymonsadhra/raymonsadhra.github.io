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
  it("uses the approved terrain role, outcome, and pipeline", () => {
    const terrain = getProject("minecraft-settlement-generator");
    expect(terrain?.role).toBe("Road network project lead");
    expect(terrain?.result).toContain("35%");
    expect(terrain?.result).toContain("±1 elevation steps");
    expect(terrain?.architecture).toHaveLength(6);
  });
  it("uses the approved Biomedical AI framing without unsupported claims", () => {
    const biomedical = getProject("biomedical-ai");
    expect(biomedical?.title).toBe("Biomedical AI — Protein–Ligand Modeling");
    expect(biomedical?.role).toBe("Machine Learning Research Assistant | Biomedical AI Lab");
    expect(biomedical?.summary).toBe("Learning molecular interactions through graph-based machine learning.");
    expect(biomedical?.result).not.toMatch(/clinical|accuracy|percent|%/i);
  });
  it("models Tech4Good as a verified full-stack case study", () => {
    const tech4Good = getProject("tech4good");
    expect(tech4Good?.title).toBe("Tech4Good — Full-Stack Engineering");
    expect(tech4Good?.role).toBe("Full-Stack Developer | Tech4Good Lab");
    expect(tech4Good?.stack).toEqual(["Angular", "TypeScript", "NgRx", "RxJS", "Firebase", "Google Cloud Functions"]);
    expect(tech4Good?.result).toContain("550+ users");
    expect(tech4Good?.result).toContain("Causeway");
  });
});
