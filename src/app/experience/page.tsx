import { PageIntro } from "@/components/PageIntro";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { skillGroups } from "@/data/site";
export const metadata={title:"Experience"};
export default function Experience(){return <><PageIntro eyebrow="02 · Experience" title="Building under real constraints." copy="A working history across enterprise infrastructure, developer tooling, scientific ML, procedural generation, and mission-driven products."/><section className="shell page-section"><ExperienceTimeline/></section><section className="shell page-section rule"><div className="skills-intro"><p className="eyebrow">Technologies, with evidence</p><h2>Tools follow the problem.</h2></div><div className="skill-groups">{skillGroups.map(g=><div key={g.label}><span>{g.label}</span><p>{g.items.join(" · ")}</p></div>)}</div></section></>}
