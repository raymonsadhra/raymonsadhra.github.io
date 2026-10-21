import { afterEach, describe, expect, it, vi } from "vitest";
import { analyticsEvents, featuredProjectIdByHref, getUmamiWebsiteId, isUmamiAnalyticsEnabled, projectResourceBySlug } from "./analytics";
import { visibleSelectedWork } from "./selectedWork";

describe("analytics configuration", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("maps every featured work item to a safe analytics identifier", () => {
    expect(visibleSelectedWork.map((item) => featuredProjectIdByHref[item.href])).toEqual([
      "capital-one",
      "rag-motion",
      "terrain-adaptive",
      "ghost-runner",
      "concentrical",
      "tech4good",
      "biomedical-ai",
    ]);
  });

  it("uses the requested stable event names", () => {
    expect(Object.values(analyticsEvents)).toEqual([
      "featured_work_click",
      "resume_click",
      "email_click",
      "linkedin_click",
      "github_click",
      "project_resource_click",
    ]);
  });

  it("labels each existing external project resource without personal data", () => {
    expect(projectResourceBySlug).toEqual({
      "rag-motion": "github_repository",
      "ghost-runner": "devpost",
      "minecraft-settlement-generator": "research_paper",
      "biomedical-ai": "simulation_video",
      tech4good: "website",
    });
  });

  it("keeps analytics disabled when no Website ID is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_UMAMI_WEBSITE_ID", "  ");
    expect(getUmamiWebsiteId()).toBeNull();
    expect(isUmamiAnalyticsEnabled()).toBe(false);
  });
});
