import { describe, expect, it } from "vitest";
import { selectedWork, visibleSelectedWork } from "./selectedWork";

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
});
