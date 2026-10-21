import { ArrowDown, ArrowLeftRight, Database, MapPin, Navigation, Smartphone } from "lucide-react";

const stages = [
  {
    icon: Smartphone,
    label: "Mobile interface",
    title: "React Native / Expo App",
    detail: "Run screen · live route display · race feedback",
  },
  {
    icon: Navigation,
    label: "Client-side logic",
    title: "Tracking & Race Logic",
    detail: "Location updates · distance and pace · timestamped replay · ghost interpolation",
  },
  {
    icon: Database,
    label: "Cloud persistence",
    title: "Firebase",
    detail: "Run history · saved timestamped GPS trajectories",
  },
] as const;

export function GhostRunnerArchitecture() {
  return <section className="ghost-architecture" aria-labelledby="ghost-architecture-title">
    <p className="eyebrow">Architecture</p>
    <h2 id="ghost-architecture-title">Full-Stack Architecture</h2>
    <p className="ghost-architecture-summary">Device location updates enter the mobile app, client-side race logic compares the current run with a saved trajectory, and Firebase persists the run data used for later races.</p>
    <aside className="gps-input"><MapPin size={18} aria-hidden="true"/><span><strong>Device location services</strong>GPS location updates</span><ArrowDown size={18} aria-hidden="true"/></aside>
    <ol aria-label="Ghost Runner application architecture">
      {stages.map((stage, index) => { const Icon = stage.icon; return <li key={stage.title}>
        <span className="stage-icon"><Icon size={20} aria-hidden="true"/></span>
        <small>{stage.label}</small>
        <strong>{stage.title}</strong>
        <p>{stage.detail}</p>
        {index < stages.length - 1 && (index === 1 ? <ArrowLeftRight className="architecture-arrow" size={20} aria-hidden="true"/> : <ArrowDown className="architecture-arrow" size={20} aria-hidden="true"/>)}
      </li>})}
    </ol>
  </section>;
}
