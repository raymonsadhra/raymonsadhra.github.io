import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { links } from "@/data/links";
import { ProjectVisual } from "@/components/ProjectVisual";
import { TimelineDiagram } from "@/components/TimelineDiagram";
import { ResearchDiagram } from "@/components/ResearchDiagram";
import { withBasePath } from "@/data/siteEnvironment";
export const dynamicParams = false;
export function generateStaticParams(){return projects.filter(project=>!project.needsInfo&&project.slug!=="word-on-the-blog").map(({slug})=>({slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProject(slug);if(!project)notFound();const projectLinks=links.projects[slug as keyof typeof links.projects];return <>
  <article className="case shell"><Link className="back" href="/work"><ArrowLeft size={16}/> All work</Link><header><p className="eyebrow">{project.kicker} · {project.year}</p><h1>{project.title}</h1><p>{project.summary}</p><div className="case-tags">{project.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div></header><ProjectVisual project={project} large/>
  <div className="case-grid"><aside><span>Role</span><p>{project.role}</p><span>Outcome</span><p>{project.result}</p>{project.status&&<b>{project.status}</b>}</aside><section><h2>The problem</h2><p>{project.problem}</p><h2>Engineering decisions</h2><ol>{project.decisions.map(d=><li key={d}>{d}</li>)}</ol></section></div>
  {slug==="rag-motion"&&<section className="case-feature"><p className="eyebrow">Evidence, aligned in time</p><h2>A question is only as good as the context around it.</h2><TimelineDiagram/></section>}
  {slug==="minecraft-settlement-generator"&&<section className="case-feature"><p className="eyebrow">Paths that belong to the terrain</p><h2>Roads emerge from constraints, not decoration.</h2><ResearchDiagram/></section>}
  <section className="architecture"><p className="eyebrow">System map</p><h2>From input to outcome.</h2><div>{project.architecture.map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong>{i<project.architecture.length-1&&<ExternalLink size={14}/>}</div>)}</div></section>
  {projectLinks&&Object.values(projectLinks).some(Boolean)&&<div className="case-links">{Object.entries(projectLinks).filter(([,url])=>url).map(([label,url])=><a className="button secondary" key={label} href={withBasePath(url!)}>{label} <ExternalLink size={15}/></a>)}</div>}
  </article></>}
