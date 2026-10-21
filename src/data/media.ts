/**
 * Add files below public/ and reference them with root-relative paths.
 * Empty arrays deliberately render designed placeholders instead of broken images.
 */
export const media = {
  profile: {
    portrait: "/images/profile/headshot.jpg" as string | null,
    portraitPosition: "50% 48%",
    candid: [] as string[],
  },
  projects: {
    "rag-motion": { cover: "/projects/rag-motion-photo.png", coverFit: "cover", coverPosition: "50% 50%", href: "https://github.com/RyanDang363/SS", alt: "RAG Motion indexing and grounded question-answering interface", actionLabel: "Open Project ↗", linkLabel: "Open the RAG Motion repository", gallery: [], video: null },
    "ghost-runner": { cover: "/projects/ghost-runner-photo.png", coverFit: "contain", coverPosition: "50% 50%", href: "https://devpost.com/software/ghost-runner-imy4e1", alt: "Ghost Runner mobile application home screen", actionLabel: "Open Project ↗", linkLabel: "Open the Ghost Runner Devpost project", gallery: [], video: null },
    "minecraft-settlement-generator": { cover: "/projects/minecraft-settlement.png", coverFit: "cover", coverPosition: "50% 50%", href: "https://drive.google.com/file/d/18tVDV9qMehsWjiGcSeSXCxS5VuYeG2s1/view?usp=sharing", alt: "Terrain-Adaptive Settlements generated across mountainous Minecraft terrain", actionLabel: "View Research Paper ↗", linkLabel: "View Terrain-Adaptive Settlements research paper", gallery: [], video: null },
    "biomedical-ai": { cover: "/projects/ligands-graphs.png", coverFit: "contain", coverPosition: "50% 50%", href: "https://drive.google.com/file/d/1di1P8zHzsxFC8r4ZxPAhBm_UDqn2jLqW/view?usp=sharing", alt: "Plots of ligand distance, displacement, velocity, and RMSD from molecular-dynamics trajectories", actionLabel: "Watch Model Simulation ↗", linkLabel: "Watch Biomedical AI model simulation", gallery: [], video: null },
    "tech4good": { cover: "/projects/tech4good-port.png", coverFit: "contain", coverPosition: "50% 50%", href: "https://tech4good.soe.ucsc.edu/", alt: "Tech4Good Social Computing Lab at UC Santa Cruz project artwork", actionLabel: "Visit Tech4Good ↗", linkLabel: "Visit the Tech4Good Lab website", gallery: [], video: null },
    "causeway": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, alt: "Causeway conceptual project visual", actionLabel: "", linkLabel: "", gallery: [], video: null },
    "rights-now": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, alt: "RightsNow project visual", actionLabel: "", linkLabel: "", gallery: [], video: null },
    "fridge-friend": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, alt: "Fridge Friend project visual", actionLabel: "", linkLabel: "", gallery: [], video: null },
    "word-on-the-blog": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, alt: "WordOnTheBlog project visual", actionLabel: "", linkLabel: "", gallery: [], video: null },
  },
  research: { diagrams: [] as string[] },
} as const;
