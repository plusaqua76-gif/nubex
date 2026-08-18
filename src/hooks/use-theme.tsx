import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "nubex-theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem(THEME_STORAGE_KEY) || localStorage.getItem("codebug-theme");
    if (!stored) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    }
    setThemeState(readTheme());
    const onChange = () => setThemeState(readTheme());
    window.addEventListener("nubex-theme-change", onChange);
    return () => window.removeEventListener("nubex-theme-change", onChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
    setThemeState(next);
    window.dispatchEvent(new Event("nubex-theme-change"));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(readTheme() === "dark" ? "light" : "dark");
  }, [setTheme]);

  return { theme, setTheme, toggleTheme };
}
