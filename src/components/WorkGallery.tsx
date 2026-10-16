"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
const filters=["All","Systems","AI & ML","Research","Web & Mobile","Developer Tools"] as const;
const publishedProjects=projects.filter(project=>(!project.needsInfo||project.publishDraft)&&project.slug!=="word-on-the-blog");
export function WorkGallery(){const search=useSearchParams();const requested=search.get("filter");const [active,setActive]=useState<typeof filters[number]>(filters.includes(requested as never)?requested as typeof filters[number]:"All");const shown=active==="All"?publishedProjects:publishedProjects.filter(p=>p.categories.includes(active as ProjectCategory));return <><div className="filters" aria-label="Filter projects">{filters.map(f=><button key={f} className={active===f?"active":""} onClick={()=>setActive(f)}>{f}<sup>{f==="All"?publishedProjects.length:publishedProjects.filter(p=>p.categories.includes(f as ProjectCategory)).length}</sup></button>)}</div><div className="work-grid">{shown.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></>}
