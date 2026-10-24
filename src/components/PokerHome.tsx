"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { hasLink, links } from "@/data/links";
import { getWorkMarker, visibleSelectedWork } from "@/data/selectedWork";
import { withBasePath } from "@/data/siteEnvironment";
import { media } from "@/data/media";
import { PokerChip } from "./PokerChip";
import { AnimatedPortraitChip } from "./AnimatedPortraitChip";
import { analyticsEvents, featuredProjectIdByHref } from "@/data/analytics";
import { usePortfolioKeyboardNavigation } from "./PortfolioKeyboardNavigation";

const profileLinks = [
  { label: "LinkedIn", value: links.linkedin, icon: Linkedin },
  { label: "GitHub", value: links.github, icon: Github },
] as const;

export function PokerHome() {
  const { selectedWorkIndex } = usePortfolioKeyboardNavigation();

  return <div className="minimal-home" id="home">
    <div className="shell profile-work-layout">
      <aside className="profile-sidebar" aria-labelledby="profile-name">
        <AnimatedPortraitChip portrait={media.profile.portrait} objectPosition={media.profile.portraitPosition} />
        <p className="profile-eyebrow">Software engineer · San Francisco, CA</p>
        <h1 id="profile-name">Raymon Sadhra</h1>
        <h2>Software Engineer &amp; Computer Science Graduate Student</h2>
        <div className="profile-education"><span>M.S. CS — UCSD</span><span>B.S. CS — UCSC</span></div>
        <p className="profile-intro">I&apos;m a software engineer and M.S. Computer Science student at UC San Diego. I&apos;m most at home when I can work on creating long lasting solutions to complex problems</p>
        <div className="profile-links">
          {hasLink(links.email)&&<a href={`mailto:${links.email}`} data-umami-event={analyticsEvents.emailClick}><Mail size={15} />Contact</a>}
          {profileLinks.map(({ label, value, icon: Icon }) => hasLink(value) && <a key={label} href={withBasePath(value)} target="_blank" rel="noopener noreferrer" data-umami-event={label === "LinkedIn" ? analyticsEvents.linkedinClick : analyticsEvents.githubClick}><Icon size={15} />{label}</a>)}
        </div>
      </aside>

      <section className="selected-work" id="work" aria-labelledby="selected-work-title">
        <header className="selected-work-heading">
          <h2 id="selected-work-title">Featured Work</h2>
        </header>
        <div className="selected-work-list">
          {visibleSelectedWork.map((item, index) => <Link className="selected-work-row" href={item.href} key={item.title} data-featured-work-index={index} data-keyboard-selected={selectedWorkIndex === index ? "true" : undefined} data-umami-event={analyticsEvents.featuredWorkClick} data-umami-event-project={featuredProjectIdByHref[item.href]}>
            <div className="work-marker"><PokerChip label={getWorkMarker(item.title, item.marker)} tone={index % 3 === 0 ? "burgundy" : index % 3 === 1 ? "forest" : "gold"} size="sm" /></div>
            <div className="work-copy">
              {item.recognition&&<p className="work-recognition">{item.recognition}</p>}<p className="work-type">{item.context}</p><h3>{item.title}</h3><span>{item.description}</span>
            </div>
            <ArrowUpRight className="work-arrow" size={19} aria-hidden="true" />
          </Link>)}
        </div>
        <aside className="coursework-note" aria-labelledby="coursework-note-title">
          <h3 id="coursework-note-title">Additional Programming Experience</h3>
          <p>My <strong>C++</strong> experience comes primarily from university coursework, including programming assignments and projects in Data Structures &amp; Algorithms and Algorithm Analysis. My broader computer science coursework includes Operating Systems, Computer Architecture, Compiler Construction, Computer Networks, Distributed Computing &amp; Systems, and Principles of Computer Systems Design.</p>
        </aside>
      </section>
    </div>

  </div>;
}
