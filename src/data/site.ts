export const sectionAnchors = {
  home: "/",
  work: "/work",
  projects: "/work",
  experience: "/experience",
  about: "/about",
  contact: "/about#contact",
} as const;

export const projectBackHref = sectionAnchors.work;
export const workBackHref = sectionAnchors.work;

export type CaseStudyReturn = { href: string; label: string };

export function getCaseStudyReturn(source: string | null): CaseStudyReturn {
  if (source === "work") return { href: "/work/", label: "Back to All Work" };
  return { href: "/#work", label: "Back to Home" };
}

export const navItems = [
  ["Home", sectionAnchors.home], ["All Work", sectionAnchors.work], ["About", sectionAnchors.about],
] as const;

export const nowItems = [
  "M.S. Computer Science · UC San Diego",
  "Exploring reliable multimodal systems",
  "Based in San Francisco, CA",
] as const;

export const skillGroups = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL"] },
  { label: "Systems", items: ["FastAPI", "Node.js", "Databricks", "Docker", "GitHub Actions", "Firebase"] },
  { label: "Interfaces", items: ["React", "Angular", "React Native", "Expo", "Tailwind", "NgRx", "RxJS"] },
  { label: "Intelligence", items: ["PyTorch", "GNNs", "Vector retrieval", "Embeddings", "Multimodal RAG"] },
] as const;
