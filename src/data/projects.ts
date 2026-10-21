export type ProjectCategory = "Systems" | "AI & ML" | "Research" | "Web & Mobile" | "Developer Tools";
export type Project = {
  slug: string; title: string; kicker: string; summary: string; categories: ProjectCategory[];
  stack: string[]; year: string; tone: "cyan" | "amber" | "violet" | "coral" | "lime" | "blue";
  featured: boolean; status?: string; problem: string; role: string; architecture: string[];
  decisions: string[]; result: string; media: string[]; needsInfo?: string[];
  publishDraft?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rag-motion", title: "RAG Motion", kicker: "Multimodal video intelligence",
    summary: "Search and grounded question-answering across synchronized transcript, visual, OCR, and frame evidence.",
    categories: ["AI & ML", "Systems"], stack: ["Python", "FastAPI", "OpenAI", "Chroma", "Docker", "FFmpeg"], year: "2026", tone: "cyan", featured: true,
    problem: "Video knowledge is scattered across what is said, shown, and written on screen. Useful retrieval needs those signals to agree in time.",
    role: "Designed and implemented the multimodal indexing and retrieval pipeline.",
    architecture: ["Video input", "Media processing", "Timestamp-aligned chunking", "Embedding and vector indexing", "Semantic retrieval", "Grounded question answering"],
    decisions: ["Timeline-aligned multimodal chunking", "Semantic vector retrieval", "Persistent indexing checkpoints"],
    result: "A resumable, inspectable video RAG system with timestamped evidence.", media: ["Evidence timeline", "Indexing pipeline", "Grounded answer view"],
  },
  {
    slug: "ghost-runner", title: "Ghost Runner", kicker: "CruzHacks 2026 winner",
    summary: "A mobile running companion that turns a previous route into a live race against your past self.",
    categories: ["Web & Mobile"], stack: ["React Native", "Expo", "Firebase"], year: "2026", tone: "lime", featured: true, status: "Hackathon winner",
    problem: "Solo runs lack the immediate competition and pacing feedback of a real race.", role: "Project lead; built the route tracking and replay experience.",
    architecture: ["Live GPS samples", "Timestamp normalization", "Trajectory interpolation", "Synchronized race replay"],
    decisions: ["Used timestamped GPS traces as the replay source of truth", "Interpolated between sparse samples for smoother comparison", "Kept the live state legible at running speed"],
    result: "Winner at CruzHacks 2026.", media: ["Live race screen", "Route history", "Replay comparison"],
  },
  {
    slug: "minecraft-settlement-generator", title: "Terrain-Adaptive Settlements", kicker: "Procedural generation research",
    summary: "Settlement generation that reads terrain, places structures, and connects them with buildable road networks.",
    categories: ["Research", "Systems"], stack: ["Python", "A*", "Graph traversal", "Flood-fill", "Heightmaps"], year: "2026", tone: "amber", featured: true, status: "Accepted · EXAG-26 at AIIDE-26",
    problem: "Procedural settlements must feel intentional while adapting to uneven, constrained terrain.", role: "Research project lead; developed settlement and road-generation algorithms.",
    architecture: ["Heightmap preprocessing", "Candidate placement", "Terrain-aware A* roads", "Elevation smoothing + world output"],
    decisions: ["Customized A* costs for slope and buildability", "Used flood-fill and graph traversal to establish connectivity", "Cached terrain queries and preprocessed heightmaps"],
    result: "Reduced generation time by 35%; research accepted to EXAG-26 at AIIDE-26.", media: ["Terrain cost map", "Road network", "Generated settlement"],
  },
  {
    slug: "biomedical-ai", title: "Protein Modeling", kicker: "Scientific machine learning",
    summary: "Graph neural network research for learning from protein–ligand structures and molecular dynamics.",
    categories: ["AI & ML", "Research"], stack: ["PyTorch", "GNNs", "Molecular dynamics", "Protein embeddings"], year: "Research", tone: "violet", featured: true,
    problem: "Molecular interactions are geometric, dynamic, and expensive to model.", role: "Contributed to graph-based protein–ligand modeling and scientific ML workflows.",
    architecture: ["Molecular trajectories", "Fingerprints + protein embeddings", "Graph neural network", "Force-matching objective"],
    decisions: ["Combined structural and learned molecular representations", "Used GPU training for graph workloads", "Kept evaluation claims out until verified"],
    result: "An active scientific ML research direction; no unverified performance metrics are presented.", media: ["Molecular graph", "Training pipeline", "Research plot"],
  },
  {
    slug: "causeway", title: "Causeway", kicker: "UCSC Tech4Good Lab",
    summary: "A role-based collaborative learning platform designed around contributing to real-world projects through focused, progressively connected work.",
    categories: ["Web & Mobile", "Research"], stack: ["TypeScript", "Micro-role hierarchies", "Collaborative workflows"], year: "Tech4Good", tone: "lime", featured: false,
    problem: "Situated learning can be difficult to scale when mentoring and project coordination require substantial time. Causeway explores micro-role hierarchies that help learners contribute to larger real-world projects through bounded roles.",
    role: "Contributor through UCSC Tech4Good Lab; specific role and ownership details are awaiting confirmation.",
    architecture: ["Role-based learning pathway", "Micro-role hierarchy", "Collaborative project workflow", "Progressive contribution model"],
    decisions: ["Project-specific implementation details are intentionally withheld until confirmed", "The portfolio distinguishes public research context from individual contribution", "Media slots remain conceptual until real screenshots are supplied"],
    result: "Contribution details and individual impact are awaiting confirmation.",
    media: ["Conceptual role pathway", "Collaboration model", "Screenshot slot"],
    needsInfo: ["Specific role", "Features implemented", "Causeway-specific technology stack", "Technical challenges", "Team contribution", "Validated impact", "Screenshots or demo"],
    publishDraft: true,
  },
  {
    slug: "rights-now", title: "RightsNow", kicker: "AI-assisted information access", summary: "A configurable speech-to-guidance application built with modern transcription and language models.", categories: ["AI & ML", "Web & Mobile"], stack: ["Python", "Whisper", "Gemini", "React", "Node.js"], year: "Project", tone: "coral", featured: false,
    problem: "Project context to be supplied.", role: "Ownership details to be supplied.", architecture: ["Audio input", "Transcription", "Language-model workflow", "React experience"], decisions: ["Case study is intentionally marked as a draft until details are confirmed"], result: "Outcome details pending.", media: ["Product flow", "Interface", "Demo"], needsInfo: ["Problem statement", "Role and collaborators", "Validated outcome"]
  },
  {
    slug: "fridge-friend", title: "Fridge Friend", kicker: "Capstone product", summary: "A food-focused web product with a typed React interface and Supabase backend.", categories: ["Web & Mobile"], stack: ["React", "TypeScript", "Tailwind", "Supabase"], year: "Capstone", tone: "blue", featured: false,
    problem: "Product context to be supplied.", role: "Capstone team role to be supplied.", architecture: ["React client", "Typed domain model", "Supabase data layer"], decisions: ["Structured for an editable product gallery and case study"], result: "Outcome details pending.", media: ["Dashboard", "Core flow", "Responsive view"], needsInfo: ["User problem", "Ownership", "Screenshots"]
  },
  {
    slug: "word-on-the-blog", title: "WordOnTheBlog", kicker: "Full-stack archive", summary: "A MERN publishing application with authentication, REST APIs, Redux state, and tests.", categories: ["Web & Mobile"], stack: ["MongoDB", "Express", "React", "Node.js", "Redux"], year: "Archive", tone: "cyan", featured: false,
    problem: "Build a complete authenticated publishing workflow.", role: "Project details to be supplied.", architecture: ["React + Redux", "REST API", "Authentication", "MongoDB persistence"], decisions: ["Separated API, state, and UI concerns", "Added automated test coverage"], result: "A complete MERN application in the project archive.", media: ["Editor", "Article view", "Test suite"]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
