import { experiences } from "@/data/experience";

export function HomeExperience(){return <div className="home-experience">{experiences.map((item,index)=><article key={item.org}><span className="experience-number">0{index+1}</span><div><h3>{item.org}</h3><p>{item.role}</p></div><p className="experience-contribution">{item.contributions[0]}</p><div className="experience-tech">{item.tech.slice(0,3).map(tech=><span key={tech}>{tech}</span>)}</div></article>)}</div>}
