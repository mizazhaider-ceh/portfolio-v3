// PenTrix-VulnLab architecture, hand-built inline SVG in Monograph tokens.
// Content taken from the former Archify file (node labels, numbers, edges,
// flow labels, viewBox 1150 by 352) with the legend removed, because the
// rethemed nodes no longer carry per-category colours for a legend to name.
// The frame label keeps the approved flag wording only: flags are randomly
// generated per install at first boot, no flag literal, path, or value.
// Highlighted path, oxblood only: student browser to app to SQLite database.
const PAPER = "var(--paper)";
const SURFACE = "var(--surface)";
const INK = "var(--ink)";
const MUTED = "var(--muted)";
const LINE = "var(--line)";
const ACCENT = "var(--accent)";
const ACCENT_TEXT = "var(--accent-text)";

const DISPLAY = "Archivo, 'Instrument Sans', sans-serif";
const SANS = "'Instrument Sans', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
}) {
  const cx = x + w / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={2}
        style={{ fill: SURFACE, stroke: INK }}
        strokeWidth={1.5}
      />
      <text
        x={cx}
        y={y + 30}
        textAnchor="middle"
        fontSize={15}
        style={{ fill: INK, fontFamily: DISPLAY, fontWeight: 600 }}
      >
        {title}
      </text>
      <text
        x={cx}
        y={y + 46}
        textAnchor="middle"
        fontSize={10.5}
        style={{ fill: MUTED, fontFamily: SANS, fontWeight: 400 }}
      >
        {sub}
      </text>
    </g>
  );
}

function EdgeLabel({
  x,
  y,
  w,
  label,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect x={x - w / 2} y={y - 10} width={w} height={14} rx={2} style={{ fill: PAPER }} />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontSize={11}
        style={{ fill: accent ? ACCENT_TEXT : MUTED, fontFamily: MONO, fontWeight: 500 }}
      >
        {label}
      </text>
    </g>
  );
}

export default function PentrixArchitecture() {
  return (
    <svg
      viewBox="0 0 1150 296"
      role="img"
      aria-label="PenTrix-VulnLab architecture: student browser, Express app, 29 challenge modules, 3 kill chain scenarios, SQLite database, 3 career paths"
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <title>PenTrix-VulnLab architecture</title>
      <defs>
        <marker
          id="pentrix-arrow-ink"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" style={{ fill: INK }} />
        </marker>
        <marker
          id="pentrix-arrow-accent"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" style={{ fill: ACCENT }} />
        </marker>
      </defs>
      <rect x="0" y="0" width="1150" height="296" style={{ fill: PAPER }} />
      <rect
        x="10"
        y="10"
        width="1100"
        height="274"
        rx="2"
        style={{ fill: "none", stroke: LINE }}
        strokeWidth="1"
      />
      <text x="18" y="33" fontSize={11} style={{ fill: MUTED, fontFamily: MONO, fontWeight: 500 }}>
        Student&apos;s machine: flags generated per install at first boot
      </text>
      <g fill="none" strokeWidth="1.5">
        <path d="M 190 72 L 280 72" style={{ stroke: ACCENT }} markerEnd="url(#pentrix-arrow-accent)" />
        <path d="M 470 72 L 600 72" style={{ stroke: INK }} markerEnd="url(#pentrix-arrow-ink)" />
        <path d="M 790 72 L 890 72" style={{ stroke: INK }} markerEnd="url(#pentrix-arrow-ink)" />
        <path d="M 375 104 L 375 200" style={{ stroke: ACCENT }} markerEnd="url(#pentrix-arrow-accent)" />
        <path d="M 985 104 L 985 200" style={{ stroke: INK }} markerEnd="url(#pentrix-arrow-ink)" />
        <path d="M 470 232 L 890 232" style={{ stroke: INK }} markerEnd="url(#pentrix-arrow-ink)" />
      </g>
      <EdgeLabel x={235} y={62} w={68} label="HTTP request" accent />
      <EdgeLabel x={535} y={62} w={87} label="serves challenge" />
      <EdgeLabel x={840} y={62} w={58} label="chain into" />
      <EdgeLabel x={375} y={152} w={54} label="SQL query" accent />
      <EdgeLabel x={985} y={152} w={116} label="completes path, issues" />
      <EdgeLabel x={680} y={222} w={140} label="progress, certificate issue" />
      <Node x={40} y={40} w={150} h={64} title="Student" sub="Browser, own machine" />
      <Node x={280} y={40} w={190} h={64} title="PenTrix-VulnLab app" sub="Express, deliberately vulnerable" />
      <Node x={600} y={40} w={190} h={64} title="29 challenge modules" sub="Grouped by vulnerability class" />
      <Node x={890} y={40} w={190} h={64} title="3 kill chain scenarios" sub="Full attack paths" />
      <Node x={280} y={200} w={190} h={64} title="SQLite database" sub="Challenges, progress, certificates" />
      <Node x={890} y={200} w={190} h={64} title="3 career paths" sub="Verifiable certificates" />
    </svg>
  );
}
