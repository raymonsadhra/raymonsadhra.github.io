import { CaseStudyBackLink } from "@/components/CaseStudyBackLink";
import { CaseStudyDecisions } from "@/components/CaseStudyDecisions";
import { PipelineSystemMap } from "@/components/PipelineSystemMap";
import { PokerChip } from "@/components/PokerChip";

export const metadata = {
  title: "Concentrical — Code Intelligence",
  description: "A technical case study about repository analysis, static analysis, dependency mapping, and automated architecture documentation.",
};

const decisions = [
  { title: "AST-based static analysis with Tree-sitter", description: "I used language-aware Tree-sitter parsing to identify imports, exports, functions, classes, and module structure beyond what text matching could reliably provide. Those structural signals made the organization of an unfamiliar repository easier to inspect." },
  { title: "Multithreaded repository processing", description: "A TypeScript and Node.js analysis engine distributed independent file-analysis work across worker threads. Separating expensive parsing operations improved throughput while keeping large repository scans manageable." },
  { title: "Dependency extraction and architecture mapping", description: "The analyzer connected imports and module relationships into dependency information, including cycle detection, so generated documentation could explain how source areas relate instead of listing files in isolation." },
  { title: "Automated documentation updates", description: "GitHub Actions refreshed generated architecture documentation as repositories changed, reducing the manual work required to keep onboarding material aligned with the source tree." },
] as const;

const stages = [
  { title: "Source Repository", detail: "Application source and configuration" },
  { title: "Repository Scanner", detail: "Traverse files and select relevant inputs" },
  { title: "Tree-sitter Analysis", detail: "Parse code structure across supported languages" },
  { title: "Dependency Analysis", detail: "Map module relationships and detect cycles" },
  { title: "Architecture Documentation", detail: "Generate structural summaries and diagrams" },
  { title: "Developer Output", detail: "Onboarding context for unfamiliar codebases" },
] as const;

export default function Experience() {
  return <article className="case case-study-page technical-case concentrical-case shell">
    <CaseStudyBackLink/>
    <header>
      <div className="case-chip-row"><PokerChip label="C" tone="forest" size="sm"/><p className="eyebrow">Software Engineer Internship · 2025</p></div>
      <h1>Concentrical — Code Intelligence</h1>
      <p className="case-supporting-headline">Making complex repositories easier to understand.</p>
      <p>Built developer tooling that analyzes source-code repositories, identifies architectural relationships, and generates documentation to help engineers understand unfamiliar codebases.</p>
    </header>
    <div className="case-grid"><aside><span>Role</span><p>Software Engineer Intern | Concentrical | 2025</p><span>Outcome</span><p>A multithreaded repository-analysis engine for architecture mapping and automated documentation refreshes.</p></aside><section><h2>The Problem</h2><p>Large repositories are difficult for new developers to understand because architectural information is scattered across source files, dependencies, configuration, and documentation. Manually maintaining diagrams is time-consuming and quickly becomes outdated, so the project used automated code analysis to produce more current architecture documentation.</p></section></div>
    <CaseStudyDecisions title="Turning source code into architecture context." decisions={decisions}/>
    <PipelineSystemMap summary="The implemented flow scans a repository, parses code structure, extracts architectural relationships, and generates documentation that supports developer onboarding." stages={stages} branch={{ title: "GitHub Actions refresh", detail: "Repository updates trigger a new analysis pass and refreshed documentation." }}/>
  </article>;
}
