"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";

const featured = projects.filter((project) => project.featured).slice(0, 4);

const placements = ["tree-project nw", "tree-project ne", "tree-project sw", "tree-project se"];
const branchPaths = [
  "M495 690 C425 600 375 510 240 390 C190 345 145 320 80 302",
  "M505 650 C555 555 620 475 760 350 C820 298 870 280 930 270",
  "M480 760 C395 735 315 720 205 685 C150 667 105 640 66 602",
  "M520 750 C605 705 685 690 790 642 C846 616 894 580 936 530",
];

const leaves = [
  [94, 274, -25], [137, 318, 32], [185, 345, -18], [260, 397, 24],
  [904, 245, 18], [846, 286, -34], [790, 326, 20], [728, 373, -20],
  [86, 594, -35], [138, 632, 24], [205, 665, -16], [285, 700, 22],
  [914, 510, 30], [862, 560, -20], [798, 615, 24], [712, 661, -24],
] as const;

export function TropicalTree() {
  const [active, setActive] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return <div className="tree-stage" data-active={active ?? "none"}>
    <div className="tree-kicker"><span>04 branches</span><span>One growing practice</span></div>
    <svg className="tree-art" viewBox="0 0 1000 980" role="img" aria-labelledby="tree-title tree-description">
      <title id="tree-title">A tropical project tree connecting four featured engineering projects</title>
      <desc id="tree-description">The trunk represents software engineering foundations. Four branches lead to RAG Motion, Ghost Runner, Terrain-Adaptive Settlements, and Protein Modeling.</desc>
      <defs>
        <linearGradient id="trunk" x1="0" x2="1"><stop stopColor="#173c2d"/><stop offset=".55" stopColor="#245a42"/><stop offset="1" stopColor="#173c2d"/></linearGradient>
        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#91a88c"/><stop offset="1" stopColor="#245a42"/></linearGradient>
        <filter id="softShadow"><feDropShadow dx="0" dy="12" stdDeviation="13" floodColor="#173c2d" floodOpacity=".14"/></filter>
      </defs>
      <motion.path className="tree-trunk" d="M470 965 C445 870 452 765 485 678 C505 620 505 540 486 458 C470 390 482 330 506 264 C532 196 526 120 515 62 C554 145 574 221 554 295 C539 350 536 405 555 468 C581 555 572 640 531 713 C498 774 505 865 535 965 Z" initial={reduced ? false : {opacity:0, pathLength:0}} whileInView={{opacity:1,pathLength:1}} viewport={{once:true,margin:"-10%"}} transition={{duration:1.1,ease:[.25,.7,.2,1]}} fill="url(#trunk)" filter="url(#softShadow)"/>
      <path className="trunk-mark" d="M505 910 C482 817 486 744 515 677 C549 596 540 520 516 447 C497 386 510 314 533 258"/>
      {branchPaths.map((path, index) => <motion.path key={path} className={`tree-branch branch-${index}`} d={path} initial={reduced ? false : {pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true,margin:"-15%"}} transition={{duration:1.15,delay:.12+index*.08,ease:[.25,.7,.2,1]}} />)}
      <motion.path className="tree-vine" d="M615 425 C704 435 663 528 724 533 C788 538 760 448 836 460 C901 470 878 560 918 587" initial={reduced ? false : {pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1.25,delay:.6}}/>
      <motion.path className="tree-vine thin" d="M348 519 C286 536 326 603 262 614 C210 623 196 571 141 584" initial={reduced ? false : {pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1.2,delay:.72}}/>
      {leaves.map(([x,y,r],i)=><motion.g key={`${x}-${y}`} className="tree-leaf" transform={`translate(${x} ${y}) rotate(${r})`} initial={reduced?false:{opacity:0,scale:.65}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.5,delay:.36+i*.035,type:"spring"}}><path d="M0 0 C18-42 65-48 89-18 C71 20 28 31 0 0Z" fill="url(#leaf)"/><path d="M7-1 C34-7 54-14 78-23"/></motion.g>)}
      <g className="tree-roots"><path d="M493 930 C410 936 358 963 280 974"/><path d="M518 932 C602 941 652 967 735 974"/><path d="M497 942 C458 963 443 973 408 979"/></g>
    </svg>

    <div className="tree-projects" aria-label="Featured projects">
      {featured.map((project,index)=><article className={placements[index]} key={project.slug} onMouseEnter={()=>setActive(project.slug)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(project.slug)} onBlur={()=>setActive(null)}>
        <span className="tree-project-index">0{index+1}</span>
        <p>{project.kicker}</p>
        <h3>{project.title}</h3>
        <div className={`botanical-visual visual-${project.slug}`} aria-hidden="true"><i/><i/><i/></div>
        <p className="tree-project-summary">{project.summary}</p>
        <div className="tree-project-meta">{project.stack.slice(0,3).map(item=><span key={item}>{item}</span>)}</div>
        <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>View project <ArrowUpRight size={15}/></Link>
      </article>)}
    </div>
  </div>;
}
