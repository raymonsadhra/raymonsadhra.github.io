import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { links } from "@/data/links";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ResearchDiagram } from "@/components/ResearchDiagram";
import { withBasePath } from "@/data/siteEnvironment";
import { PokerChip } from "@/components/PokerChip";
import { getWorkMarker } from "@/data/selectedWork";
import { CaseStudyBackLink } from "@/components/CaseStudyBackLink";
import { RagSystemMap } from "@/components/RagSystemMap";
export const dynamicParams = false;
export function generateStaticParams(){return projects.filter(project=>(!project.needsInfo||project.publishDraft)&&project.slug!=="word-on-the-blog").map(({slug})=>({slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProject(slug);if(!project)notFound();const projectLinks=links.projects[slug as keyof typeof links.projects];const isRag=slug==="rag-motion";return <>
  <article className={`case case-study-page shell ${isRag ? "rag-motion-case" : ""}`}><CaseStudyBackLink/><header><div className="case-chip-row"><PokerChip label={getWorkMarker(project.title)} tone="forest" size="sm"/><p className="eyebrow">{project.kicker} · {project.year}</p></div><h1>{project.title}</h1><p>{project.summary}</p>{!isRag&&<div className="case-tags">{project.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div>}</header><ProjectVisual project={project} large/>
  <div className="case-grid"><aside><span>Role</span><p>{project.role}</p><span>Outcome</span><p>{project.result}</p>{project.status&&<b>{project.status}</b>}</aside><section><h2>The problem</h2><p>{project.problem}</p>{!isRag&&<><h2>Engineering decisions</h2><ol>{project.decisions.map(d=><li key={d}>{d}</li>)}</ol></>}</section></div>
  {isRag&&<section className="rag-engineering-decisions" aria-labelledby="rag-decisions-title"><p className="eyebrow">Engineering decisions</p><h2 id="rag-decisions-title">Designing retrieval around time.</h2><ol><li><span>01</span><div><h3>Timeline-aligned multimodal chunking</h3><p>I grouped transcript content, on-screen OCR, generated visual captions, and sampled-frame references into shared timestamp windows. Organizing evidence around the video timeline—rather than arbitrary text length—preserves relationships between signals that describe the same moment.</p></div></li><li><span>02</span><div><h3>Semantic vector retrieval</h3><p>The supported text representations are embedded and indexed with timestamp metadata in Chroma. Similarity search then identifies relevant, context-rich evidence windows for grounded question answering instead of returning isolated text fragments.</p></div></li><li><span>03</span><div><h3>Persistent indexing checkpoints</h3><p>Intermediate processing state is persisted so interrupted or long-running indexing workflows can resume without repeating stages that already completed.</p></div></li></ol></section>}
  {slug==="minecraft-settlement-generator"&&<section className="case-feature"><p className="eyebrow">Paths that belong to the terrain</p><h2>Roads emerge from constraints, not decoration.</h2><ResearchDiagram/></section>}
  {isRag?<RagSystemMap/>:<section className="architecture"><p className="eyebrow">System map</p><h2>From input to outcome.</h2><div>{project.architecture.map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong>{i<project.architecture.length-1&&<ExternalLink size={14}/>}</div>)}</div></section>}
  {project.needsInfo&&<aside className="needs-info"><strong>Case study in progress</strong><p>This page uses verified public context only. Add the following before treating it as a complete account of Raymon&apos;s contribution:</p><ul>{project.needsInfo.map(item=><li key={item}>{item}</li>)}</ul></aside>}
  {projectLinks&&Object.values(projectLinks).some(Boolean)&&<div className="case-links">{Object.entries(projectLinks).filter(([,url])=>url).map(([label,url])=><a className="button secondary" key={label} href={withBasePath(url!)}>{label} <ExternalLink size={15}/></a>)}</div>}
  </article></>}
