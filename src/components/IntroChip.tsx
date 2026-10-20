"use client";

import { useEffect, useState } from "react";
import { PokerChip } from "./PokerChip";

const storageKey = "raymon-v10-intro-seen";

export function IntroChip() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.sessionStorage.getItem(storageKey)) return;
    window.sessionStorage.setItem(storageKey, "true");
    let timer = 0;
    const frame = window.requestAnimationFrame(() => {
      setPlaying(true);
      timer = window.setTimeout(() => setPlaying(false), 1400);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  if (!playing) return null;
  return <div className="intro-chip-overlay" aria-hidden="true"><PokerChip label="RS" tone="ivory" size="lg" /></div>;
}
