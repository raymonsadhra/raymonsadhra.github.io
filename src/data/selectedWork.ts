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
  { title: "Capital One — SLA Sentry", context: "Software engineering internship", description: "Configurable monitoring for enterprise correspondence systems.", tags: ["Python", "Databricks", "Reliability"], href: "/work/capital-one", marker: "CO", visible: true, order: 1 },
  { title: "RAG Motion", context: "Multimodal video intelligence", description: "Search and grounded question-answering across synchronized transcript, visual, OCR, and frame evidence.", tags: ["Python", "FastAPI", "Vector search"], href: "/work/rag-motion", visible: true, order: 2 },
  { title: "Ghost Runner", context: "Mobile running companion", recognition: "CruzHacks 2026 winner", description: "A mobile running companion that turns a previous route into a live race against your past self.", tags: ["React Native", "Expo", "Firebase"], href: "/work/ghost-runner", visible: true, order: 3 },
  { title: "Terrain-Adaptive Settlements", context: "Procedural generation research", description: "Settlement generation that reads terrain, places structures, and connects them with buildable road networks.", tags: ["Python", "A*", "Graph traversal"], href: "/work/minecraft-settlement-generator", visible: true, order: 4 },
  { title: "Concentrical", context: "Developer tooling", description: "Repository analysis and architecture tooling for making large TypeScript codebases easier to understand.", tags: ["TypeScript", "Node.js", "Tree-sitter"], href: "/experience", visible: true, order: 5 },
  { title: "Biomedical AI", context: "Scientific machine learning", description: "Graph neural network research for learning from protein–ligand structures and molecular dynamics.", tags: ["PyTorch", "GNNs", "Research"], href: "/work/biomedical-ai", visible: true, order: 6 },
];

export const visibleSelectedWork = selectedWork.filter((item) => item.visible).sort((a, b) => a.order - b.order);

export function getWorkMarker(title: string, override?: string) {
  if (override) return override.toUpperCase();
  const words = title.trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((word) => word.match(/[A-Za-z0-9]/)?.[0] ?? "").join("").toUpperCase();
}
