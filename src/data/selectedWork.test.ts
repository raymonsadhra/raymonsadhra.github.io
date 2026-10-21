import { describe, expect, it } from "vitest";
import { getWorkMarker, selectedWork, visibleSelectedWork } from "./selectedWork";

describe("V10 selected work", () => {
  it("keeps the six requested entries visible and ordered", () => {
    expect(visibleSelectedWork.map((item) => item.title)).toEqual([
      "Capital One",
      "RAG Motion",
      "Ghost Runner",
      "Terrain-Adaptive Settlements",
      "Concentrical",
      "Biomedical AI",
    ]);
  });

  it("uses only internal, non-placeholder destinations", () => {
    expect(selectedWork.every((item) => item.href.startsWith("/") && !item.href.includes("example"))).toBe(true);
  });

  it("derives meaningful title initials and supports overrides", () => {
    expect(visibleSelectedWork.map((item) => getWorkMarker(item.title, item.marker))).toEqual(["CO", "RM", "GR", "TS", "C", "BA"]);
    expect(getWorkMarker("Protein Modeling")).toBe("PM");
    expect(getWorkMarker("Causeway")).toBe("C");
    expect(getWorkMarker("Ambiguous Title", "ATX")).toBe("ATX");
  });
});
