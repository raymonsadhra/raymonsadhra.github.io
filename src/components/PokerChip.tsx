type PokerChipProps = {
  label: string;
  tone?: "forest" | "ivory" | "burgundy" | "charcoal" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function PokerChip({ label, tone = "forest", size = "md", className = "" }: PokerChipProps) {
  return <span className={`poker-chip chip-${tone} chip-${size} ${label.length > 2 ? "chip-long-label" : ""} ${className}`} aria-hidden="true"><i/><b>{label}</b></span>;
}
