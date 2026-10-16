import { Layers, Route, Atom, AudioLines, Refrigerator, Braces } from "lucide-react";
import type { Project } from "@/data/projects";
const icons={"rag-motion":Layers,"ghost-runner":Route,"minecraft-settlement-generator":Route,"biomedical-ai":Atom,"rights-now":AudioLines,"fridge-friend":Refrigerator,"word-on-the-blog":Braces};
export function ProjectVisual({project,large=false}:{project:Project;large?:boolean}){const Icon=icons[project.slug as keyof typeof icons]??Layers;return <div className={`project-visual tone-${project.tone} ${large?"large":""}`}><div className="visual-grid"/><Icon className="visual-icon" strokeWidth={1}/><span className="visual-code">WORLD / {project.slug.toUpperCase()}</span><div className="visual-orbit o1"/><div className="visual-orbit o2"/></div>}
