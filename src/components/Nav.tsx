import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { useTheme } from "../hooks";

/** The search palette loads lazily on first open, so no page pays for it on first paint. */
const SearchDialog = lazy(() => import("./SearchDialog"));

/** The five nav items, in order. Home is not a nav item; the name is the home link. */
export const NAV_ITEMS = [
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "about", label: "About", to: "/about" },
  { id: "expertise", label: "Expertise", to: "/expertise" },
  { id: "research", label: "Research", to: "/research" },
  { id: "contact", label: "Contact", to: "/contact" },
] as const;

const PAPER = "var(--paper, #F7F3EA)";
const INK = "var(--ink, #1C1A17)";
const BODY = "var(--body, #2A2723)";
const MUTED = "var(--muted, #6E6A61)";
const LINE = "var(--line, #DCD5C6)";
const ACCENT = "var(--accent, #7A2E25)";

function isActive(pathname: string, to: string): boolean {
  if (to === "/projects") return pathname === "/projects" || pathname.startsWith("/projects/");
  return pathname === to;
}

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchMounted, setSearchMounted] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  const openSearch = () => {
    setSearchMounted(true);
    setSearchOpen(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (wasOpenRef.current && !open) menuButtonRef.current?.focus();
    wasOpenRef.current = open;
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusables = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        ).filter((el) => el.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = prevOverflow;
    };
  }, [open ]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{ background: PAPER, borderBottom: `1px solid ${LINE}` }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:px-4 focus:py-3 focus:text-[15px] focus:font-medium"
        style={{ background: PAPER, color: INK, outline: `2px solid ${ACCENT}`, outlineOffset: 2 }}
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-5 md:px-8 xl:px-16"
        aria-label="Main"
      >
        <Link
          to="/"
          className="min-w-0 shrink-0 whitespace-nowrap hover:underline hover:underline-offset-4"
          aria-label="Muhammad Izaz Haider, home"
          style={{
            fontFamily: "var(--font-display, Archivo, system-ui, sans-serif)",
            fontWeight: 600,
            fontSize: 17,
            color: INK,
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <span className="truncate">Muhammad Izaz Haider</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.slice(0, 4).map((link) => {
            const active = isActive(location.pathname, link.to);
            return (
              <li key={link.id}>
                <Link
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className="inline-flex items-center px-3"
                  style={{
                    fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: active ? INK : BODY,
                    minHeight: 44,
                  }}
                >
                  <span
                    style={{
                      borderBottom: active ? `2px solid ${ACCENT}` : "2px solid transparent",
                      paddingBottom: 2,
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex min-w-0 items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search, Ctrl K"
            className="hidden items-center gap-2 px-3 lg:inline-flex"
            style={{
              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
              fontWeight: 500,
              fontSize: 15,
              color: BODY,
              minHeight: 44,
              background: "transparent",
              border: 0,
              cursor: "pointer",
            }}
          >
            <MagnifyingGlass size={20} weight="regular" aria-hidden="true" />
            Search
            <span
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                fontWeight: 500,
                fontSize: 13,
                color: MUTED,
              }}
            >
              Ctrl K
            </span>
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            className="inline-flex items-center px-3"
            style={{
              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
              fontWeight: 500,
              fontSize: 15,
              color: BODY,
              minHeight: 44,
              background: "transparent",
              border: 0,
              cursor: "pointer",
            }}
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <Link
            to="/contact"
            aria-current={isActive(location.pathname, "/contact") ? "page" : undefined}
            className="hidden items-center justify-center whitespace-nowrap md:inline-flex"
            style={{
              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
              fontWeight: 500,
              fontSize: 15,
              color: PAPER,
              background: INK,
              padding: "12px 24px",
              borderRadius: 2,
              minHeight: 44,
            }}
          >
            Contact
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center gap-2 px-3 lg:hidden"
            style={{
              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
              fontWeight: 500,
              fontSize: 15,
              color: INK,
              minHeight: 44,
              minWidth: 44,
              background: "transparent",
              border: 0,
              cursor: "pointer",
            }}
          >
            {open ? <X size={20} weight="regular" aria-hidden="true" /> : <List size={20} weight="regular" aria-hidden="true" />}
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto lg:hidden"
          style={{ background: PAPER, borderTop: `1px solid ${LINE}` }}
        >
          <div className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col px-5 pb-6 pt-4 md:px-8">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openSearch();
              }}
              aria-label="Search, Ctrl K"
              className="inline-flex w-full items-center gap-2 px-3"
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontWeight: 500,
                fontSize: 15,
                color: BODY,
                minHeight: 44,
                background: "transparent",
                border: `1px solid ${LINE}`,
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              <MagnifyingGlass size={20} weight="regular" aria-hidden="true" />
              Search
              <span
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                  fontWeight: 500,
                  fontSize: 13,
                  color: MUTED,
                }}
              >
                Ctrl K
              </span>
            </button>
            <ul className="mt-4">
              {NAV_ITEMS.slice(0, 4).map((link, i) => {
                const active = isActive(location.pathname, link.to);
                return (
                  <li key={link.id} style={{ borderBottom: `1px solid ${LINE}` }}>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      to={link.to}
                      aria-current={active ? "page" : undefined}
                      className="flex items-center"
                      style={{
                        fontFamily: "var(--font-display, Archivo, system-ui, sans-serif)",
                        fontWeight: 600,
                        fontSize: 22,
                        color: INK,
                        minHeight: 44,
                        paddingTop: 12,
                        paddingBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          borderBottom: active ? `2px solid ${ACCENT}` : "2px solid transparent",
                          paddingBottom: 2,
                        }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto pt-8" style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}>
              <Link
                to="/contact"
                aria-current={isActive(location.pathname, "/contact") ? "page" : undefined}
                className="flex w-full items-center justify-center"
                style={{
                  fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: PAPER,
                  background: INK,
                  padding: "14px 28px",
                  borderRadius: 2,
                  minHeight: 44,
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      {searchMounted && (
        <Suspense fallback={null}>
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </Suspense>
      )}
    </header>
  );
}
