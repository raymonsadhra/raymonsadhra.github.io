"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { lifeEntries } from "@/data/life";
import { withBasePath } from "@/data/siteEnvironment";

export function LightboxGallery(){
  const photos=lifeEntries.filter(entry=>!entry.placeholder).flatMap(entry=>entry.photos.map((photo)=>({entry,photo})));
  const [selected,setSelected]=useState<number|null>(null);
  useEffect(()=>{const fn=(e:KeyboardEvent)=>{if(selected===null||photos.length===0)return;if(e.key==="Escape")setSelected(null);if(e.key==="ArrowRight")setSelected((selected+1)%photos.length);if(e.key==="ArrowLeft")setSelected((selected-1+photos.length)%photos.length)};addEventListener("keydown",fn);return()=>removeEventListener("keydown",fn)},[selected,photos.length]);
  if(photos.length===0)return <div className="journal-hold"><span>Beyond the build</span><h2>The personal journal is being curated.</h2><p>Photographs and stories will appear here when they are ready to share.</p></div>;
  return <><div className="photo-wall">{photos.map(({entry,photo},i)=><button key={`${entry.slug}-${photo}`} className={`photo-tile ${entry.layout}`} onClick={()=>setSelected(i)}><Image src={withBasePath(photo)} alt={entry.caption} fill sizes="(max-width: 800px) 100vw, 60vw"/><span className="photo-no">0{i+1}</span><span className="photo-title"><small>{entry.date}</small>{entry.title}</span></button>)}</div>{selected!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={photos[selected].entry.title}><button className="lightbox-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><button onClick={()=>setSelected((selected-1+photos.length)%photos.length)} aria-label="Previous"><ChevronLeft/></button><div className="lightbox-content"><div className="lightbox-image"><Image src={withBasePath(photos[selected].photo)} alt={photos[selected].entry.caption} fill sizes="90vw"/></div><h2>{photos[selected].entry.title}</h2><p>{photos[selected].entry.caption}</p><small>{photos[selected].entry.location}</small></div><button onClick={()=>setSelected((selected+1)%photos.length)} aria-label="Next"><ChevronRight/></button></div>}</>}
