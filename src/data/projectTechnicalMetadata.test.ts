import { describe, expect, it } from "vitest";
import { visibleSelectedWork } from "./selectedWork";
import { getProjectTechnicalMetadata, projectTechnicalMetadataByHref } from "./projectTechnicalMetadata";

describe("featured-work technical metadata", () => {
  it("covers every visible Featured Work route", () => {
    expect(visibleSelectedWork.map((item) => item.href).sort()).toEqual(
      Object.keys(projectTechnicalMetadataByHref).sort(),
    );
  });

  it("keeps homepage stacks consistent with detail-page stacks", () => {
    visibleSelectedWork.forEach((item) => {
      const metadata = getProjectTechnicalMetadata(item.href);
      expect(metadata).toBeDefined();
      metadata?.homepageStack.forEach((technology) => {
        expect(metadata.techStack).toContain(technology);
      });
    });
  });

  it("keeps concept lists concise", () => {
    Object.values(projectTechnicalMetadataByHref).forEach(({ coreConcepts }) => {
      expect(coreConcepts.length).toBeGreaterThanOrEqual(4);
      expect(coreConcepts.length).toBeLessThanOrEqual(6);
    });
  });

  it("does not attribute unverified project experience", () => {
    const allTechnologies = Object.values(projectTechnicalMetadataByHref).flatMap(({ techStack }) => techStack);
    expect(allTechnologies).not.toContain("C++");
    expect(projectTechnicalMetadataByHref["/work/capital-one"].techStack).not.toContain("SQL");
    expect(projectTechnicalMetadataByHref["/work/ghost-runner"].techStack).toEqual(
      expect.arrayContaining(["JavaScript", "Cloud Firestore"]),
    );
  });
});
