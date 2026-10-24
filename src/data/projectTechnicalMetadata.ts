export type ProjectTechnicalMetadata = {
  homepageStack: readonly string[];
  techStack: readonly string[];
  coreConcepts: readonly string[];
};

export const projectTechnicalMetadataByHref = {
  "/work/capital-one": {
    homepageStack: ["Python", "Databricks", "Delta Lake"],
    techStack: ["Python", "Databricks", "Delta Lake"],
    coreConcepts: [
      "Back-end Engineering",
      "Big Data Processing",
      "Data Management and Data Contracts",
      "Reliability Engineering / SLA Monitoring",
      "Caching and Performance Optimization",
    ],
  },
  "/work/rag-motion": {
    homepageStack: ["Python", "FastAPI", "ChromaDB", "OpenAI APIs", "Docker"],
    techStack: ["Python", "FastAPI", "ChromaDB", "OpenAI APIs", "Docker", "FFmpeg"],
    coreConcepts: [
      "Information Retrieval",
      "Retrieval-Augmented Generation (RAG)",
      "Multimodal Semantic Search",
      "Vector Indexing and Similarity Search",
      "Timestamp-Aligned Retrieval",
      "Resumable Data Processing",
    ],
  },
  "/work/minecraft-settlement-generator": {
    homepageStack: ["Python", "A* Pathfinding", "Graph Algorithms"],
    techStack: ["Python", "A* Pathfinding", "Graph Algorithms", "Terrain Heightmaps"],
    coreConcepts: [
      "Graph Algorithms and Pathfinding",
      "Algorithms and Theory",
      "Custom A* Cost Functions",
      "Graph Connectivity and Flood-Fill",
      "Performance Optimization",
      "Terrain-Aware Spatial Analysis",
    ],
  },
  "/work/ghost-runner": {
    homepageStack: ["React Native", "Expo", "Firebase", "Cloud Firestore"],
    techStack: ["React Native", "Expo", "Firebase", "Cloud Firestore", "JavaScript"],
    coreConcepts: [
      "Full-Stack Development",
      "Geospatial Data and GPS Tracking",
      "Timestamp-Based Trajectory Replay",
      "Database Persistence",
      "Application State Management",
    ],
  },
  "/experience": {
    homepageStack: ["TypeScript", "Node.js", "Tree-sitter", "GitHub Actions"],
    techStack: ["TypeScript", "Node.js", "Tree-sitter", "GitHub Actions"],
    coreConcepts: [
      "Software Systems",
      "Compilers and Language Tools",
      "Abstract Syntax Trees and Static Analysis",
      "Dependency Graph Algorithms",
      "Multithreading and Concurrency",
      "CI/CD Automation",
    ],
  },
  "/work/tech4good": {
    homepageStack: ["Angular", "TypeScript", "NgRx", "Firebase"],
    techStack: ["Angular", "TypeScript", "NgRx", "RxJS", "Firebase", "Google Cloud Functions"],
    coreConcepts: [
      "Full-Stack Development",
      "Cloud Computing",
      "Reactive Programming",
      "State Management",
      "Database and API Integration",
    ],
  },
  "/work/biomedical-ai": {
    homepageStack: ["Python", "PyTorch", "Graph Neural Networks"],
    techStack: ["Python", "PyTorch", "Graph Neural Networks", "Molecular Dynamics Data"],
    coreConcepts: [
      "Machine Learning",
      "Graph Neural Networks",
      "Molecular Representation Learning",
      "Protein–Ligand Interaction Modeling",
      "Scientific Data Processing",
    ],
  },
} as const satisfies Record<string, ProjectTechnicalMetadata>;

export function getProjectTechnicalMetadata(href: string): ProjectTechnicalMetadata | undefined {
  return projectTechnicalMetadataByHref[href as keyof typeof projectTechnicalMetadataByHref];
}
