export const analyticsEvents = {
  featuredWorkClick: "featured_work_click",
  resumeClick: "resume_click",
  emailClick: "email_click",
  linkedinClick: "linkedin_click",
  githubClick: "github_click",
  projectResourceClick: "project_resource_click",
} as const;

export type FeaturedProjectId =
  | "capital-one"
  | "rag-motion"
  | "terrain-adaptive"
  | "ghost-runner"
  | "concentrical"
  | "tech4good"
  | "biomedical-ai";

export const featuredProjectIdByHref: Record<string, FeaturedProjectId> = {
  "/work/capital-one": "capital-one",
  "/work/rag-motion": "rag-motion",
  "/work/minecraft-settlement-generator": "terrain-adaptive",
  "/work/ghost-runner": "ghost-runner",
  "/experience": "concentrical",
  "/work/tech4good": "tech4good",
  "/work/biomedical-ai": "biomedical-ai",
};

export const projectResourceBySlug = {
  "rag-motion": "github_repository",
  "ghost-runner": "devpost",
  "minecraft-settlement-generator": "research_paper",
  "biomedical-ai": "simulation_video",
  tech4good: "website",
} as const;

export function getUmamiWebsiteId() {
  return process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim() || null;
}

export function isUmamiAnalyticsEnabled() {
  return process.env.NODE_ENV === "production" && Boolean(getUmamiWebsiteId());
}
