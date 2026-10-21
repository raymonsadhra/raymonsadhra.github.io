import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({project,index}:{project:Project;index:number}){return <article className={`project-card card-${index%3}`}><Link href={`/work/${project.slug}?from=work`} aria-label={`View ${project.title} case study`}><ProjectVisual project={project}/><div className="project-meta"><div><span className="kicker">{project.kicker}</span><h3>{project.title}</h3><p>{project.summary}</p></div><ArrowUpRight className="project-arrow"/><div className="project-tags">{project.stack.slice(0,4).map(t=><span className="tag" key={t}>{t}</span>)}</div></div></Link></article>}
