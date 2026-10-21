import { ArrowRight } from "lucide-react";

const stages = [
  { number: "01", title: "Terrain Input", detail: "World terrain and heightmap data" },
  { number: "02", title: "Terrain Preprocessing", detail: "Cached height and buildability queries" },
  { number: "03", title: "Road Planning", detail: "Terrain-aware A* with slope and ±1-step constraints" },
  { number: "04", title: "Connectivity", detail: "Flood-fill and graph traversal validate the network" },
  { number: "05", title: "Settlement Placement", detail: "Structures follow buildable terrain and connected roads" },
  { number: "06", title: "Output Layout", detail: "A traversable settlement adapted to the landscape" },
] as const;

export function TerrainSystemMap() {
  return <section className="terrain-system-map" aria-labelledby="terrain-system-map-title">
    <p className="eyebrow">Architecture</p>
    <h2 id="terrain-system-map-title">System Map</h2>
    <p className="terrain-system-summary">The generator preprocesses terrain, plans buildable roads through elevation constraints, verifies network connectivity, and places the settlement around the resulting traversable structure.</p>
    <ol aria-label="Terrain-Adaptive Settlements generation pipeline">
      {stages.map((stage, index) => <li key={stage.number}>
        <span>{stage.number}</span><strong>{stage.title}</strong><p>{stage.detail}</p>
        {index < stages.length - 1 && <ArrowRight size={18} aria-hidden="true"/>}
      </li>)}
    </ol>
  </section>;
}
