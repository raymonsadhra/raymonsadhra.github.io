"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { links, hasLink } from "@/data/links";
import { withBasePath } from "@/data/siteEnvironment";

export function Footer() { const path=usePathname(); if(path==="/")return null; return <footer className="footer"><div className="shell footer-inner">
  <div className="footer-leaf" aria-hidden="true"><i/><i/><i/></div><p className="eyebrow">Say hello</p><h2>Let’s make something<br/><em>worth growing.</em></h2>
  <div className="footer-row"><div>{hasLink(links.email)?<a className="button" href={`mailto:${links.email}`}>Start a conversation <ArrowUpRight size={16}/></a>:<Link className="button" href="/contact">Contact details <ArrowUpRight size={16}/></Link>}</div><div className="footer-links">{hasLink(links.github)&&<a href={withBasePath(links.github)}>GitHub</a>}{hasLink(links.linkedin)&&<a href={withBasePath(links.linkedin)}>LinkedIn</a>}{hasLink(links.resume)&&<a href={withBasePath(links.resume)}>Résumé</a>}</div></div>
  <div className="footer-bottom"><span>Raymon Sadhra · California</span><span>Rooted in curiosity · 2026</span></div>
  </div></footer> }
