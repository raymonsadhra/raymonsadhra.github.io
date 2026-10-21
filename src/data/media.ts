/**
 * Add files below public/ and reference them with root-relative paths.
 * Empty arrays deliberately render designed placeholders instead of broken images.
 */
export const media = {
  profile: {
    portrait: null as string | null,
    portraitPosition: "50% 42%",
    candid: [] as string[],
  },
  projects: {
    "rag-motion": { cover: "/projects/rag-motion-photo.png", coverFit: "cover", coverPosition: "50% 50%", href: "https://github.com/RyanDang363/SS", gallery: [], video: null },
    "ghost-runner": { cover: "/projects/ghost-runner-photo.png", coverFit: "contain", coverPosition: "50% 50%", href: "https://devpost.com/software/ghost-runner-imy4e1", gallery: [], video: null },
    "minecraft-settlement-generator": { cover: "/projects/minecraft-settlement.png", coverFit: "cover", coverPosition: "50% 50%", href: null, gallery: [], video: null },
    "biomedical-ai": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, gallery: [], video: null },
    "causeway": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, gallery: [], video: null },
    "rights-now": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, gallery: [], video: null },
    "fridge-friend": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, gallery: [], video: null },
    "word-on-the-blog": { cover: null, coverFit: "cover", coverPosition: "50% 50%", href: null, gallery: [], video: null },
  },
  research: { diagrams: [] as string[] },
} as const;
