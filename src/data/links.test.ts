import { describe, expect, it } from "vitest";
import { links } from "./links";

describe("V18 public links", () => {
  it("uses the verified contact and resume destinations", () => {
    expect(links.email).toBe("raymonsadhra@gmail.com");
    expect(links.linkedin).toBe("https://www.linkedin.com/in/raymon-sadhra-58871a279/?isSelfProfile=true");
    expect(links.github).toBe("https://github.com/raymonsadhra");
    expect(links.resume).toBe("/documents/Raymon_s_Resume.pdf");
  });

  it("keeps the Tech4Good image as the sole external project link", () => {
    expect(Object.values(links.projects.tech4good).every((value) => value === null)).toBe(true);
  });
});
