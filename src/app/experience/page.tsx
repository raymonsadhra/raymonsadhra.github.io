import { CaseStudyBackLink } from "@/components/CaseStudyBackLink";
import { CaseStudyDecisions } from "@/components/CaseStudyDecisions";
import { PipelineSystemMap } from "@/components/PipelineSystemMap";
import { PokerChip } from "@/components/PokerChip";
import { ProjectTechnicalProfile } from "@/components/ProjectTechnicalProfile";
import { getProjectTechnicalMetadata } from "@/data/projectTechnicalMetadata";

export const metadata = {
  title: "Concentrical — Code Intelligence",
  description: "A technical case study about multithreaded C++ static analysis, dependency graphs, cycle detection, and automated architecture documentation.",
};

const decisions = [
  { title: "Dynamic work distribution across 16 workers", description: "I built the static-analysis engine in C++ and used a dynamic task queue to distribute files across 16 workers. The queue kept workers productive even when source files differed substantially in size and parsing cost." },
  { title: "AST-based import extraction with Tree-sitter", description: "Each worker used Tree-sitter to parse source code and extract imports from the syntax tree. This language-aware approach produced dependency signals without relying on brittle text matching." },
  { title: "Centralized dependency graphs and cycle detection", description: "A coordinator assembled worker results into a repository-wide dependency graph and traversed it centrally for cycle detection. That avoided redundant graph analysis and made relationships across 7,000+ files easier to navigate." },
  { title: "Automated documentation updates", description: "GitHub Actions refreshed generated architecture documentation as repositories changed, reducing the manual work required to keep onboarding material aligned with the source tree." },
] as const;

const stages = [
  { title: "Source Repository", detail: "Application source and configuration" },
  { title: "Dynamic Task Queue", detail: "Balance files with different parsing costs" },
  { title: "16 C++ Workers", detail: "Parse files concurrently with Tree-sitter" },
  { title: "Graph Coordinator", detail: "Assemble dependencies and detect cycles" },
  { title: "Architecture Documentation", detail: "Generate structural summaries and diagrams" },
  { title: "Developer Output", detail: "Onboarding context for unfamiliar codebases" },
] as const;

export default function Experience() {
  const technicalMetadata = getProjectTechnicalMetadata("/experience")!;
  return <article className="case case-study-page technical-case concentrical-case shell">
    <CaseStudyBackLink/>
    <header>
      <div className="case-chip-row"><PokerChip label="C" tone="forest" size="sm"/><p className="eyebrow">Software Engineer Internship · 2025</p></div>
      <h1>Concentrical — Code Intelligence</h1>
      <p className="case-supporting-headline">Making complex repositories easier to understand.</p>
      <p>I helped developers get up to speed on unfamiliar codebases without manually tracing thousands of files. I built a multithreaded C++ static-analysis engine that processed source concurrently, extracted imports, and assembled repository-wide dependency graphs.</p>
    </header>
    <ProjectTechnicalProfile metadata={technicalMetadata}/>
    <div className="case-grid"><aside><span>Role</span><p>Software Engineer Intern | Concentrical | 2025</p><span>Scale</span><p>16 dynamically queued workers · 7,000+ files · 200K+ lines of code</p><span>Outcome</span><p>A repository-wide dependency graph with cycle detection and automated architecture-documentation refreshes.</p></aside><section><h2>The Problem</h2><p>Large repositories are difficult for new developers to understand because architectural information is scattered across thousands of source files. Manually tracing imports and maintaining diagrams does not scale, so the system needed to analyze files concurrently while keeping dependency traversal centralized and understandable.</p></section></div>
    <CaseStudyDecisions title="Turning source code into architecture context." decisions={decisions}/>
    <PipelineSystemMap summary="The implemented flow dynamically distributes files across 16 C++ workers, parses imports with Tree-sitter, combines results in a coordinator, and generates architecture context that supports developer onboarding." stages={stages} branch={{ title: "GitHub Actions refresh", detail: "Repository updates trigger a new analysis pass and refreshed documentation." }}/>
  </article>;
}
