import Link from "next/link";
import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { PokerChip } from "@/components/PokerChip";
import { WorkGallery } from "@/components/WorkGallery";
import { experiences, type Experience } from "@/data/experience";
import { getWorkMarker } from "@/data/selectedWork";

export const metadata = { title: "All Work" };

const research = experiences.filter((item) => item.role.includes("Research") || item.org.includes("Biomedical") || item.org.includes("Procedural"));
const professional = experiences.filter((item) => !research.includes(item));
const experienceRoutes: Record<string, string> = {
  "Capital One": "/work/capital-one",
  "Biomedical AI Lab": "/work/biomedical-ai",
  "Procedural Content Generation Lab": "/work/minecraft-settlement-generator",
};

function WorkEntry({ item, index }: { item: Experience; index: number }) {
  const title = item.org === "Capital One" ? "Capital One — SLA Sentry" : item.org;
  const content = <><PokerChip label={getWorkMarker(item.org)} tone={index % 2 ? "burgundy" : "forest"} size="sm"/><div><span>{item.date}</span><h2>{title}</h2><strong>{item.role}</strong><p>{item.summary}</p></div>{experienceRoutes[item.org] && <ArrowUpRight size={17} aria-hidden="true"/>}</>;
  return experienceRoutes[item.org] ? <Link className="all-work-entry" href={`${experienceRoutes[item.org]}?from=work`}>{content}</Link> : <article className="all-work-entry">{content}</article>;
}

function WorkIndex({ title, items }: { title: string; items: Experience[] }) {
  return <section className="shell all-work-index"><p className="eyebrow">{title}</p><div>{items.map((item, index) => <WorkEntry item={item} index={index} key={item.org}/>)}</div></section>;
}

export default function Work() {
  return <><PageIntro eyebrow="All Work" title="Built worlds, documented." copy="Professional engineering, research, and selected projects—organized for quick scanning and deeper technical reading." aside="Open any published case study for its architecture, decisions, and outcomes."/><WorkIndex title="Professional experience" items={professional}/><WorkIndex title="Research" items={research}/><section className="shell page-section all-projects"><div className="all-projects-heading"><p className="eyebrow">Projects</p><h2>Selected systems and products.</h2></div><Suspense><WorkGallery/></Suspense></section></>;
}
