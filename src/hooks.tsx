import { useCallback, useEffect, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";
export const THEME_KEY = "portfolio-v2-theme";

/** Reveal is a pass-through: content shows at rest, never faded in on scroll. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage unavailable, fall through to the default */
  }
  return "light";
}

export function useTheme(): { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void } {
  const [theme, setThemeState] = useState<Theme>(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return readTheme();
  });
  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", t === "dark" ? "#121316" : "#FAF9F5");
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      /* storage unavailable */
    }
  }, []);
  const toggle = useCallback(() => setTheme(theme === "light" ? "dark" : "light"), [theme, setTheme]);
  return { theme, setTheme, toggle };
}

/** Per-page title, description, canonical, Open Graph, and JSON-LD.
    Title/description only used to be per-page; OG tags, canonical, and
    JSON-LD stayed home-specific on every route. Pass the route path
    (e.g. "/projects") to update canonical and og:url, and optional
    JSON-LD (e.g. the FAQ schema on /contact). */
export function usePageMeta(title: string, description: string, path?: string, jsonLd?: unknown) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    if (path) {
      const url = `https://mizazhaider-ceh.dev${path === "/" ? "/" : path}`;
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", url);
      setMeta('meta[property="og:url"]', url);
    }
    const existing = document.getElementById("page-jsonld");
    if (jsonLd) {
      const script = existing ?? document.createElement("script");
      script.id = "page-jsonld";
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(jsonLd);
      if (!existing) document.head.appendChild(script);
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, path, jsonLd]);
}

/** Copy text to the clipboard, show "Copied" for 2 seconds. */
export function useCopy(): { copied: string | null; copy: (key: string, text: string) => void } {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback((key: string, text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopied(key);
    window.setTimeout(() => setCopied((c) => (c === key ? null : c)), 2000);
  }, []);
  return { copied, copy };
}
