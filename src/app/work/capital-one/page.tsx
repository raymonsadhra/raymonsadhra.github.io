import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { workBackHref } from "@/data/site";
import { PokerChip } from "@/components/PokerChip";

export const metadata = {
  title: "Capital One — SLA Sentry",
  description: "A public-safe engineering case study about configurable SLA monitoring for enterprise correspondence systems.",
};

const ownership = [
  "Built tenant-agnostic notebook generation and reusable configuration.",
  "Implemented configurable service-level processing and deadline visibility.",
  "Developed Delta-backed caching and unique document-ID lookups for reusable results.",
  "Added concurrent cache persistence with attention to correctness and failure handling.",
] as const;

const decisions = [
  ["Configuration over duplication", "A tenant-agnostic workflow reduced repeated manual setup while keeping behavior explicit and extensible."],
  ["Caching over recomputation", "Persisting reusable intermediate results reduced redundant processing while requiring careful freshness and correctness boundaries."],
  ["Concurrency with control", "Concurrent persistence improved processing efficiency while making failure handling and dependable writes first-class concerns."],
  ["Simplicity within extensibility", "Reusable configuration made the workflow adaptable without obscuring the monitoring logic behind unnecessary abstraction."],
] as const;

function SectionMarker({ number, label }: { number: string; label: string }) {
  return <div className="capital-section-marker"><span>{number}</span><p>{label}</p></div>;
}

export default function CapitalOneCaseStudy() {
  return <article className="case case-study-page capital-one-case capital-sentry-case shell">
    <Link className="back" href={workBackHref}><ArrowLeft size={16}/> Back to All Work</Link>
    <header>
      <div className="case-chip-row"><PokerChip label="CO" tone="forest"/><p className="eyebrow">SLA Sentry · Public-safe engineering case study</p></div>
      <h1>Capital One — SLA Sentry</h1>
      <p className="capital-role">Software Engineer Intern <span>|</span> Capital One <span>|</span> 2026</p>
      <p>A conservative, public-safe account of my work on monitoring, caching, and data-processing workflows. Proprietary system names, internal architecture, and unapproved metrics are intentionally excluded.</p>
    </header>

    <section className="capital-sentry-section">
      <SectionMarker number="01" label="Engineering Problem"/>
      <div><h2>Monitoring deadlines reliably.</h2><p>The correspondence-processing workflow involved manual monitoring overhead, repeated service-level calculations, configuration complexity, and inconsistent mappings across data boundaries. The engineering challenge was to make deadline visibility more configurable and dependable without duplicating processing logic.</p></div>
    </section>

    <section className="capital-sentry-section ownership">
      <SectionMarker number="02" label="Engineering Ownership"/>
      <div><h2>Configurable processing with reusable results.</h2><p>I focused on making the workflow tenant-agnostic, reusable, and easier to monitor while preserving correctness.</p><ol>{ownership.map((item,index)=><li key={item}><span>0{index+1}</span><p>{item}</p></li>)}</ol></div>
    </section>

    <section className="capital-sentry-section decisions">
      <SectionMarker number="03" label="Decisions & Tradeoffs"/>
      <div><h2>Reliability through deliberate boundaries.</h2><div className="capital-decision-grid">{decisions.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    </section>

    <Link className="back capital-bottom-back" href={workBackHref}><ArrowLeft size={16}/> Back to All Work</Link>
  </article>;
}
