import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { TropicalTree } from "@/components/TropicalTree";
import { BotanicalDivider } from "@/components/BotanicalDivider";
import { HomeExperience } from "@/components/HomeExperience";
import { Reveal } from "@/components/Reveal";
import { links, hasLink } from "@/data/links";

export default function Home(){return <>
  <section className="v3-hero"><div className="shell v3-hero-grid"><Reveal className="v3-hero-copy"><div className="hero-sprig" aria-hidden="true"><i/><i/><i/></div><p className="hero-hello">hi, i&apos;m Raymon.</p><h1>Software engineer, researcher, and someone who likes <em>building things.</em></h1><p className="v3-hero-lede">From backend infrastructure to intelligent applications and research, I enjoy turning complex ideas into things that work.</p><nav className="hero-links" aria-label="Quick links"><Link href="#selected-work">Work</Link><Link href="#experience">Experience</Link>{hasLink(links.resume)&&<a href={links.resume}>Résumé</a>}<Link href="/contact">Contact</Link></nav></Reveal><Reveal className="hero-field-note" delay={.1}><p>Currently</p><strong>M.S. Computer Science</strong><span>UC San Diego</span><hr/><strong>B.S. Computer Science</strong><span>UC Santa Cruz</span><small>Based in California</small></Reveal></div><a className="scroll-note" href="#selected-work">Selected work <ArrowDownRight size={15}/></a></section>

  <section className="tree-section" id="selected-work"><div className="shell"><Reveal><div className="v3-section-heading"><div><p className="eyebrow">Selected work</p><h2>Ideas, grown into<br/><em>working systems.</em></h2></div><p>Four branches of the same practice: understand the terrain, design the system, and make the result useful.</p></div></Reveal><TropicalTree/><div className="section-action"><Link href="/work">View all projects <ArrowRight size={16}/></Link></div></div></section>

  <BotanicalDivider label="experience"/>
  <section className="v3-section" id="experience"><div className="shell"><div className="v3-section-heading compact"><div><p className="eyebrow">Experience</p><h2>Where I&apos;ve been<br/><em>putting down roots.</em></h2></div><p>Engineering and research across infrastructure, developer tools, scientific ML, and products.</p></div><HomeExperience/><div className="section-action"><Link href="/experience">Full experience <ArrowRight size={16}/></Link></div></div></section>

  <section className="recognition-section"><div className="shell"><p className="eyebrow">Research & recognition</p><div className="recognition-grid"><Link href="/work/minecraft-settlement-generator"><span>01 · Research</span><h3>Terrain-adaptive settlement generation</h3><p>Custom A*, graph traversal, and elevation-aware procedural roads.</p><strong>Accepted to EXAG-26 workshop at AIIDE-26 <ArrowRight size={15}/></strong></Link><Link href="/work/biomedical-ai"><span>02 · Scientific ML</span><h3>Learning molecular interactions</h3><p>Graph neural networks, protein embeddings, and force-matching research.</p><strong>Explore biomedical AI <ArrowRight size={15}/></strong></Link><Link href="/work/ghost-runner"><span>03 · Recognition</span><h3>A race against your past self</h3><p>Live GPS route tracking and synchronized trajectory replay.</p><strong>CruzHacks 2026 winner <ArrowRight size={15}/></strong></Link></div><div className="section-action"><Link href="/research">Research notes <ArrowRight size={16}/></Link></div></div></section>

  <BotanicalDivider label="beyond code"/>
  <section className="life-preview"><div className="shell life-preview-grid"><div className="life-preview-art" aria-hidden="true"><div/><span/><i/><i/></div><div><p className="eyebrow">Beyond code</p><h2>A life around<br/><em>the work.</em></h2><p>A quieter corner for photographs, field notes, memories, and whatever I&apos;m curious about next.</p><Link href="/life">Visit the journal <ArrowRight size={16}/></Link></div></div></section>
</>}
