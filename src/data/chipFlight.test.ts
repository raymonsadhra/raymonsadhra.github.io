import { describe, expect, it } from "vitest";
import { getChipFlightFrame } from "./chipFlight";

const shared = { originX: 600, originY: 400, baseWidth: 200, startScale: 1.5 };

describe("homepage portrait-chip flight", () => {
  it("starts at the exact viewport center", () => {
    const frame = getChipFlightFrame({ ...shared, progress: 0, destination: { left: 80, top: 140, width: 200, height: 200 } });
    expect(frame.x + shared.baseWidth / 2).toBe(600);
    expect(frame.y + 100).toBe(400);
  });

  it("finishes at the current profile destination after scrolling", () => {
    const destination = { left: 80, top: -60, width: 200, height: 200 };
    const frame = getChipFlightFrame({ ...shared, progress: 1, destination });
    expect(frame.x).toBe(destination.left);
    expect(frame.y).toBe(destination.top);
    expect(frame.scale).toBe(1);
  });
});
