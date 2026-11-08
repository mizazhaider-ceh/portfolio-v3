import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { GithubLogo, LinkedinLogo, List, X } from "@phosphor-icons/react";
import { CONTACT, NAV_LINKS } from "../data";
import { useTheme } from "../hooks";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: "var(--nav-bg, rgba(250, 249, 245, 0.92))",
        backdropFilter: "blur(6px)",
        borderBottom: scrolled ? "0.1rem solid var(--line)" : "0.1rem solid transparent",
      }}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--surface)] focus:px-3 focus:py-2 focus:rounded-lg">
        Skip to content
      </a>
      <nav className="wrap flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Link to="/" className="flex min-w-0 items-center gap-3 whitespace-nowrap" aria-label="Muhammad Izaz Haider, home">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--periwinkle)] font-[var(--font-display)] text-sm font-semibold text-[var(--surface)]" aria-hidden="true">
            IH
          </span>
          <span className="hidden min-w-0 flex-col leading-5 sm:flex">
            <span className="truncate font-[var(--font-display)] text-base font-semibold">Muhammad Izaz Haider</span>
            <span className="truncate caption-5 text-[var(--muted)] hidden min-[1280px]:block">Penetration Tester</span>
          </span>
          <span className="truncate font-[var(--font-display)] text-base font-semibold sm:hidden">Izaz Haider</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 title-4 fade ${isActive ? "text-[var(--periwinkle-deep)] bg-[var(--lilac)]" : "text-[var(--muted)]"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden h-10 w-10 items-center justify-center rounded-lg text-[var(--muted)] fade hover:bg-[var(--lilac)] hover:text-[var(--ink)] sm:flex">
            <GithubLogo size={20} weight="regular" />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden h-10 w-10 items-center justify-center rounded-lg text-[var(--muted)] fade hover:bg-[var(--lilac)] hover:text-[var(--ink)] sm:flex">
            <LinkedinLogo size={20} weight="regular" />
          </a>
          <div className="theme-switch" role="group" aria-label="Theme">
            <button type="button" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
              Light
            </button>
            <button type="button" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
              Dark
            </button>
          </div>
          <Link to="/contact" className="btn-primary hidden !py-2 !px-3 button-sm whitespace-nowrap shrink-0 md:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--ink)] fade hover:bg-[var(--lilac)] lg:hidden"
          >
            {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 min-h-[calc(100dvh-4rem)] overflow-y-auto lg:hidden" style={{ background: "var(--bg)", borderTop: "0.1rem solid var(--line-soft)" }}>
          <ul className="wrap flex flex-col gap-2 pt-8 pb-8">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id} className="enter" style={{ animationDelay: `${Math.min(i * 60, 400)}ms` }}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `heading-4 block rounded-xl px-4 py-3 fade hover:bg-[var(--lilac)] ${isActive ? "text-[var(--periwinkle-deep)]" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="enter pt-4" style={{ animationDelay: "300ms" }}>
              <Link to="/contact" className="btn-primary w-full justify-center">
                Get in touch
              </Link>
            </li>
            <li className="enter flex gap-2 pt-2" style={{ animationDelay: "360ms" }}>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center">
                GitHub
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
