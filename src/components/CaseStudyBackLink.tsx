import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { sectionAnchors } from "@/data/site";

export function CaseStudyBackLink({ className = "" }: { className?: string }) {
  return <Link className={`back ${className}`.trim()} href={`${sectionAnchors.home}#work`}><ArrowLeft size={16}/>Back to Home</Link>;
}
