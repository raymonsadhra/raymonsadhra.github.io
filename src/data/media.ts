/**
 * Add files below public/ and reference them with root-relative paths.
 * Empty arrays deliberately render designed placeholders instead of broken images.
 */
export const media = {
  profile: { portrait: null as string | null, candid: [] as string[] },
  projects: {
    "rag-motion": { cover: null, gallery: [], video: null },
    "ghost-runner": { cover: null, gallery: [], video: null },
    "minecraft-settlement-generator": { cover: null, gallery: [], video: null },
    "biomedical-ai": { cover: null, gallery: [], video: null },
    "causeway": { cover: null, gallery: [], video: null },
    "rights-now": { cover: null, gallery: [], video: null },
    "fridge-friend": { cover: null, gallery: [], video: null },
    "word-on-the-blog": { cover: null, gallery: [], video: null },
  },
  research: { diagrams: [] as string[] },
} as const;
