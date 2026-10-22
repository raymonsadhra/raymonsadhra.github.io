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
    expect(chips.map((chip) => chip.imageSrc)).toEqual([
      "/images/about/chip1.jpg",
      "/images/about/chip2.jpg",
      "/images/about/chip3.jpg",
      "/images/about/chip4.jpg",
      "/images/about/chip5.jpg",
      "/images/about/chip6.jpg",
    ]);
    expect(chips.every((chip) => chip.caption === "Caption placeholder")).toBe(true);
    expect(chips.every((chip) => chip.alt.length > 0)).toBe(true);
    expect(chips.every((chip) => chip.objectPosition)).toBe(true);
  });
});
