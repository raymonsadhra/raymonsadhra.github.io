export const treeAnchors = {
  home: "/#home",
  projects: "/#projects",
  experience: "/#experience",
  research: "/#research",
  about: "/#about",
  life: "/#life",
  contact: "/#contact",
} as const;

export const projectBackHref = treeAnchors.projects;

export const navItems = [
  ["Home", treeAnchors.home], ["Projects", treeAnchors.projects],
  ["Experience", treeAnchors.experience], ["Research", treeAnchors.research],
  ["About", treeAnchors.about], ["Life", treeAnchors.life], ["Contact", treeAnchors.contact],
] as const;

export const nowItems = [
  "M.S. Computer Science · UC San Diego",
  "Exploring reliable multimodal systems",
  "Based in California",
] as const;

export const skillGroups = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL"] },
  { label: "Systems", items: ["FastAPI", "Node.js", "Databricks", "Docker", "GitHub Actions", "Firebase"] },
  { label: "Interfaces", items: ["React", "Angular", "React Native", "Expo", "Tailwind", "NgRx", "RxJS"] },
  { label: "Intelligence", items: ["PyTorch", "GNNs", "Vector retrieval", "Embeddings", "Multimodal RAG"] },
] as const;
