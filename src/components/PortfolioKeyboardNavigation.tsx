"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { visibleSelectedWork } from "@/data/selectedWork";

type KeyboardNavigationContextValue = {
  selectedWorkIndex: number | null;
};

const KeyboardNavigationContext = createContext<KeyboardNavigationContextValue>({
  selectedWorkIndex: null,
});

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[contenteditable='true']",
  "[role='button']",
  "[role='checkbox']",
  "[role='combobox']",
  "[role='listbox']",
  "[role='menu']",
  "[role='menuitem']",
  "[role='option']",
  "[role='radio']",
  "[role='slider']",
  "[role='spinbutton']",
  "[role='switch']",
  "[role='tab']",
  "[role='textbox']",
].join(",");

export function getNextWorkIndex(
  selectedIndex: number | null,
  direction: "next" | "previous",
  itemCount: number,
) {
  if (itemCount === 0) return null;
  if (selectedIndex === null) return direction === "next" ? 0 : itemCount - 1;
  return direction === "next"
    ? (selectedIndex + 1) % itemCount
    : (selectedIndex - 1 + itemCount) % itemCount;
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(interactiveSelector));
}

function hasOpenKeyboardWidget() {
  return Boolean(
    document.querySelector(
      "dialog[open], [role='dialog'][aria-modal='true'], [role='menu'][aria-hidden='false'], [data-keyboard-shortcuts='suspended']",
    ),
  );
}

function isFeaturedWorkAvailable(selectedIndex: number | null) {
  if (selectedIndex !== null) return true;
  const section = document.getElementById("work");
  if (!section) return false;
  if (document.activeElement && section.contains(document.activeElement)) return true;
  const bounds = section.getBoundingClientRect();
  return bounds.bottom > 88 && bounds.top < window.innerHeight;
}

function scrollSelectedWorkIntoView(index: number) {
  const row = document.querySelector<HTMLElement>(`[data-featured-work-index="${index}"]`);
  if (!row) return;
  const bounds = row.getBoundingClientRect();
  const outsideViewport = bounds.top < 88 || bounds.bottom > window.innerHeight - 16;
  if (!outsideViewport) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  row.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
}

export function usePortfolioKeyboardNavigation() {
  return useContext(KeyboardNavigationContext);
}

export function PortfolioKeyboardNavigation({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <KeyboardNavigationController key={pathname} pathname={pathname}>{children}</KeyboardNavigationController>;
}

function KeyboardNavigationController({ children, pathname }: { children: React.ReactNode; pathname: string }) {
  const router = useRouter();
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.isComposing ||
        event.ctrlKey ||
        event.altKey ||
        event.metaKey ||
        event.shiftKey ||
        isInteractiveTarget(event.target) ||
        hasOpenKeyboardWidget()
      ) return;

      if (pathname === "/" && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
        if (!isFeaturedWorkAvailable(selectedWorkIndex)) return;
        const nextIndex = getNextWorkIndex(
          selectedWorkIndex,
          event.key === "ArrowDown" ? "next" : "previous",
          visibleSelectedWork.length,
        );
        if (nextIndex === null) return;
        event.preventDefault();
        setSelectedWorkIndex(nextIndex);
        requestAnimationFrame(() => scrollSelectedWorkIntoView(nextIndex));
        return;
      }

      if (pathname === "/" && event.key === "Enter" && selectedWorkIndex !== null) {
        event.preventDefault();
        router.push(visibleSelectedWork[selectedWorkIndex].href);
        return;
      }

      if (event.key === "Escape" && selectedWorkIndex !== null) {
        setSelectedWorkIndex(null);
        return;
      }

      if (pathname === "/" && event.key === "ArrowRight") {
        event.preventDefault();
        router.push("/about");
      } else if (pathname === "/about" && event.key === "ArrowLeft") {
        event.preventDefault();
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router, selectedWorkIndex]);

  const contextValue = useMemo(() => ({ selectedWorkIndex }), [selectedWorkIndex]);
  const selectedWork = selectedWorkIndex === null ? null : visibleSelectedWork[selectedWorkIndex];
  const showHint = pathname === "/" || pathname === "/about";

  return <KeyboardNavigationContext.Provider value={contextValue}>
    {children}
    {showHint && <aside className="navigation-hint" aria-label="Keyboard navigation shortcuts">
      <strong>Navigation</strong>
      <span><kbd>↑</kbd><kbd>↓</kbd> Explore work</span>
      <span><kbd>←</kbd><kbd>→</kbd> Home / About Me</span>
      <span><kbd>Enter</kbd> Open selected work</span>
    </aside>}
    <p className="screen-reader-status" aria-live="polite" aria-atomic="true">
      {selectedWork ? `${selectedWork.title} selected. Press Enter to open.` : ""}
    </p>
  </KeyboardNavigationContext.Provider>;
}
