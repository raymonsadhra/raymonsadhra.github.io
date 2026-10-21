import { describe, expect, it } from "vitest";
import { getWorkMarker, selectedWork, visibleSelectedWork } from "./selectedWork";

describe("V17 featured work", () => {
  it("keeps the seven requested entries visible and ordered", () => {
    expect(visibleSelectedWork.map((item) => item.title)).toEqual([
      "Capital One — SLA Sentry",
      "RAG Motion",
      "Terrain-Adaptive Settlements",
      "Ghost Runner",
      "Concentrical",
      "Tech4Good",
      "Biomedical AI",
    ]);
  });

  it("uses only internal, non-placeholder destinations", () => {
    expect(selectedWork.every((item) => item.href.startsWith("/") && !item.href.includes("example"))).toBe(true);
  });

  it("derives meaningful title initials and supports overrides", () => {
    expect(visibleSelectedWork.map((item) => getWorkMarker(item.title, item.marker))).toEqual(["CO", "RM", "TS", "GR", "C", "T4G", "BA"]);
    expect(getWorkMarker("Protein Modeling")).toBe("PM");
    expect(getWorkMarker("Causeway")).toBe("C");
    expect(getWorkMarker("Ambiguous Title", "ATX")).toBe("ATX");
  });

  it("uses the approved SLA Sentry homepage copy while retaining detailed technology data", () => {
    const capitalOne = selectedWork.find((item) => item.href === "/work/capital-one");
    expect(capitalOne?.title).toBe("Capital One — SLA Sentry");
    expect(capitalOne?.description).toBe("Configurable monitoring for enterprise correspondence systems.");
    expect(capitalOne?.tags).toEqual(["Python", "Databricks", "Reliability"]);
  });

  it("uses the approved RAG Motion homepage description", () => {
    expect(selectedWork.find((item) => item.title === "RAG Motion")?.description).toBe("End-to-end multimodal video RAG system for semantic search and grounded Q&A.");
  });

  it("uses the approved work-type labels", () => {
    expect(visibleSelectedWork.map((item) => item.context)).toEqual([
      "Software Engineer Internship",
      "Personal Project",
      "Research Project",
      "Hackathon Project",
      "Software Engineer Internship",
      "Full-Stack Development",
      "Machine Learning Research",
    ]);
  });

  it("uses the approved Tech4Good copy and dedicated route", () => {
    const tech4Good = selectedWork.find((item) => item.title === "Tech4Good");
    expect(tech4Good?.href).toBe("/work/tech4good");
    expect(tech4Good?.description).toBe("Built cloud-backed applications and full-stack features supporting mission-driven products and real users.");
  });

  it("uses the approved Concentrical and Biomedical AI summaries", () => {
    expect(selectedWork.find((item) => item.title === "Concentrical")?.description).toBe(
      "Repository analysis and architecture tooling to help developers onboard onto complex codebases.",
    );
    expect(selectedWork.find((item) => item.title === "Biomedical AI")?.description).toBe(
      "Graph neural network research for modeling protein–ligand interactions using molecular structures and simulation data.",
    );
  });

  it("uses the approved Ghost Runner description and keeps its recognition", () => {
    const ghostRunner = selectedWork.find((item) => item.title === "Ghost Runner");
    expect(ghostRunner?.description).toBe("A live running ghost that gamifies exercise and lets you race against your past self.");
    expect(ghostRunner?.recognition).toBe("CruzHacks 2026 winner");
  });

  it("labels the terrain project as accepted original research", () => {
    expect(selectedWork.find((item) => item.title === "Terrain-Adaptive Settlements")?.recognition).toBe("Original Research Accepted in EXAG'26");
  });
});
