export type SelectedWorkItem = {
  title: string;
  context: string;
  recognition?: string;
  description: string;
  tags: string[];
  href: string;
  marker?: string;
  visible: boolean;
  order: number;
};

export const selectedWork: SelectedWorkItem[] = [
  { title: "Capital One — SLA Sentry", context: "Software Engineer Internship", description: "Configurable monitoring for enterprise correspondence systems.", tags: ["Python", "Databricks", "Reliability"], href: "/work/capital-one", marker: "CO", visible: true, order: 1 },
  { title: "RAG Motion", context: "Personal Project", description: "End-to-end multimodal video RAG system for semantic search and grounded Q&A.", tags: ["Python", "FastAPI", "Vector search"], href: "/work/rag-motion", visible: true, order: 2 },
  { title: "Terrain-Adaptive Settlements", context: "Research Project", recognition: "Original Research Accepted in EXAG'26", description: "Settlement generation that reads terrain, places structures, and connects them with buildable road networks.", tags: ["Python", "A*", "Graph traversal"], href: "/work/minecraft-settlement-generator", visible: true, order: 3 },
  { title: "Ghost Runner", context: "Hackathon Project", recognition: "CruzHacks 2026 winner", description: "A live running ghost that gamifies exercise and lets you race against your past self.", tags: ["React Native", "Expo", "Firebase"], href: "/work/ghost-runner", visible: true, order: 4 },
  { title: "Concentrical", context: "Software Engineer Internship", description: "Repository analysis and architecture tooling to help developers onboard onto complex codebases.", tags: ["TypeScript", "Node.js", "Tree-sitter"], href: "/experience", visible: true, order: 5 },
  { title: "Tech4Good", context: "Full-Stack Development", description: "Built cloud-backed applications and full-stack features supporting mission-driven products and real users.", tags: ["Angular", "NgRx", "Firebase"], href: "/work/tech4good", marker: "T4G", visible: true, order: 6 },
  { title: "Biomedical AI", context: "Machine Learning Research", description: "Graph neural network research for modeling protein–ligand interactions using molecular structures and simulation data.", tags: ["PyTorch", "GNNs", "Research"], href: "/work/biomedical-ai", visible: true, order: 7 },
];

export const visibleSelectedWork = selectedWork.filter((item) => item.visible).sort((a, b) => a.order - b.order);

export function getWorkMarker(title: string, override?: string) {
  if (override) return override.toUpperCase();
  const words = title.trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((word) => word.match(/[A-Za-z0-9]/)?.[0] ?? "").join("").toUpperCase();
}
