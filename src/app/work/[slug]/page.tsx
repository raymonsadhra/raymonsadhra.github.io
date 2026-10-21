import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { links } from "@/data/links";
import { ProjectVisual } from "@/components/ProjectVisual";
import { TimelineDiagram } from "@/components/TimelineDiagram";
import { ResearchDiagram } from "@/components/ResearchDiagram";
import { withBasePath } from "@/data/siteEnvironment";
import { projectBackHref } from "@/data/site";
import { PokerChip } from "@/components/PokerChip";
import { getWorkMarker } from "@/data/selectedWork";
export const dynamicParams = false;
export function generateStaticParams(){return projects.filter(project=>(!project.needsInfo||project.publishDraft)&&project.slug!=="word-on-the-blog").map(({slug})=>({slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProject(slug);if(!project)notFound();const projectLinks=links.projects[slug as keyof typeof links.projects];return <>
  <article className="case case-study-page shell"><Link className="back" href={projectBackHref}><ArrowLeft size={16}/> Back to All Work</Link><header><div className="case-chip-row"><PokerChip label={getWorkMarker(project.title)} tone="forest" size="sm"/><p className="eyebrow">{project.kicker} · {project.year}</p></div><h1>{project.title}</h1><p>{project.summary}</p><div className="case-tags">{project.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div></header><ProjectVisual project={project} large/>
  <div className="case-grid"><aside><span>Role</span><p>{project.role}</p><span>Outcome</span><p>{project.result}</p>{project.status&&<b>{project.status}</b>}</aside><section><h2>The problem</h2><p>{project.problem}</p><h2>Engineering decisions</h2><ol>{project.decisions.map(d=><li key={d}>{d}</li>)}</ol></section></div>
  {slug==="rag-motion"&&<section className="case-feature"><p className="eyebrow">Evidence, aligned in time</p><h2>A question is only as good as the context around it.</h2><TimelineDiagram/></section>}
  {slug==="minecraft-settlement-generator"&&<section className="case-feature"><p className="eyebrow">Paths that belong to the terrain</p><h2>Roads emerge from constraints, not decoration.</h2><ResearchDiagram/></section>}
  <section className="architecture"><p className="eyebrow">System map</p><h2>From input to outcome.</h2><div>{project.architecture.map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong>{i<project.architecture.length-1&&<ExternalLink size={14}/>}</div>)}</div></section>
  {project.needsInfo&&<aside className="needs-info"><strong>Case study in progress</strong><p>This page uses verified public context only. Add the following before treating it as a complete account of Raymon&apos;s contribution:</p><ul>{project.needsInfo.map(item=><li key={item}>{item}</li>)}</ul></aside>}
  {projectLinks&&Object.values(projectLinks).some(Boolean)&&<div className="case-links">{Object.entries(projectLinks).filter(([,url])=>url).map(([label,url])=><a className="button secondary" key={label} href={withBasePath(url!)}>{label} <ExternalLink size={15}/></a>)}</div>}
  </article></>}
