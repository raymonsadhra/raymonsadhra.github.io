"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Camera, GraduationCap, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { experiences } from "@/data/experience";
import { links, hasLink } from "@/data/links";
import { media } from "@/data/media";
import { rootContentGroups } from "@/data/life";
import { projects } from "@/data/projects";
import { experienceTreePositions, projectTreePositions, treeRegions } from "@/data/worldTree";
import { withBasePath } from "@/data/siteEnvironment";

const canopyProjects = projects.filter((project) => project.featured);
const causeway = projects.find((project) => project.slug === "causeway");
const archiveProjects = projects.filter((project) => !project.featured && project.slug !== "causeway");

function SkyAtmosphere() {
  return <div className="tropical-sky" aria-hidden="true"><span className="atmospheric-glow"/><svg className="cloud cloud-one" viewBox="0 0 320 120"><path d="M13 94c5-27 28-42 53-38 10-32 57-41 79-14 25-36 82-22 86 19 35-8 70 9 77 33H13Z"/></svg><svg className="cloud cloud-two" viewBox="0 0 360 130"><path d="M8 106c8-29 35-44 64-37 17-45 79-53 106-17 30-27 83-16 94 23 38-10 74 4 82 31H8Z"/></svg><svg className="cloud cloud-three" viewBox="0 0 280 105"><path d="M7 89c8-24 30-34 52-29 15-36 67-40 88-10 28-20 67-6 72 27 28-5 49 2 56 12H7Z"/></svg></div>;
}

function CloudIntroduction() {
  return <header className="cloud-introduction" id="home"><div className="hero-cloud" aria-hidden="true"><i/><i/><i/><i/><i/><span/></div><div className="cloud-copy"><p className="world-hello">hi, i&apos;m Raymon.</p><h1>Software engineer,<br/>researcher, and <em>builder.</em></h1><p>M.S. Computer Science @ UC San Diego</p></div></header>;
}

function BotanicalCrown({tone="project"}:{tone?:"project"|"research"|"experience"}) {
  return <div className={`foliage-crown ${tone}-crown`} aria-hidden="true">{Array.from({length:9},(_,leaf)=><i key={leaf}><span/></i>)}</div>;
}

