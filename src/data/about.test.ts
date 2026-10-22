import { describe, expect, it } from "vitest";
import { educationPhotoChip, introductionPhotoChips } from "./about";

describe("About photo chip configuration", () => {
  it("provides exactly four editable photo placeholders", () => {
    const chips = [...introductionPhotoChips, educationPhotoChip];

    expect(chips).toHaveLength(4);
    expect(chips.map((chip) => chip.placeholder)).toEqual([
      "Photo 01",
      "Photo 02",
      "Photo 03",
      "Photo 04",
    ]);
    expect(chips.every((chip) => chip.caption === "Caption placeholder")).toBe(true);
    expect(chips.every((chip) => chip.imageSrc === null)).toBe(true);
  });
});
