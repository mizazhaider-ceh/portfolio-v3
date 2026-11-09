// Skills and career tree, hand-built inline SVG in Monograph tokens.
// Content taken from the former Archify file (all 32 node labels and
// sublabels, all 29 edges, viewBox 794 by 2244). Content fixes against the
// audit, recorded in docs/06-asset-inventory.md: the root subtitle drops the
// institution name and keeps only the degree line; the Git and GitHub leaf
// drops the stale repo count (80, the audit records 81) and states no count;
// the missing spaces in "AI security and automation" and in the Frida
// sublabel are repaired; the Malware analysis leaf is kept, visibly labelled
// "Course work in progress". The expand and collapse toggles are gone: a
// static diagram has nothing hidden, so the whole tree is always visible,
// and the branch counts (29, 8, 7, 11) are kept as count badges on the root
// and branch nodes. Highlighted path, oxblood only: the offensive security
// spine, root to Offensive security to Penetration testing to Web application
// security.
const PAPER = "var(--paper)";
const SURFACE = "var(--surface)";
const INK = "var(--ink)";
const MUTED = "var(--muted)";
const ACCENT = "var(--accent)";

const DISPLAY = "Archivo, 'Instrument Sans', sans-serif";
const SANS = "'Instrument Sans', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

type TreeNode = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string[];
  sub: string[];
  large?: boolean;
  count?: string;
};

const NODES: TreeNode[] = [
  { x: 37, y: 1045, w: 214, h: 59, title: ["Muhammad Izaz Haider"], sub: ["BSc Cybersecurity"], large: true, count: "29" }, // Root subtitle: degree line only, no institution name.
  { x: 291, y: 360, w: 190, h: 59, title: ["Offensive security"], sub: ["Find the flaw"], count: "8" },
  { x: 516, y: 64, w: 234, h: 59, title: ["Penetration testing"], sub: ["CSCB #1 Web Junior"] },
  { x: 516, y: 147, w: 234, h: 59, title: ["Web application security"], sub: ["YesWeHack since Feb 2026"] },
  { x: 516, y: 230, w: 234, h: 59, title: ["Burp Suite"], sub: ["Daily in bounty hunting"] },
  { x: 516, y: 313, w: 234, h: 59, title: ["OWASP ZAP"], sub: ["Certified, used in web testing"] },
  { x: 516, y: 396, w: 234, h: 59, title: ["Vulnerability assessment"], sub: ["13 findings at Damno"] },
  { x: 516, y: 479, w: 234, h: 59, title: ["API security"], sub: ["JWT work, VulnNotes IDOR"] },
  { x: 516, y: 562, w: 234, h: 59, title: ["Mobile security"], sub: ["Frida dynamic analysis"] },
  { x: 516, y: 645, w: 234, h: 59, title: ["Digital forensics"], sub: ["Ext filesystem recovery"] },
  { x: 291, y: 982, w: 190, h: 59, title: ["Defensive security"], sub: ["Fix the flaw"], count: "7" },
  { x: 516, y: 728, w: 234, h: 59, title: ["Linux"], sub: ["Daily driver, server labs"] },
  { x: 516, y: 811, w: 234, h: 59, title: ["Windows Server security"], sub: ["AD labs on Server 2025"] },
  { x: 516, y: 894, w: 234, h: 59, title: ["Secure code review"], sub: ["CBAM codebase at Damno"] },
  { x: 516, y: 977, w: 234, h: 59, title: ["CI/CD security"], sub: ["GitLab pipelines at Damno"] },
  { x: 516, y: 1060, w: 234, h: 59, title: ["Malware analysis"], sub: ["Course work in progress"] }, // Kept, visibly labelled coursework in progress, never presented as an Expertise group.
  { x: 516, y: 1143, w: 234, h: 59, title: ["Network security"], sub: ["Nmap and recon tooling"] },
  { x: 516, y: 1226, w: 234, h: 59, title: ["Cryptography"], sub: ["Certified, applied in findings"] },
  { x: 291, y: 1721, w: 190, h: 76, title: ["AI security and", "automation"], sub: ["Scale the work"], count: "11" },
  { x: 516, y: 1309, w: 234, h: 59, title: ["Python"], sub: ["Ai-Terminal-X, APK Pipeline"] },
  { x: 516, y: 1392, w: 234, h: 59, title: ["LLM integration and RAG"], sub: ["Prime-PenTrix, Sentinel-Copilot"] },
  { x: 516, y: 1475, w: 234, h: 59, title: ["Prompt engineering"], sub: ["Ai-Terminal-X"] },
  { x: 516, y: 1558, w: 234, h: 59, title: ["Bash scripting"], sub: ["Active and passive automation"] },
  { x: 516, y: 1641, w: 234, h: 59, title: ["JavaScript"], sub: ["BugHunt Arsenal, Prime-PenTrix"] },
  { x: 516, y: 1724, w: 234, h: 59, title: ["SQL"], sub: ["SQLite in PenTrix-VulnLab"] },
  { x: 516, y: 1807, w: 234, h: 59, title: ["Git and GitHub"], sub: ["Public repos on GitHub"] }, // No repo count: the stale count (80, the audit records 81) was removed, not updated to a live count with a fetch date.
  { x: 516, y: 1890, w: 234, h: 59, title: ["PowerShell"], sub: ["PowerShell Academy"] },
  { x: 516, y: 1973, w: 234, h: 73, title: ["Frida"], sub: ["APK dynamic traces,", "Mobile Security labs"] },
  { x: 516, y: 2070, w: 234, h: 59, title: ["C and C++"], sub: ["KeyGen-X"] },
  { x: 516, y: 2153, w: 234, h: 59, title: ["Testing and QA"], sub: ["APK 64 tests, AgentArsenal CI"] },
];

