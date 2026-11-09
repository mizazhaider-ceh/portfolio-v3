import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * The one shared accessible Tabs component. Real tab semantics with roving
 * tabindex and arrow key navigation. No page implements its own copy.
 * Inactive panels are hidden with the hidden attribute, not only visually.
 */
export type TabItem = {
  id: string;
  label: string;
  panel: ReactNode;
};

export default function Tabs({
  id,
  label,
  tabs,
  defaultIndex = 0,
}: {
  id: string;
  label: string;
  tabs: TabItem[];
  defaultIndex?: number;
}) {
  const safeIndex = defaultIndex >= 0 && defaultIndex < tabs.length ? defaultIndex : 0;
  const [active, setActive] = useState(safeIndex);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const count = tabs.length;
    const next = ((index % count) + count) % count;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${id}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontWeight: 500,
                fontSize: "0.9375rem",
                color: selected ? "var(--ink, #1C1A17)" : "var(--muted, #6E6A61)",
                background: "var(--surface, #FFFEFA)",
                border: `1px solid ${selected ? "var(--line-strong, #B9B0A0)" : "var(--line, #DCD5C6)"}`,
                borderBottom: selected
                  ? "2px solid var(--ink, #1C1A17)"
                  : "2px solid transparent",
                borderRadius: 2,
                padding: "14px 20px",
                minHeight: 44,
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${id}-panel-${tab.id}`}
          aria-labelledby={`${id}-tab-${tab.id}`}
          tabIndex={0}
          hidden={i !== active}
          className="mt-4"
          style={{
            background: "var(--surface, #FFFEFA)",
            border: "1px solid var(--line, #DCD5C6)",
            borderRadius: 2,
            padding: 32,
          }}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
