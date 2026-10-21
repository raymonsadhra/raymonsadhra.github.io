import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { links } from "@/data/links";
import { ProjectVisual } from "@/components/ProjectVisual";
import { withBasePath } from "@/data/siteEnvironment";
import { PokerChip } from "@/components/PokerChip";
import { getWorkMarker } from "@/data/selectedWork";
import { CaseStudyBackLink } from "@/components/CaseStudyBackLink";
import { RagSystemMap } from "@/components/RagSystemMap";
import { CaseStudyDecisions } from "@/components/CaseStudyDecisions";
import { GhostRunnerArchitecture } from "@/components/GhostRunnerArchitecture";
import { TerrainSystemMap } from "@/components/TerrainSystemMap";

const ragDecisions = [
  { title: "Timeline-aligned multimodal chunking", description: "I grouped transcript content, on-screen OCR, generated visual captions, and sampled-frame references into shared timestamp windows. Organizing evidence around the video timeline—rather than arbitrary text length—preserves relationships between signals that describe the same moment." },
  { title: "Semantic vector retrieval", description: "The supported text representations are embedded and indexed with timestamp metadata in Chroma. Similarity search then identifies relevant, context-rich evidence windows for grounded question answering instead of returning isolated text fragments." },
  { title: "Persistent indexing checkpoints", description: "Intermediate processing state is persisted so interrupted or long-running indexing workflows can resume without repeating stages that already completed." },
] as const;

const ghostDecisions = [
  { title: "Real-time GPS tracking", description: "The mobile app collects location updates during a run, uses them to calculate live distance and pace, and updates the race experience as the runner moves." },
  { title: "Timestamped ghost replay", description: "Previous GPS trajectories are stored with timestamps and treated as the replay source of truth. The current run’s elapsed time is aligned with the saved timeline, and interpolation between recorded points produces a smoother estimate of the ghost’s position." },
  { title: "Cloud-backed persistence", description: "Firebase stores and retrieves run history and saved timestamped trajectories, allowing a completed route to become the opponent in a later race without introducing a separate custom backend." },
] as const;

const terrainDecisions = [
  { title: "Customized A* costs for terrain-aware road construction", description: "I adjusted traversal costs to favor gentler elevation changes, penalize steep or poorly buildable terrain, and encourage construction-ready routes that progress through manageable ±1 elevation steps." },
  { title: "Connectivity through graph traversal", description: "Flood-fill and graph traversal verify that planned roads form a connected network before the settlement layout is finalized." },
  { title: "Cached terrain preprocessing", description: "Preprocessed heightmaps and cached terrain queries reduce repeated work during generation while keeping road planning responsive to the landscape." },
] as const;
export const dynamicParams = false;
export function generateStaticParams(){return projects.filter(project=>(!project.needsInfo||project.publishDraft)&&project.slug!=="word-on-the-blog").map(({slug})=>({slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProject(slug);if(!project)notFound();const projectLinks=links.projects[slug as keyof typeof links.projects];const isRag=slug==="rag-motion";const isGhost=slug==="ghost-runner";const isTerrain=slug==="minecraft-settlement-generator";const usesEditorialCaseStudy=isRag||isGhost||isTerrain;return <>
  <article className={`case case-study-page shell ${usesEditorialCaseStudy ? "technical-case" : ""} ${isRag ? "rag-motion-case" : ""} ${isGhost ? "ghost-runner-case" : ""}`}><CaseStudyBackLink/><header><div className="case-chip-row"><PokerChip label={getWorkMarker(project.title)} tone="forest" size="sm"/><p className="eyebrow">{project.kicker} · {project.year}</p></div><h1>{project.title}</h1><p>{project.summary}</p>{!usesEditorialCaseStudy&&<div className="case-tags">{project.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div>}</header><ProjectVisual project={project} large/>
  <div className="case-grid"><aside><span>Role</span><p>{project.role}</p><span>Outcome</span><p>{project.result}</p>{project.status&&<b>{project.status}</b>}</aside><section><h2>The problem</h2><p>{project.problem}</p>{!usesEditorialCaseStudy&&<><h2>Engineering decisions</h2><ol>{project.decisions.map(d=><li key={d}>{d}</li>)}</ol></>}</section></div>
  {isRag&&<CaseStudyDecisions title="Designing retrieval around time." decisions={ragDecisions}/>}
  {isGhost&&<CaseStudyDecisions title="Engineering a race against yourself." decisions={ghostDecisions}/>}
  {isTerrain&&<CaseStudyDecisions title="Building roads from terrain constraints." decisions={terrainDecisions}/>}
  {isRag?<RagSystemMap/>:isGhost?<GhostRunnerArchitecture/>:isTerrain?<TerrainSystemMap/>:<section className="architecture"><p className="eyebrow">System map</p><h2>From input to outcome.</h2><div>{project.architecture.map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong>{i<project.architecture.length-1&&<ExternalLink size={14}/>}</div>)}</div></section>}
  {project.needsInfo&&<aside className="needs-info"><strong>Case study in progress</strong><p>This page uses verified public context only. Add the following before treating it as a complete account of Raymon&apos;s contribution:</p><ul>{project.needsInfo.map(item=><li key={item}>{item}</li>)}</ul></aside>}
  {projectLinks&&Object.values(projectLinks).some(Boolean)&&<div className="case-links">{Object.entries(projectLinks).filter(([,url])=>url).map(([label,url])=><a className="button secondary" key={label} href={withBasePath(url!)}>{label} <ExternalLink size={15}/></a>)}</div>}
  </article></>}
