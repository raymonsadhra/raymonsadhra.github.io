export const navItems = [
  ["Home", "/#projects"], ["Projects", "/#projects"],
  ["Experience", "/#experience"], ["Research", "/#research"],
  ["About", "/#about"], ["Life", "/#life"], ["Contact", "/#contact"],
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
