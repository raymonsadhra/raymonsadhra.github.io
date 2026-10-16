"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const nodes=[
  {label:"Systems",x:18,y:35,to:"/work?filter=Systems"},{label:"AI / ML",x:51,y:18,to:"/work?filter=AI%20%26%20ML"},{label:"Research",x:80,y:33,to:"/research"},
  {label:"Developer Tools",x:31,y:72,to:"/work?filter=Developer%20Tools"},{label:"Products",x:67,y:70,to:"/work?filter=Web%20%26%20Mobile"},{label:"Beyond Code",x:88,y:83,to:"/life"},
];
export function WorldConstellation(){const [active,setActive]=useState(1);const router=useRouter();const reduce=useReducedMotion();return <div className="constellation" aria-label="Explore Raymon's domains"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M18 35L51 18L80 33L67 70L31 72L18 35M51 18L67 70M31 72L80 33M67 70L88 83"/></svg>{nodes.map((n,i)=><motion.button key={n.label} style={{left:`${n.x}%`,top:`${n.y}%`}} onHoverStart={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>router.push(n.to)} animate={reduce?{}:{scale:active===i?1.08:1}} transition={{type:"spring",stiffness:280,damping:18}}><i/><span>{n.label}</span></motion.button>)}<div className="constellation-core"><b>06</b><small>connected<br/>worlds</small></div></div>}