function WorldTreeIllustration() {
  const sprays = [
    [122, 315, .9], [285, 190, 1.15], [450, 310, .78], [710, 210, 1.1], [915, 330, .9], [1080, 200, .82],
    [155, 690, .7], [1000, 680, .74], [235, 1135, .62], [922, 1140, .62], [230, 1905, .55], [970, 1880, .58],
    [210, 2630, .48], [1010, 2650, .5], [305, 3450, .46], [900, 3465, .44], [185, 4290, .5], [1020, 4310, .5],
  ] as const;
  return <svg className="world-tree-art" viewBox="0 0 1200 6980" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="v4-bark" x1="0" x2="1"><stop stopColor="#65452f"/><stop offset=".48" stopColor="#8b6242"/><stop offset="1" stopColor="#513724"/></linearGradient>
      <linearGradient id="v4-leaf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9aad7e"/><stop offset=".55" stopColor="#426f53"/><stop offset="1" stopColor="#173f31"/></linearGradient>
      <linearGradient id="v5-bark-light" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#4d2d1d"/><stop offset=".25" stopColor="#9a6740"/><stop offset=".52" stopColor="#bd8755"/><stop offset=".78" stopColor="#75442a"/><stop offset="1" stopColor="#3e281c"/></linearGradient>
      <pattern id="bark-grain" width="46" height="86" patternUnits="userSpaceOnUse"><path d="M6 5c18 23-7 39 10 70M32 0c-14 19 11 36-5 80M20 17c9 11-6 21 2 32" fill="none" stroke="#f0c58b" strokeOpacity=".2" strokeWidth="2"/></pattern>
      <filter id="v4-shadow"><feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#173f31" floodOpacity=".14"/></filter>
      <g id="leaf-spray"><path d="M0 28C26-8 69-2 78 30C52 49 21 49 0 28Z"/><path d="M55 36c24-37 66-28 79 2-20 25-53 29-79-2Z"/><path d="M30 7C42-25 81-29 96-4 2 7-6 13-30 11Z" transform="translate(14 20)"/><path className="leaf-vein" d="M8 27c38-7 74-4 112 9"/></g>
    </defs>
    <path className="world-canopy-mass canopy-a" d="M30 730C-15 360 205 95 490 165 675 0 1050 95 1153 376c76 204-26 446-201 520-186 78-618 53-802-12C76 858 42 806 30 730Z"/>
    <path className="world-canopy-mass canopy-b" d="M112 1240c-75-275 126-534 383-469 215-139 538-38 604 210 55 206-95 397-269 420-202 27-649 38-718-161Z"/>
    <path className="world-tree-trunk" filter="url(#v4-shadow)" d="M512 5720c-18-372 30-731 66-1084 31-304 33-621-4-929-43-354-64-702-11-1049 53-349 72-662 8-1003-39-207-29-441 21-642 35-141 28-342-4-525 99 193 142 377 112 566-27 167-22 357 23 516 97 346 92 716 42 1077-45 326-23 664 15 997 38 333 34 681-4 1009-42 364-20 728 28 1067l-292 0Z"/>
    <path className="world-bark-texture" d="M512 5720c-18-372 30-731 66-1084 31-304 33-621-4-929-43-354-64-702-11-1049 53-349 72-662 8-1003-39-207-29-441 21-642 35-141 28-342-4-525 99 193 142 377 112 566-27 167-22 357 23 516 97 346 92 716 42 1077-45 326-23 664 15 997 38 333 34 681-4 1009-42 364-20 728 28 1067Z"/>
    <path className="world-tree-highlight" d="M625 5550c-11-575 96-1034 35-1572-60-527 60-1005 42-1528-9-269 35-563-12-829-38-216-18-429 2-622"/>
    <g className="bark-contours"><path d="M590 5150c75-250-28-470 38-720M684 3990c-62-230 30-455-18-660M620 2920c74-230-35-427 34-640M676 1840c-58-173 17-337-12-515"/><path d="M574 4610c25-27 57-27 81-2-18 36-58 44-81 2Z"/><path d="M676 3500c21-23 49-21 67 2-19 30-48 32-67-2Z"/></g>
    <g className="world-branches">
      <path className="branch branch-rag-motion" d="M634 970C505 765 387 650 115 565"/>
      <path className="branch branch-ghost-runner" d="M659 950C782 731 917 616 1123 550"/>
      <path className="branch branch-minecraft-settlement-generator" d="M637 1335C496 1174 361 1102 105 1092"/>
      <path className="branch branch-biomedical-ai" d="M671 1318C809 1136 923 1087 1110 1050"/>
      <path className="branch branch-research" d="M644 1805C467 1735 317 1700 75 1750"/>
      <path className="branch branch-experience" d="M677 2260C844 2130 1007 2105 1160 2160"/>
      <path className="branch branch-experience" d="M632 2580C461 2468 271 2441 66 2508"/>
      <path className="branch branch-experience" d="M690 2900C835 2788 1001 2772 1144 2850"/>
      <path className="branch branch-experience" d="M625 3190C474 3130 300 3135 92 3220"/>
    </g>
    <g className="world-vines"><path d="M240 380c95 230-72 350 12 566 58 150-35 262 15 382"/><path d="M970 330c-112 247 65 367-42 604-58 128 32 253-22 382"/><path d="M102 1040c185 170 70 330 170 458"/></g>
    <g className="world-roots">
      <path d="M636 4550C488 4690 356 4800 90 4925C302 4900 389 4925 480 4995"/>
      <path d="M687 4550C824 4688 961 4790 1160 4892C989 4886 875 4934 793 5025"/>
      <path d="M650 4680C573 5060 448 5440 122 5860C378 5740 503 5805 564 6050"/>
      <path d="M714 4690C782 5070 925 5440 1120 5820C904 5720 805 5850 744 6160"/>
      <path d="M664 4700C674 5250 625 5930 592 6680"/>
    </g>
    <g className="world-leaves">{sprays.map(([x,y,s],index)=><use href="#leaf-spray" key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${s}) rotate(${index%2?8:-11})`}/>)}</g>
  </svg>;
}

function ProjectBranch({ project, index, onActive }: { project: (typeof projects)[number]; index: number; onActive: (slug: string) => void }) {
  const [active, setActive] = useState(false);
  const position = projectTreePositions[project.slug] ?? { side: index % 2 ? "right" as const : "left" as const, level: Math.floor(index / 2) + 1 };
  const activate=()=>{setActive(true);onActive(project.slug)};const clear=()=>{setActive(false);onActive("none")};
  return <article className={`world-project ${position.side} level-${position.level} leaf-${index%4} ${active ? "active" : ""}`} onMouseEnter={activate} onMouseLeave={clear} onFocus={activate} onBlur={clear}>
    <span className="project-stem" aria-hidden="true"/>
    <BotanicalCrown/>
    <Link className="foliage-label" href={`/work/${project.slug}`} aria-label={`Open ${project.title} case study`}><span className="leaf-kicker">{project.kicker}</span><strong>{project.title}</strong>{project.status&&<small>{project.status}</small>}<span className="leaf-action">Explore project <ArrowUpRight size={14}/></span></Link>
    <div className="project-leaf-detail"><p>{project.summary}</p><div className="world-tags">{project.stack.slice(0,4).map(tech=><span key={tech}>{tech}</span>)}</div></div>
  </article>;
}

function TreeProgress({ active }: { active: string }) {
  return <aside className="tree-progress" aria-label="World Tree regions"><span className="tree-progress-line"/>{treeRegions.map((region)=><a key={region.id} href={`#${region.id}`} className={active===region.id?"active":""}><i/><span>{region.label}</span></a>)}</aside>;
}

export function WorldTreeHome() {
  const [activeRegion, setActiveRegion] = useState("home");
  const [focus, setFocus] = useState("none");
  useEffect(()=>{
    const sections = treeRegions.map(({id})=>document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries)=>{
      const visible = entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible)setActiveRegion(visible.target.id);
    },{rootMargin:"-20% 0px -55%",threshold:[0,.15,.3,.6]});
    sections.forEach(section=>observer.observe(section));
    return()=>observer.disconnect();
  },[]);

  return <div className="world-tree-home" data-focus={focus}>
    <SkyAtmosphere/><WorldTreeIllustration/><TreeProgress active={activeRegion}/>

    <section className="world-region canopy-region" aria-labelledby="projects-title">
      <CloudIntroduction/>
      <h2 id="projects-title" className="sr-only">Featured engineering projects</h2>
      <div className="project-branches" id="projects">{canopyProjects.map((project,index)=><ProjectBranch project={project} index={index} onActive={setFocus} key={project.slug}/>)}</div>
      <div className="seedling-projects"><span>Also growing</span>{archiveProjects.map(project=><span key={project.slug}>{project.title}</span>)}<Link href="/work">Project archive →</Link></div>
    </section>

    <section className="world-region research-region" id="research" aria-labelledby="research-title" onMouseEnter={()=>setFocus("research")} onMouseLeave={()=>setFocus("none")}>
      <div className="region-label"><span>02</span><p>Upper branches</p></div>
      <div className="research-bough"><p className="eyebrow">Research</p><h2 id="research-title">Questions that<br/><em>become systems.</em></h2><div className="research-leaves">
        <Link href="/work/minecraft-settlement-generator" className="research-cluster"><span className="cluster-stem" aria-hidden="true"/><BotanicalCrown tone="research"/><span className="cluster-copy"><small>Procedural Content Generation Lab</small><h3>Terrain-Adaptive Settlements</h3><p>Custom A*, graph traversal, flood-fill, and elevation-aware roads.</p><strong>Lab → connected project</strong></span></Link>
        <Link href="/work/biomedical-ai" className="research-cluster"><span className="cluster-stem" aria-hidden="true"/><BotanicalCrown tone="research"/><span className="cluster-copy"><small>Biomedical AI Lab</small><h3>Protein Modeling</h3><p>Graph neural networks, protein embeddings, and molecular dynamics.</p><strong>Lab → connected project</strong></span></Link>
      </div><Link className="text-link" href="/research">Research notes <ArrowUpRight size={15}/></Link></div>
    </section>

    <section className="world-region experience-region" id="experience" aria-labelledby="experience-title">
      <div className="region-label"><span>03</span><p>Main branches</p></div>
      <header className="branch-heading"><p className="eyebrow">Experience</p><h2 id="experience-title">Built under<br/><em>real constraints.</em></h2><p>Engineering and research across infrastructure, developer tools, scientific ML, procedural generation, and products.</p></header>
      <div className="experience-branches">{experiences.map((item,index)=>{const side=experienceTreePositions[item.org]?.side??(index%2?"right":"left");const connected=item.org==="Tech4Good"?causeway:item.org==="Biomedical AI Lab"?projects.find(project=>project.slug==="biomedical-ai"):item.org==="Procedural Content Generation Lab"?projects.find(project=>project.slug==="minecraft-settlement-generator"):undefined;return <article key={item.org} className={`experience-branch ${side}`} onMouseEnter={()=>setFocus("experience")} onMouseLeave={()=>setFocus("none")}><span className="branch-node" aria-hidden="true"/><span className="experience-stem" aria-hidden="true"/><BotanicalCrown tone="experience"/><div className="experience-leaf-body"><span className="experience-kicker">0{index+1} · {item.date}</span><h3>{item.org}</h3><strong>{item.role}</strong><p>{item.contributions[0]}</p><div className="world-tags">{item.tech.slice(0,4).map(tech=><span key={tech}>{tech}</span>)}</div>{connected&&<Link className="causeway-sprout" href={`/work/${connected.slug}`}><i aria-hidden="true"/><span><small>Connected project</small><b>{connected.title}</b></span><ArrowUpRight size={15}/></Link>}</div></article>})}</div>
      <Link className="text-link experience-link" href="/experience">Full experience <ArrowUpRight size={15}/></Link>
    </section>

    <section className="world-region base-region" id="base" aria-labelledby="base-title">
      <div className="region-label"><span>04</span><p>Base</p></div><h2 id="base-title" className="sr-only">Education and home ground</h2>
      <div className="education-bushes"><article className="education-bush"><BotanicalCrown/><div><GraduationCap/><span>Graduate study</span><strong>UC San Diego</strong><p>M.S. Computer Science</p></div></article><article className="education-bush california"><BotanicalCrown/><div><MapPin/><span>Home ground</span><strong>California</strong><p>Building across disciplines</p></div></article><article className="education-bush"><BotanicalCrown/><div><BookOpen/><span>Foundation</span><strong>UC Santa Cruz</strong><p>B.S. Computer Science</p></div></article></div>
    </section>

    <section className="world-region about-region underground-region" id="about" aria-labelledby="about-title">
      <div className="ground-boundary" aria-hidden="true"><span className="ground-shadow"/><div className="grass-blades">{Array.from({length:18},(_,index)=><i key={index}/>)}</div><div className="fern fern-left"><i/><i/><i/></div><div className="fern fern-right"><i/><i/><i/></div></div><div className="soil-texture" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      <div className="region-label"><span>05</span><p>Roots</p></div><div className="about-roots"><div className="portrait-knot">{media.profile.portrait?<Image src={withBasePath(media.profile.portrait)} alt="Raymon Sadhra" width={800} height={1000}/>:<div className="portrait-placeholder"><Camera size={24}/><span>Portrait coming soon</span><small>A reserved frame for a real photograph.</small></div>}</div><article><p className="eyebrow">About me</p><h2 id="about-title">The person inside<br/><em>the systems.</em></h2><p>I&apos;m a software engineer and computer science graduate student drawn to problems that sit between disciplines. I like understanding the terrain, testing an idea, building the infrastructure, and shaping the experience around it.</p><p>That curiosity has taken me through backend systems, language tooling, applied machine learning, computational biology, procedural generation, and mobile products.</p><Link className="text-link" href="/about">More about me <ArrowUpRight size={15}/></Link></article></div>
    </section>

    <section className="world-region life-region underground-region" id="life" aria-labelledby="life-title">
      <div className="soil-texture" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div><div className="region-label"><span>06</span><p>Personal roots</p></div><header><p className="eyebrow">Life below the surface</p><h2 id="life-title">Room for the life<br/><em>around the work.</em></h2><p>These root clusters are intentionally reserved for real photographs and memories I choose to share.</p></header><div className="personal-root-grid">{rootContentGroups.map((group,index)=><article className={`personal-root root-${index+1}`} key={group.id}><span className="root-connector" aria-hidden="true"/><div className="root-media-placeholder"><Camera size={22}/><small>{group.category}</small></div><h3>{group.label}</h3><p>{group.prompt}</p></article>)}</div><Link className="root-life-link" href="/life"><span>Personal archive</span><strong>Open the Life journal</strong><ArrowUpRight size={16}/></Link>
    </section>

    <section className="world-region ground-region" id="contact" aria-labelledby="contact-title">
      <div className="ground-line" aria-hidden="true"/><div><p className="eyebrow">Among the deepest roots</p><h2 id="contact-title">Let&apos;s build something<br/><em>interesting.</em></h2><p>I&apos;m interested in ambitious engineering, thoughtful products, and research that becomes useful.</p><div className="ground-actions">{hasLink(links.email)?<a className="button" href={`mailto:${links.email}`}>Send an email <ArrowUpRight size={16}/></a>:<Link className="button" href="/contact">Contact details <ArrowUpRight size={16}/></Link>}{hasLink(links.github)&&<a href={withBasePath(links.github)}>GitHub</a>}{hasLink(links.linkedin)&&<a href={withBasePath(links.linkedin)}>LinkedIn</a>}{hasLink(links.resume)&&<a href={withBasePath(links.resume)}>Résumé</a>}</div></div><p className="ground-signoff">Raymon Sadhra · California · Rooted in curiosity</p>
    </section>
  </div>;
}
