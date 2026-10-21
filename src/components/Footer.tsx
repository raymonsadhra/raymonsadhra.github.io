"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { links, hasLink } from "@/data/links";
import { withBasePath } from "@/data/siteEnvironment";

export function Footer() { const path=usePathname(); if(path==="/")return null; const isCaseStudy=path.startsWith("/work/")||path==="/experience"; return <footer className="footer"><div className="shell footer-inner">
  {isCaseStudy ? <><nav className="case-footer-links" aria-label="Case study footer"><Link href="/#work">Home</Link><Link href="/about">About Me</Link></nav><div className="case-footer-signature"><span>Raymon Sadhra · San Francisco, CA</span><span>Software engineering · 2026</span></div></> : <>
  <p className="eyebrow">Say hello</p><h2>Let’s build something<br/><em>useful.</em></h2>
  <div className="footer-row"><div>{hasLink(links.email)?<a className="button" href={`mailto:${links.email}`}>Start a conversation <ArrowUpRight size={16}/></a>:<Link className="button" href="/about#contact">About &amp; contact <ArrowUpRight size={16}/></Link>}</div><div className="footer-links">{hasLink(links.github)&&<a href={withBasePath(links.github)}>GitHub</a>}{hasLink(links.linkedin)&&<a href={withBasePath(links.linkedin)}>LinkedIn</a>}{hasLink(links.resume)&&<a href={withBasePath(links.resume)}>Résumé</a>}</div></div>
  <div className="footer-bottom"><span>Raymon Sadhra · San Francisco, CA</span><span>Software engineering · 2026</span></div>
  </>}
  </div></footer> }
