"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSyncExternalStore } from "react";
import { getCaseStudyReturn } from "@/data/site";

type ReturnSource = "home" | "work";

function readSafeSource(): ReturnSource {
  const source = new URLSearchParams(window.location.search).get("from");
  return source === "work" ? "work" : "home";
}

const subscribe = () => () => undefined;
const readServerSource = (): ReturnSource => "home";

export function CaseStudyBackLink({ className = "" }: { className?: string }) {
  const source = useSyncExternalStore(subscribe, readSafeSource, readServerSource);
  const destination = getCaseStudyReturn(source);
  return <Link className={`back ${className}`.trim()} href={destination.href}><ArrowLeft size={16}/>{destination.label}</Link>;
}
