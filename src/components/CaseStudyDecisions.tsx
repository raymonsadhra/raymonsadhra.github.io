type Decision = {
  title: string;
  description: string;
};

export function CaseStudyDecisions({ title, decisions }: { title: string; decisions: readonly Decision[] }) {
  const headingId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-title`;
  return <section className="case-decisions" aria-labelledby={headingId}>
    <p className="eyebrow">Engineering decisions</p>
    <h2 id={headingId}>{title}</h2>
    <ol>{decisions.map((decision, index) => <li key={decision.title}><span>0{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.description}</p></div></li>)}</ol>
  </section>;
}
