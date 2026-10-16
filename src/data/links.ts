export type OptionalLink = string | null;

export const links = {
  github: null as OptionalLink,
  linkedin: null as OptionalLink,
  email: null as OptionalLink,
  resume: null as OptionalLink,
  googleScholar: null as OptionalLink,
  domain: null as OptionalLink,
  projects: {
    "rag-motion": { github: null, live: null, video: null },
    "ghost-runner": { github: null, live: null, video: null, award: null },
    "minecraft-settlement-generator": { github: null, live: null, video: null, paper: null, conference: null },
    "biomedical-ai": { github: null, paper: null },
    "causeway": { github: null, live: null, video: null },
    "rights-now": { github: null, live: null },
    "fridge-friend": { github: null, live: null },
    "word-on-the-blog": { github: null, live: null },
  },
} as const;

export const hasLink = (value: OptionalLink): value is string => Boolean(value);
