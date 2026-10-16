"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";
export function ExperienceTimeline({limit}:{limit?:number}){const [open,setOpen]=useState(0);return <div className="timeline">{experiences.slice(0,limit).map((item,i)=><article key={item.org} className={open===i?"expanded":""}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span className="timeline-date">{item.date}</span><span><strong>{item.role}</strong><em>{item.org}</em></span><ChevronDown/></button><div className="timeline-detail"><p>{item.summary}</p><ul>{item.contributions.map(c=><li key={c}>{c}</li>)}</ul><div>{item.tech.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></article>)}</div>}
