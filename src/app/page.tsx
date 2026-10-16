import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { WorldConstellation } from "@/components/WorldConstellation";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { nowItems } from "@/data/site";

export default function Home(){return <>
  <section className="hero"><div className="shell hero-grid"><Reveal className="hero-copy"><p className="eyebrow">Raymon Sadhra · California</p><h1 className="display"><span>Software engineer. Researcher.</span>Builder of things.</h1><p className="lede">Building scalable systems, intelligent applications, and experiences worth exploring.</p><div className="hero-cta"><Link className="button" href="/work">Explore my work <ArrowDownRight size={17}/></Link><Link className="button secondary" href="/about">Get to know me <ArrowRight size={17}/></Link></div><div className="hero-notes"><div><b>Now</b>M.S. Computer Science</div><div><b>UC San Diego</b>Graduate student</div><div><b>Previously</b>B.S. CS · UC Santa Cruz</div></div></Reveal><Reveal delay={.12}><WorldConstellation/></Reveal></div></section>
  <section className="section rule"><div className="shell"><Reveal><SectionHeader index="01" label="Selected worlds" title="Systems with a point of view." copy="A few projects where algorithms, interfaces, and real constraints meet."/></Reveal><div className="project-grid">{projects.filter(p=>p.featured).slice(0,3).map((p,i)=><Reveal key={p.slug} delay={i*.06}><ProjectCard project={p} index={i}/></Reveal>)}</div><p style={{marginTop:"2rem"}}><Link className="button secondary" href="/work">All work <ArrowRight size={16}/></Link></p></div></section>
  <section className="section rule"><div className="shell"><div className="world-statement"><p className="eyebrow">What connects it all</p><blockquote>I like turning complex problems into <em>working systems</em>—then making those systems feel clear, useful, and alive.</blockquote></div><div className="world-facts"><div><strong>5</strong><span>engineering and research domains</span></div><div><strong>200K+</strong><span>lines analyzed in repositories</span></div><div><strong>35%</strong><span>faster procedural generation</span></div></div></div></section>
  <section className="section rule"><div className="shell"><SectionHeader index="02" label="Experience" title="Learning at production scale." copy="Engineering, research, and project leadership across infrastructure, developer tools, scientific ML, and products."/><ExperienceTimeline limit={4}/><p style={{marginTop:"2rem"}}><Link className="button secondary" href="/experience">Full timeline <ArrowRight size={16}/></Link></p></div></section>
  <section className="section rule"><div className="shell"><div className="now-card"><div><p className="eyebrow">A small signal from now</p><h3>Currently…</h3><p className="muted">An editable snapshot, not a status feed.</p></div><ol className="now-list">{nowItems.map(item=><li key={item}>{item}</li>)}</ol></div></div></section>
</>}
