import type { ProjectTechnicalMetadata } from "@/data/projectTechnicalMetadata";

export function ProjectTechnicalProfile({ metadata }: { metadata: ProjectTechnicalMetadata }) {
  return <section className="project-technical-profile" aria-label="Project technologies and engineering concepts">
    <div>
      <h2>Tech Stack</h2>
      <ul>{metadata.techStack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
    </div>
    <div>
      <h2>Core Engineering Concepts</h2>
      <ul>{metadata.coreConcepts.map((concept) => <li key={concept}>{concept}</li>)}</ul>
    </div>
  </section>;
}
