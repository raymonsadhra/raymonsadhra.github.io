/**
 * Presentation-only placement for the World Tree homepage.
 * Content stays in projects.ts and experience.ts; add a matching slug/org here
 * only when you want to fine-tune which side of the tree an item occupies.
 */
export const projectTreePositions: Record<string, { side: "left" | "right"; level: number }> = {
  "rag-motion": { side: "left", level: 1 },
  "ghost-runner": { side: "right", level: 1 },
  "minecraft-settlement-generator": { side: "left", level: 2 },
  "biomedical-ai": { side: "right", level: 2 },
};

export const experienceTreePositions: Record<string, { side: "left" | "right" }> = {
  "Capital One": { side: "left" },
  Concentrical: { side: "right" },
  "Biomedical AI Lab": { side: "left" },
  "Procedural Content Generation Lab": { side: "right" },
  Tech4Good: { side: "left" },
};

export const treeRegions = [
  { id: "projects", label: "Canopy" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Branches" },
  { id: "about", label: "Trunk" },
  { id: "life", label: "Roots" },
  { id: "contact", label: "Ground" },
] as const;
