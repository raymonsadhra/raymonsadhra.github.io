import { ArrowRight, GitBranch } from "lucide-react";

type Stage = { title: string; detail: string };
type Branch = { title: string; detail: string };

export function PipelineSystemMap({ summary, stages, branch }: { summary: string; stages: readonly Stage[]; branch?: Branch }) {
  return <section className="pipeline-system-map" aria-labelledby="pipeline-system-map-title">
    <p className="eyebrow">Architecture</p>
    <h2 id="pipeline-system-map-title">System Map</h2>
    <p className="pipeline-system-summary">{summary}</p>
    <ol aria-label="System processing pipeline">
      {stages.map((stage, index) => <li key={stage.title}>
        <span>0{index + 1}</span><strong>{stage.title}</strong><p>{stage.detail}</p>
        {index < stages.length - 1 && <ArrowRight size={18} aria-hidden="true"/>}
      </li>)}
    </ol>
    {branch&&<aside><GitBranch size={18} aria-hidden="true"/><div><strong>{branch.title}</strong><p>{branch.detail}</p></div></aside>}
  </section>;
}
