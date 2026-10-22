import { describe, expect, it } from "vitest";
import { getNextWorkIndex } from "./PortfolioKeyboardNavigation";

describe("Featured Work keyboard selection", () => {
  it("selects the correct boundary item before a selection exists", () => {
    expect(getNextWorkIndex(null, "next", 7)).toBe(0);
    expect(getNextWorkIndex(null, "previous", 7)).toBe(6);
  });

  it("moves in both directions and wraps at each boundary", () => {
    expect(getNextWorkIndex(2, "next", 7)).toBe(3);
    expect(getNextWorkIndex(2, "previous", 7)).toBe(1);
    expect(getNextWorkIndex(6, "next", 7)).toBe(0);
    expect(getNextWorkIndex(0, "previous", 7)).toBe(6);
  });

  it("does not select an item from an empty list", () => {
    expect(getNextWorkIndex(null, "next", 0)).toBeNull();
  });
});
