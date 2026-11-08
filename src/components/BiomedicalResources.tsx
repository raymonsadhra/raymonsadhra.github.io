import Image from "next/image";
import { ExternalLink } from "lucide-react";
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
      </span>
      <span className="biomedical-paper-caption"><span>{paper.title}</span><ExternalLink size={15} aria-hidden="true"/></span>
    </a>
  </section>;
}