// Edges in Archify order, with the exact path data from the former file.
// accent marks the offensive security spine, the single highlighted path.
const EDGES: { d: string; accent?: boolean }[] = [
  { d: "M 246 1069.5 L 256 1069.5 Q 266 1069.5 266 1059.5 L 266 394.5 Q 266 384.5 276 384.5 L 286 384.5", accent: true },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 374.5 L 496 103.5 Q 496 93.5 506 93.5 L 516 93.5", accent: true },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 374.5 L 496 186.5 Q 496 176.5 506 176.5 L 516 176.5", accent: true },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 374.5 L 496 269.5 Q 496 259.5 506 259.5 L 516 259.5" },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 374.5 L 496 352.5 Q 496 342.5 506 342.5 L 516 342.5" },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 394.5 L 496 415.5 Q 496 425.5 506 425.5 L 516 425.5" },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 394.5 L 496 498.5 Q 496 508.5 506 508.5 L 516 508.5" },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 394.5 L 496 581.5 Q 496 591.5 506 591.5 L 516 591.5" },
  { d: "M 476 384.5 L 486 384.5 Q 496 384.5 496 394.5 L 496 664.5 Q 496 674.5 506 674.5 L 516 674.5" },
  { d: "M 246 1069.5 L 256 1069.5 Q 266 1069.5 266 1059.5 L 266 1016.5 Q 266 1006.5 276 1006.5 L 286 1006.5" },
  { d: "M 476 1006.5 L 486 1006.5 Q 496 1006.5 496 996.5 L 496 767.5 Q 496 757.5 506 757.5 L 516 757.5" },
  { d: "M 476 1006.5 L 486 1006.5 Q 496 1006.5 496 996.5 L 496 850.5 Q 496 840.5 506 840.5 L 516 840.5" },
  { d: "M 476 1006.5 L 486 1006.5 Q 496 1006.5 496 996.5 L 496 933.5 Q 496 923.5 506 923.5 L 516 923.5" },
  { d: "M 476 1007 L 516 1007" },
  { d: "M 476 1006.5 L 486 1006.5 Q 496 1006.5 496 1016.5 L 496 1079.5 Q 496 1089.5 506 1089.5 L 516 1089.5" },
  { d: "M 476 1006.5 L 486 1006.5 Q 496 1006.5 496 1016.5 L 496 1162.5 Q 496 1172.5 506 1172.5 L 516 1172.5" },
  { d: "M 476 1006.5 L 486 1006.5 Q 496 1006.5 496 1016.5 L 496 1245.5 Q 496 1255.5 506 1255.5 L 516 1255.5" },
  { d: "M 246 1069.5 L 256 1069.5 Q 266 1069.5 266 1079.5 L 266 1744 Q 266 1754 276 1754 L 286 1754" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1744 L 496 1348.5 Q 496 1338.5 506 1338.5 L 516 1338.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1744 L 496 1431.5 Q 496 1421.5 506 1421.5 L 516 1421.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1744 L 496 1514.5 Q 496 1504.5 506 1504.5 L 516 1504.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1744 L 496 1597.5 Q 496 1587.5 506 1587.5 L 516 1587.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1744 L 496 1680.5 Q 496 1670.5 506 1670.5 L 516 1670.5" },
  { d: "M 476 1754 L 516 1754" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1764 L 496 1826.5 Q 496 1836.5 506 1836.5 L 516 1836.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1764 L 496 1909.5 Q 496 1919.5 506 1919.5 L 516 1919.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1764 L 496 1999.5 Q 496 2009.5 506 2009.5 L 516 2009.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1764 L 496 2089.5 Q 496 2099.5 506 2099.5 L 516 2099.5" },
  { d: "M 476 1754 L 486 1754 Q 496 1754 496 1764 L 496 2172.5 Q 496 2182.5 506 2182.5 L 516 2182.5" },
];

function TreeNodeView({ node }: { node: TreeNode }) {
  const cx = node.x + node.w / 2;
  const titleSize = node.large ? 14.5 : 13;
  const titleStart = node.h === 76 ? node.y + 20 : node.large ? node.y + 20 : node.y + 25;
  const subStart = node.h === 76 ? node.y + 56 : node.h === 73 ? node.y + 44 : node.large ? node.y + 39 : node.y + 43;
  const badgeCx = node.x + node.w - 16;
  const badgeCy = node.y + node.h / 2;
  return (
    <g>
      <rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={2}
        style={{ fill: SURFACE, stroke: INK }}
        strokeWidth={node.large ? 1.2 : 1}
      />
      {node.title.map((line, i) => (
        <text
          key={line}
          x={cx}
          y={titleStart + i * 17}
          textAnchor="middle"
          fontSize={titleSize}
          style={{ fill: INK, fontFamily: DISPLAY, fontWeight: 600 }}
        >
          {line}
        </text>
      ))}
      {node.sub.map((line, i) => (
        <text
          key={line}
          x={cx}
          y={subStart + i * 14}
          textAnchor="middle"
          fontSize={11}
          style={{ fill: MUTED, fontFamily: SANS, fontWeight: 400 }}
        >
          {line}
        </text>
      ))}
      {node.count !== undefined && (
        <g>
          <circle cx={badgeCx} cy={badgeCy} r="11" style={{ fill: SURFACE, stroke: INK }} strokeWidth="1" />
          <text
            x={badgeCx}
            y={badgeCy}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={11}
            style={{ fill: INK, fontFamily: MONO, fontWeight: 500 }}
          >
            {node.count}
          </text>
        </g>
      )}
    </g>
  );
}

export default function SkillsTree() {
  return (
    <svg
      viewBox="0 0 794 2244"
      role="img"
      aria-label="Skills and career tree of Muhammad Izaz Haider: offensive security, defensive security, and AI security and automation, 29 leaves in total"
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <title>Skills and career tree of Muhammad Izaz Haider</title>
      <defs>
        <marker
          id="tree-arrow-ink"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" style={{ fill: INK }} />
        </marker>
        <marker
          id="tree-arrow-accent"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" style={{ fill: ACCENT }} />
        </marker>
      </defs>
      <rect x="0" y="0" width="794" height="2244" style={{ fill: PAPER }} />
      <g fill="none" strokeWidth="1.5">
        {EDGES.map((edge, i) => (
          <path
            key={i}
            d={edge.d}
            style={{ stroke: edge.accent ? ACCENT : INK }}
            markerEnd={edge.accent ? "url(#tree-arrow-accent)" : "url(#tree-arrow-ink)"}
          />
        ))}
      </g>
      {NODES.map((node) => (
        <TreeNodeView key={node.title.join(" ")} node={node} />
      ))}
    </svg>
  );
}
