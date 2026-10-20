import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { experiences } from "@/data/experience";
import { hasLink, links } from "@/data/links";
import { media } from "@/data/media";
import { projects } from "@/data/projects";
import { withBasePath } from "@/data/siteEnvironment";
import { PokerChip } from "./PokerChip";

const featuredProjects = projects.filter(project => project.featured);
const otherProjects = projects.filter(project => !project.featured);
const hasPublicCaseStudy = (project: (typeof projects)[number]) => (!project.needsInfo || project.publishDraft) && project.slug !== "word-on-the-blog";
const categoryBySlug: Record<string, string> = {
  "rag-motion": "AI / Systems",
  "ghost-runner": "Mobile",
  "minecraft-settlement-generator": "Research",
  "biomedical-ai": "ML",
};

const skillGroups = [
  { label: "Languages", tone: "burgundy" as const, items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C", "SQL"] },
  { label: "Backend", tone: "forest" as const, items: ["FastAPI", "Node.js", "REST APIs"] },
  { label: "Data & Infrastructure", tone: "gold" as const, items: ["Databricks", "Delta processing", "Caching", "GitHub Actions"] },
  { label: "Frontend & Mobile", tone: "ivory" as const, items: ["React", "Angular", "React Native", "Expo"] },
  { label: "AI & ML", tone: "charcoal" as const, items: ["PyTorch", "Graph neural networks", "RAG", "Vector search"] },
  { label: "Databases & Cloud", tone: "burgundy" as const, items: ["Firebase", "Firestore", "Supabase", "Google Cloud Functions"] },
] as const;

function SectionHeading({ marker, eyebrow, title, copy }: { marker: string; eyebrow: string; title: string; copy?: string }) {
  return <header className="poker-section-heading"><PokerChip label={marker} tone="burgundy" size="sm"/><div><p className="poker-eyebrow">{eyebrow}</p><h2>{title}</h2>{copy&&<p>{copy}</p>}</div></header>;
}

export function PokerHome() {
  const capitalOne = experiences.find(item => item.org === "Capital One");
  return <div className="poker-home">
    <section className="poker-hero" id="home">
      <div className="shell poker-hero-grid"><div className="poker-hero-copy"><p className="poker-kicker">Software engineer · California</p><h1>Hi, I&apos;m <span>Raymon.</span></h1><h2>Software engineer building backend systems, developer tools, and applied AI products.</h2><p>I enjoy understanding complex systems, solving challenging technical problems, and building reliable software that makes those problems easier to navigate.</p><div className="poker-hero-actions"><a className="poker-button light" href="#projects">View my work <ArrowRight size={16}/></a>{hasLink(links.resume)&&<a href={withBasePath(links.resume)}><FileText size={15}/> Résumé</a>}{hasLink(links.github)&&<a href={withBasePath(links.github)}><Github size={15}/> GitHub</a>}{hasLink(links.linkedin)&&<a href={withBasePath(links.linkedin)}><Linkedin size={15}/> LinkedIn</a>}</div><div className="poker-education"><span><b>M.S. Computer Science</b>UC San Diego</span><span><b>B.S. Computer Science</b>UC Santa Cruz</span></div></div><div className="signature-chip-stage"><div className="table-ring" aria-hidden="true"/><PokerChip label="RS" tone="ivory" size="lg" className="signature-chip"/><PokerChip label="Python" tone="burgundy" size="sm" className="satellite-chip chip-a"/><PokerChip label="Systems" tone="gold" size="sm" className="satellite-chip chip-b"/><PokerChip label="AI / ML" tone="charcoal" size="sm" className="satellite-chip chip-c"/><p>Engineering with discipline, curiosity, and care.</p></div></div>
    </section>

    {capitalOne&&<section className="poker-section featured-work" id="work"><div className="shell"><SectionHeading marker="01" eyebrow="Featured experience" title="Engineering under real constraints." copy="Recent work on configurable data processing, monitoring, and reliability for enterprise-scale correspondence workflows."/><article className="capital-one-feature"><div className="capital-one-title"><PokerChip label="2026" tone="forest"/><p>Capital One</p><h3>Software Engineer Intern</h3><div className="poker-tags"><span>Python</span><span>Databricks</span><span>Delta processing</span><span>Reliability</span></div></div><div className="capital-one-details"><p className="public-safe">Public-safe overview</p><ul><li>Built tenant-agnostic, configurable workflows for service-level monitoring.</li><li>Used Delta caching to reduce redundant computation and improve processing efficiency.</li><li>Identified data-contract inconsistencies and helped shape a safer lookup-layer design across teams.</li></ul><Link href="/work/capital-one">Read the engineering case study <ArrowUpRight size={16}/></Link></div></article></div></section>}

    <section className="poker-section projects-section" id="projects"><div className="shell"><SectionHeading marker="02" eyebrow="Selected projects" title="Systems, products, and research." copy="Four projects that show how I approach retrieval, mobile products, procedural systems, and scientific machine learning."/><div className="poker-project-grid">{featuredProjects.map((project,index)=><article className="poker-project-card" key={project.slug}><div className="project-card-top"><PokerChip label={categoryBySlug[project.slug]??"Project"} tone={(["forest","burgundy","gold","charcoal"] as const)[index%4]} size="sm"/><span>0{index+1}</span></div><p className="poker-project-kicker">{project.kicker}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="poker-tags">{project.stack.slice(0,5).map(item=><span key={item}>{item}</span>)}</div><strong>{project.result}</strong><Link href={`/work/${project.slug}`}>View case study <ArrowUpRight size={15}/></Link></article>)}</div><div className="other-projects"><p>Other projects</p>{otherProjects.map(project=>hasPublicCaseStudy(project)?<Link href={`/work/${project.slug}`} key={project.slug}><span>{project.title}</span><small>{project.kicker}</small><ArrowUpRight size={14}/></Link>:<div key={project.slug}><span>{project.title}</span><small>{project.kicker} · Case study details pending</small></div>)}</div></div></section>

    <section className="poker-section experience-section" id="experience"><div className="shell"><SectionHeading marker="03" eyebrow="Experience & research" title="A technical range built over time."/><div className="poker-timeline">{experiences.map((item,index)=><article key={item.org}><span className="timeline-index">0{index+1}</span><div><p>{item.date}</p><h3>{item.org}</h3><strong>{item.role}</strong></div><p>{item.summary}</p><div className="poker-tags">{item.tech.slice(0,4).map(tech=><span key={tech}>{tech}</span>)}</div></article>)}</div></div></section>

    <section className="poker-section about-section" id="about"><div className="shell"><SectionHeading marker="04" eyebrow="About" title="Curiosity, practiced consistently."/><div className="poker-about-grid"><div className="poker-about-copy"><p>I started learning programming independently in high school through online courses and videos. I completed my B.S. in Computer Science at UC Santa Cruz in 2026 and am pursuing my M.S. in Computer Science at UC San Diego, expected 2028.</p><p>As a first-generation student, my approach is grounded in discipline, curiosity, consistency, and continuous learning. Outside engineering, I enjoy fitness, journaling, and pickleball.</p><Link href="/about">More about me <ArrowRight size={15}/></Link></div>{media.profile.portrait&&<div className="poker-portrait"><Image src={withBasePath(media.profile.portrait)} alt="Raymon Sadhra" fill sizes="(max-width: 800px) 100vw, 36vw"/></div>}<div className="education-ledger"><div><span>2026</span><strong>UC Santa Cruz</strong><p>B.S. Computer Science</p></div><div><span>Expected 2028</span><strong>UC San Diego</strong><p>M.S. Computer Science</p></div></div></div></div></section>

    <section className="poker-section skills-section" id="skills"><div className="shell"><SectionHeading marker="05" eyebrow="Technical toolkit" title="Tools chosen for the problem."/><div className="poker-skills">{skillGroups.map(group=><article key={group.label}><PokerChip label={group.label.slice(0,2).toUpperCase()} tone={group.tone} size="sm"/><div><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></div></article>)}</div></div></section>

    <section className="poker-contact" id="contact"><div className="shell poker-contact-grid"><PokerChip label="RS" tone="ivory"/><div><p className="poker-kicker">Contact</p><h2>Let&apos;s build something useful.</h2><p>I&apos;m interested in ambitious engineering, thoughtful products, and research that becomes useful.</p></div><div className="poker-contact-links">{hasLink(links.email)?<a className="poker-button light" href={`mailto:${links.email}`}><Mail size={16}/> Send an email</a>:<Link className="poker-button light" href="/contact">Contact details <ArrowUpRight size={16}/></Link>}{hasLink(links.github)&&<a href={withBasePath(links.github)}>GitHub</a>}{hasLink(links.linkedin)&&<a href={withBasePath(links.linkedin)}>LinkedIn</a>}</div></div></section>
  </div>;
}
