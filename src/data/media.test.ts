import { describe, expect, it } from "vitest";
import { media } from "./media";

describe("V17 project media", () => {
  it("links the terrain image to the research paper with accessible copy", () => {
    const terrain = media.projects["minecraft-settlement-generator"];
    expect(terrain.href).toContain("18tVDV9qMehsWjiGcSeSXCxS5VuYeG2s1");
    expect(terrain.actionLabel).toBe("View Research Paper ↗");
    expect(terrain.linkLabel).toMatch(/research paper/i);
  });

  it("uses the uploaded headshot and Tech4Good artwork", () => {
    expect(media.profile.portrait).toBe("/images/profile/headshot.jpg");
    const tech4Good = media.projects.tech4good;
    expect(tech4Good.cover).toBe("/projects/tech4good-port.png");
    expect(tech4Good.href).toBe("https://tech4good.soe.ucsc.edu/");
    expect(tech4Good.actionLabel).toBe("Visit Tech4Good ↗");
  });

  it("uses the real Biomedical AI plot and simulation destination", () => {
    const biomedical = media.projects["biomedical-ai"];
    expect(biomedical.cover).toBe("/projects/ligands-graphs.png");
    expect(biomedical.href).toContain("1di1P8zHzsxFC8r4ZxPAhBm_UDqn2jLqW");
    expect(biomedical.actionLabel).toBe("Watch Model Simulation ↗");
    expect(biomedical.alt).toMatch(/ligand distance/i);
  });
});
