import { describe, expect, it } from "vitest";
import { educationPhotoChips, introductionPhotoChips } from "./about";

describe("About photo chip configuration", () => {
  it("provides two three-chip clusters with editable photo placeholders", () => {
    const chips = [...introductionPhotoChips, ...educationPhotoChips];

    expect(introductionPhotoChips).toHaveLength(3);
    expect(educationPhotoChips).toHaveLength(3);
    expect(chips).toHaveLength(6);
    expect(chips.map((chip) => chip.placeholder)).toEqual([
      "Photo 01",
      "Photo 02",
      "Photo 03",
      "Photo 04",
      "Photo 05",
      "Photo 06",
    ]);
    expect(chips.every((chip) => chip.caption === "Caption placeholder")).toBe(true);
    expect(chips.every((chip) => chip.imageSrc === null)).toBe(true);
  });
});
