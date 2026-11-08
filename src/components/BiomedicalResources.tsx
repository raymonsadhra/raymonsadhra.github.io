import Image from "next/image";
import type { Project } from "@/data/projects";
import { media } from "@/data/media";
import { withBasePath } from "@/data/siteEnvironment";
import { analyticsEvents } from "@/data/analytics";
import { ProjectVisual } from "./ProjectVisual";

export function BiomedicalResources({ project }: { project: Project }) {
  const paper = media.projects["biomedical-ai"].paper;

  return <section className="biomedical-resource-grid" aria-label="Biomedical AI simulation and research paper">
    <ProjectVisual project={project} large/>
    <a
      className="biomedical-paper-link"
      href={paper.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={paper.linkLabel}
      data-umami-event={analyticsEvents.projectResourceClick}
      data-umami-event-project="biomedical-ai"
      data-umami-event-resource="research_paper"
    >
      <span className="biomedical-paper-cover">
        <Image
          src={withBasePath(paper.cover)}
          alt={paper.alt}
          fill
          sizes="(max-width: 700px) calc(100vw - 24px), 50vw"
          style={{ objectFit: "contain" }}
        />
        <span className="project-image-label">{paper.actionLabel}</span>
      </span>
    </a>
  </section>;
}
