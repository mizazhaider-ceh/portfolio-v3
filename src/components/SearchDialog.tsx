import { useEffect, useMemo, useState, type KeyboardEvent, type ReactNode } from "react";
import { useNavigate } from "react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import {
  SEARCH_CATEGORIES,
  SEARCH_GUIDANCE,
  buildSearchIndex,
  searchIndex,
  type SearchCategory,
  type SearchResult,
} from "../search";

const MAX_PER_CATEGORY = 5;

/** Wrap each matching term in a mark styled with the accent soft wash behind ink text. */
function highlight(text: string, query: string): ReactNode {
  const trimmed = query.trim();
  if (trimmed === "") return text;
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));
  return parts.map((part, i) =>
    part.toLowerCase() === trimmed.toLowerCase() ? (
      <mark
        key={i}
        style={{ background: "var(--accent-soft, #F1E3DE)", color: "var(--ink, #1C1A17)" }}
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [isPhone, setIsPhone] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches,
  );

  /** The index is built in memory on first open, not fetched from the network. */
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchIndex(index, query), [index, query]);
  const total = results.length;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const onChange = () => setIsPhone(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open ]);

  useEffect(() => {
    if (results.length > 0 && !results.some((r) => r.id === value)) {
      setValue(results[0].id);
    }
    if (results.length === 0) setValue("");
  }, [results, value]);

  const openResult = (result: SearchResult) => {
    onOpenChange(false);
    if (result.destination.startsWith("/")) {
      navigate(result.destination);
    } else if (result.destination.startsWith("mailto:")) {
      window.location.href = result.destination;
    } else if (result.destination) {
      window.open(result.destination, "_blank", "noreferrer");
    }
  };

  const grouped = useMemo(() => {
    const map = new Map<SearchCategory, SearchResult[]>();
    for (const result of results) {
      const list = map.get(result.category) ?? [];
      list.push(result);
      map.set(result.category, list);
    }
    return SEARCH_CATEGORIES.filter((c) => map.has(c)).map((c) => ({
      category: c,
      items: (map.get(c) ?? []).slice(0, MAX_PER_CATEGORY),
      count: (map.get(c) ?? []).length,
    }));
  }, [results]);

  const flatValues = useMemo(() => grouped.flatMap((g) => g.items.map((i) => i.id)), [grouped]);

  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Home" && flatValues.length > 0) {
      e.preventDefault();
      setValue(flatValues[0]);
    } else if (e.key === "End" && flatValues.length > 0) {
      e.preventDefault();
      setValue(flatValues[flatValues.length - 1]);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-[70]"
          style={{ background: "rgba(23, 22, 20, 0.62)" }}
        />
        <MotionConfig reducedMotion="user">
          <Dialog.Content
            asChild
            aria-label="Search the portfolio"
            onOpenAutoFocus={(e) => {
              e.preventDefault();
              const input = document.querySelector<HTMLInputElement>("[data-search-input]");
              input?.focus();
            }}
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: isPhone ? 0 : "-50%", y: 8 }}
              animate={{ opacity: 1, x: isPhone ? 0 : "-50%", y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-label="Search the portfolio"
              className="fixed z-[80] overflow-hidden"
              style={{
                top: isPhone ? 0 : "10vh",
                left: isPhone ? 0 : "50%",
                width: isPhone ? "100%" : "min(640px, calc(100vw - 2rem))",
                height: isPhone ? "100dvh" : "auto",
                maxHeight: isPhone ? "100dvh" : "80vh",
                background: "var(--paper, #F7F3EA)",
                border: "1px solid var(--line, #DCD5C6)",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Dialog.Title className="sr-only">Search the portfolio</Dialog.Title>
              <Dialog.Description className="sr-only">
                Search projects, project sections, commands, concepts, pages, and resources.
              </Dialog.Description>
              <Command
                label="Search the portfolio"
                shouldFilter={false}
                value={value}
                onValueChange={setValue}
                loop
                style={{ display: "flex", flexDirection: "column", minHeight: 0, flex: 1 }}
              >
                <div
                  className="flex items-center gap-3 px-4"
                  style={{ borderBottom: "1px solid var(--line, #DCD5C6)", minHeight: 56 }}
                >
                  <MagnifyingGlass size={20} weight="regular" aria-hidden="true" style={{ color: "var(--muted, #6E6A61)", flexShrink: 0 }} />
                  <Command.Input
                    data-search-input
                    value={query}
                    onValueChange={setQuery}
                    onKeyDown={onInputKeyDown}
                    placeholder="Search the portfolio"
                    aria-label="Search the portfolio"
                    style={{
                      flex: 1,
                      minWidth: 0,
                      border: 0,
                      outline: "none",
                      background: "transparent",
                      fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                      fontSize: 16,
                      color: "var(--ink, #1C1A17)",
                      minHeight: 44,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                      fontWeight: 500,
                      fontSize: 13,
                      color: "var(--muted, #6E6A61)",
                      flexShrink: 0,
                    }}
                  >
                    Esc
                  </span>
                </div>
                <Command.List
                  style={{ overflowY: "auto", padding: 8, minHeight: 0, flex: 1 }}
                >
                  <div aria-live="polite" className="sr-only">
                    {query.trim() === "" ? "" : `${total} results`}
                  </div>
                  {query.trim() === "" && (
                    <div className="px-3 py-4">
                      <p
                        style={{
                          fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                          fontWeight: 600,
                          fontSize: "1.0625rem",
                          color: "var(--ink, #1C1A17)",
                        }}
                      >
                        Search the portfolio
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                          color: "var(--muted, #6E6A61)",
                        }}
                      >
                        {SEARCH_GUIDANCE}
                      </p>
                      <div className="mt-4 flex flex-col">
                        {["Projects", "About", "Expertise", "Research", "Contact"].map((page) => {
                          const to =
                            page === "Projects"
                              ? "/projects"
                              : `/${page.toLowerCase()}`;
                          return (
                            <button
                              key={page}
                              type="button"
                              onClick={() => {
                                onOpenChange(false);
                                navigate(to);
                              }}
                              className="text-left"
                              style={{
                                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                                fontWeight: 500,
                                fontSize: "0.9375rem",
                                color: "var(--ink, #1C1A17)",
                                background: "transparent",
                                border: 0,
                                borderBottom: "1px solid var(--line, #DCD5C6)",
                                minHeight: 44,
                                padding: "8px 0",
                                cursor: "pointer",
                              }}
                            >
                              {page}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {query.trim() !== "" && total === 0 && (
                    <div className="px-3 py-4">
                      <p
                        style={{
                          fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                          fontWeight: 600,
                          fontSize: "1.0625rem",
                          color: "var(--ink, #1C1A17)",
                        }}
                      >
                        No results for {query.trim()}.
                      </p>
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                          color: "var(--muted, #6E6A61)",
                        }}
                      >
                        {SEARCH_GUIDANCE}
                      </p>
                    </div>
                  )}
                  {grouped.map((group) => (
                    <Command.Group
                      key={group.category}
                      heading={group.category}
                      style={{ padding: "8px 0" }}
                    >
                      {group.items.map((result) => (
                        <Command.Item
                          key={result.id}
                          value={result.id}
                          onSelect={() => openResult(result)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            padding: "10px 12px",
                            borderRadius: 2,
                            cursor: "pointer",
                            minHeight: 44,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: result.category === "Command"
                                ? "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)"
                                : "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                              fontWeight: 600,
                              fontSize: "0.9375rem",
                              color: "var(--ink, #1C1A17)",
                              overflowWrap: "anywhere",
                            }}
                          >
                            {highlight(result.title, query)}
                            {result.external && (
                              <span
                                style={{
                                  fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                                  fontWeight: 500,
                                  fontSize: 13,
                                  color: "var(--muted, #6E6A61)",
                                  marginLeft: 8,
                                }}
                              >
                                External link
                              </span>
                            )}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                              fontSize: "0.875rem",
                              lineHeight: 1.55,
                              color: "var(--muted, #6E6A61)",
                            }}
                          >
                            {highlight(result.snippet, query)}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                              fontWeight: 500,
                              fontSize: 13,
                              color: "var(--muted, #6E6A61)",
                            }}
                          >
                            {result.destination.startsWith("/") ? result.destination : "External link"}
                          </span>
                        </Command.Item>
                      ))}
                      {group.count > MAX_PER_CATEGORY && (
                        <p
                          className="px-3 py-1"
                          style={{
                            fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                            fontWeight: 500,
                            fontSize: 13,
                            color: "var(--muted, #6E6A61)",
                          }}
                        >
                          {group.count} results in {group.category}, showing {MAX_PER_CATEGORY}
                        </p>
                      )}
                    </Command.Group>
                  ))}
                </Command.List>
              </Command>
            </motion.div>
          </Dialog.Content>
        </MotionConfig>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
