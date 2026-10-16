"use client";
/* The persisted theme is intentionally synchronized after mount. */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useContext, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeContext = createContext({ theme: "light", toggle: () => {} });
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => { const saved = localStorage.getItem("raymon-theme"); const next = saved ?? "light"; setTheme(next); document.documentElement.dataset.theme = next; }, []);
  const toggle = () => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); document.documentElement.dataset.theme = next; localStorage.setItem("raymon-theme", next); };
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
export function ThemeToggle() { const { theme, toggle } = useContext(ThemeContext); return <button className="icon-button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}</button>; }
