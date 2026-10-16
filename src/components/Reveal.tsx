"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}) { const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-8%"}} transition={{duration:.65,delay,ease:[.2,.7,.2,1]}}>{children}</motion.div> }
