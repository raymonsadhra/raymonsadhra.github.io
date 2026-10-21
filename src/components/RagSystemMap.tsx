import { ArrowRight, GitBranch } from "lucide-react";

const stages = [
  { number: "01", title: "Video Input", detail: "Source video and audio", featured: false },
  { number: "02", title: "Media Processing", detail: "FFmpeg · transcript · OCR · visual captions · sampled frames", featured: false },
  { number: "03", title: "Timestamp-Aligned Chunking", detail: "Shared temporal windows preserve relationships across modalities", featured: true },
  { number: "04", title: "Embedding & Vector Indexing", detail: "Text embeddings and timestamp metadata stored in Chroma", featured: false },
  { number: "05", title: "Semantic Retrieval", detail: "Similarity search returns context-rich timestamped evidence", featured: false },
  { number: "06", title: "Grounded Question Answering", detail: "Retrieved evidence supports the generated answer", featured: false },
] as const;

export function RagSystemMap() {
  return <section className="rag-system-map" aria-labelledby="rag-system-map-title">
    <p className="eyebrow">Architecture</p>
    <h2 id="rag-system-map-title">System Map</h2>
    <p className="rag-system-summary">The pipeline converts video signals into shared temporal windows before embedding and retrieval, so answers can use evidence that remains aligned across transcript, screen text, visual captions, and frame references.</p>
    <ol aria-label="RAG Motion processing and retrieval pipeline">
      {stages.map((stage, index) => <li className={stage.featured ? "featured" : ""} key={stage.number}>
        {stage.featured && <span className="innovation-label">Core architectural decision</span>}
        <span className="stage-number">{stage.number}</span>
        <strong>{stage.title}</strong>
        <p>{stage.detail}</p>
        {index < stages.length - 1 && <ArrowRight className="stage-arrow" size={18} aria-hidden="true"/>}
      </li>)}
    </ol>
    <aside className="checkpoint-branch"><GitBranch size={17} aria-hidden="true"/><div><strong>Persistent indexing checkpoints</strong><p>Intermediate state lets long-running processing and indexing resume without repeating completed stages.</p></div></aside>
  </section>;
}
