export type SelectedWorkItem = {
  title: string;
  context: string;
  description: string;
  tags: string[];
  href: string;
  marker: string;
  visible: boolean;
  order: number;
};

export const selectedWork: SelectedWorkItem[] = [
  { title: "Capital One", context: "Software engineering internship", description: "Configurable monitoring, caching, and data-processing workflows for enterprise correspondence systems.", tags: ["Python", "Databricks", "Reliability"], href: "/work/capital-one", marker: "CO", visible: true, order: 1 },
  { title: "RAG Motion", context: "Multimodal video intelligence", description: "Search and grounded question-answering across synchronized transcript, visual, OCR, and frame evidence.", tags: ["Python", "FastAPI", "Vector search"], href: "/work/rag-motion", marker: "AI", visible: true, order: 2 },
  { title: "Ghost Runner", context: "CruzHacks 2026 winner", description: "A mobile running companion that turns a previous route into a live race against your past self.", tags: ["React Native", "Expo", "Firebase"], href: "/work/ghost-runner", marker: "GR", visible: true, order: 3 },
  { title: "Terrain-Adaptive Settlements", context: "Procedural generation research", description: "Settlement generation that reads terrain, places structures, and connects them with buildable road networks.", tags: ["Python", "A*", "Graph traversal"], href: "/work/minecraft-settlement-generator", marker: "PG", visible: true, order: 4 },
  { title: "Concentrical", context: "Developer tooling", description: "Repository analysis and architecture tooling for making large TypeScript codebases easier to understand.", tags: ["TypeScript", "Node.js", "Tree-sitter"], href: "/experience", marker: "DT", visible: true, order: 5 },
  { title: "Biomedical AI", context: "Scientific machine learning", description: "Graph neural network research for learning from protein–ligand structures and molecular dynamics.", tags: ["PyTorch", "GNNs", "Research"], href: "/work/biomedical-ai", marker: "ML", visible: true, order: 6 },
];

export const visibleSelectedWork = selectedWork.filter((item) => item.visible).sort((a, b) => a.order - b.order);
