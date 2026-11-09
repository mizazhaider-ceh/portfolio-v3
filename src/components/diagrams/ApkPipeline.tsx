// APK Security Pipeline workflow, hand-built inline SVG in Monograph tokens.
// Content taken from the former Archify file (five stage lanes, node labels,
// sublabels, edges, flow labels, viewBox 1013 by 776) with the legend removed,
// because the rethemed nodes no longer carry per-category colours for a legend
// to name. Highlighted path, oxblood only: the main flow from Intake through
// static checks and Frida traces to scoring and reports. The Baseline and CI
// return arrows stay ink and dashed.
const PAPER = "var(--paper)";
const SURFACE = "var(--surface)";
const INK = "var(--ink)";
const MUTED = "var(--muted)";
const LINE = "var(--line)";
const ACCENT = "var(--accent)";

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
        y={y + 21}
        textAnchor="middle"
        fontSize={13}
        style={{ fill: INK, fontFamily: DISPLAY, fontWeight: 600 }}
      >
        {title}
      </text>
      <text
        x={cx}
        y={y + 38}
        textAnchor="middle"
        fontSize={10.5}
        style={{ fill: MUTED, fontFamily: SANS, fontWeight: 400 }}
      >
        {sub}
      </text>
    </g>
  );
}

function EdgeLabel({ x, y, w, label }: { x: number; y: number; w: number; label: string }) {
  return (
    <g>
      <rect x={x - w / 2} y={y - 10} width={w} height={14} rx={2} style={{ fill: PAPER }} />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontSize={11}
        style={{ fill: MUTED, fontFamily: MONO, fontWeight: 500 }}
      >
        {label}
      </text>
    </g>
  );
}

export default function ApkPipeline() {
  return (
    <svg
      viewBox="0 0 1013 668"
      role="img"
      aria-label="APK Security Pipeline workflow: intake, static analysis, dynamic analysis, scoring, reports and CI"
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <title>APK Security Pipeline workflow</title>
      <defs>
        <marker
          id="apk-arrow-ink"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" style={{ fill: INK }} />
        </marker>
        <marker
          id="apk-arrow-accent"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" style={{ fill: ACCENT }} />
        </marker>
      </defs>
      <rect x="0" y="0" width="1013" height="668" style={{ fill: PAPER }} />
      <line x1="80" y1="35" x2="957" y2="35" style={{ stroke: LINE }} strokeWidth="1" />
      {[
        { x: 90, w: 56, label: "Intake" },
        { x: 278, w: 102, label: "Static checks" },
        { x: 482.5, w: 115, label: "Dynamic traces" },
        { x: 728.4, w: 122, label: "Score and report" },
      ].map((chip) => (
        <g key={chip.label}>
          <rect
            x={chip.x}
            y="27"
            width={chip.w}
            height="16"
            rx="2"
            style={{ fill: SURFACE, stroke: LINE }}
            strokeWidth="1"
          />
          <text
            x={chip.x + chip.w / 2}
            y="38.5"
            textAnchor="middle"
            fontSize={11}
            style={{ fill: MUTED, fontFamily: MONO, fontWeight: 500 }}
          >
            {chip.label}
          </text>
        </g>
      ))}
      {[
        { y: 52, label: "01 / Input" },
        { y: 176, label: "02 / Static analysis" },
        { y: 300, label: "03 / Dynamic analysis" },
        { y: 424, label: "04 / Scoring" },
        { y: 548, label: "05 / Reports and CI" },
      ].map((lane) => (
        <g key={lane.label}>
          <rect
            x="40"
            y={lane.y}
            width="957"
            height="104"
            rx="2"
            style={{ fill: "none", stroke: LINE }}
            strokeWidth="1"
          />
          <text x="54" y={lane.y + 22} fontSize={12} style={{ fill: MUTED, fontFamily: MONO, fontWeight: 500 }}>
            {lane.label}
          </text>
        </g>
      ))}
      <g fill="none" strokeWidth="1.5">
        <path d="M 188 119 L 230 119 Q 238 119 238 127 L 238 217" style={{ stroke: ACCENT }} markerEnd="url(#apk-arrow-accent)" />
        <path d="M 313 243 L 345 243" style={{ stroke: ACCENT }} markerEnd="url(#apk-arrow-accent)" />
        <path d="M 420 269 L 420 359 Q 420 367 428 367 L 465 367" style={{ stroke: ACCENT }} markerEnd="url(#apk-arrow-accent)" />
        <path d="M 540 393 L 540 483 Q 540 491 548 491 L 585 491" style={{ stroke: ACCENT }} markerEnd="url(#apk-arrow-accent)" />
        <path d="M 735 491 L 910.8 491 Q 918.8 491 918.8 499 L 918.8 589" style={{ stroke: ACCENT }} markerEnd="url(#apk-arrow-accent)" />
        <path d="M 660 517 L 660 589" style={{ stroke: INK }} strokeDasharray="5 4" markerEnd="url(#apk-arrow-ink)" />
        <path d="M 730 615 L 848.8 615" style={{ stroke: INK }} strokeDasharray="5 4" markerEnd="url(#apk-arrow-ink)" />
      </g>
      <Node x={48} y={93} w={140} h={52} title="One command" sub="APK file in" />
      <Node x={163} y={217} w={150} h={52} title="Static manifest rules" sub="permissions, components" />
      <Node x={345} y={217} w={150} h={52} title="Strings and code rules" sub="secrets, unsafe crypto" />
      <Node x={465} y={341} w={150} h={52} title="Frida dynamic traces" sub="what the app does live" />
      <Node x={585} y={465} w={150} h={52} title="Scoring" sub="score out of 100, grade A to F" />
      <Node x={590} y={589} w={140} h={52} title="Baseline and CI" sub="compare, or fail the build" />
      <Node x={848.8} y={589} w={140} h={52} title="Reports" sub="HTML and JSON" />
      {/* Edge labels last: they paint above the node rects. The "diff feeds
          report" label is sized to the gap between its two nodes (730 to
          848.8), so it touches neither node rect. */}
      <EdgeLabel x={660} y={553} w={52} label="compare" />
      <EdgeLabel x={789.4} y={605} w={118} label="diff feeds report" />
    </svg>
  );
}
