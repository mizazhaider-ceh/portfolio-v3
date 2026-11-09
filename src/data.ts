// Content model v3, Monograph copy.
// Sources: docs/01-profile-audit.md (verified personal knowledge base),
// docs/03-brand-strategy.md, docs/03-project-selection.md,
// docs/03-information-architecture.md, docs/05-experience-home-projects.md,
// docs/05-experience-case-studies.md, docs/05-experience-supporting.md,
// docs/DESIGN_SYSTEM.md. Every claim below carries its verification status
// in the matching docs/07-content-model.md entry. No claim here is invented.
// Hard rules for this file: no em dashes, no institution, university,
// course code, lecturer, or professor mention in any public copy field,
// no bounty program names, report titles, IDs, endpoints, or reward amounts,
// no pass-count figures, no GPA figure in any bio line, no skill percentages,
// no testimonials, no hardcoded GitHub star or repo counts, no fake statistics.
// Email is only mizazhaiderceh@gmail.com.
// Compatibility note: a few exports are retained only so the v2 routes and
// components still typecheck until Phase 7 rewrites them. Each such export
// is marked below, and its v3 content is empty or institution-free. Phase 7
// removes those exports together with the v2 components that read them.

export const NAV_LINKS = [
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "about", label: "About", to: "/about" },
  { id: "expertise", label: "Expertise", to: "/expertise" },
  { id: "research", label: "Research", to: "/research" },
  { id: "contact", label: "Contact", to: "/contact" },
];

export const DETAIL_ROUTES: Record<string, string> = {
  "PenTrix-VulnLab": "/projects/pentrix-vulnlab",
  "PowerShell Academy": "/projects/powershell-academy",
  "BugHunt Arsenal": "/projects/bughunt-arsenal",
  "APK Security Pipeline": "/projects/apk-security-pipeline",
  "Security-Books": "/projects/security-books",
  "AgentArsenal": "/projects/agentarsenal",
  "Ai-Terminal-X": "/projects/ai-terminal-x",
};

// Filters per docs/03-project-selection.md section 6, only where verified.
// DevSecOps is withheld: no featured or archive project carries a verified
// DevSecOps assignment. BugHunt Arsenal is Cybersecurity only until its AI
// dimension is verified from the repo.
export const PROJECT_FILTERS = [
  "All",
  "Cybersecurity",
  "AI Security",
  "Software Engineering",
  "Automation",
  "Open Source",
  "Research",
];

export const HERO = {
  name: "Muhammad Izaz Haider",
  catalogueLine: "Portfolio, 2026",
  headline: "Find the flaw. Prove it. Build the fix.",
  headlineLines: ["Find the flaw.", "Prove it.", "Build the fix."],
  roleLine: "Penetration Tester, AI x Offensive Security",
  sentence: "I break web apps, then teach others to break them safely.",
  primaryAction: "View projects",
  primaryActionTo: "/projects",
  secondaryAction: "Contact",
  secondaryActionTo: "/contact",
  // Compatibility fields for the v2 Home component, retained only so that
  // component typechecks until Phase 7 rewrites it. The v3 hero renders no
  // availability line, no status line, and no fact line, so these stay empty
  // and must not be filled in v3.
  fact: "",
  availability: "",
  statusLine: "",
};

// Removed in v3. The tagline strip ("Understand it. Break it. Build it.
// Secure it.") does not return in any form. Retained as an empty export only
// so the v2 Tagline component typechecks until Phase 7 retires it.
export const TAGLINE: string[] = [];

export const PENTRIX_FLAG_LINE =
  "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags.";

export const CHALLENGE_PANEL = {
  title: "Try it: PenTrix-VulnLab",
  request: "GET /admin HTTP/1.1\nHost: lab.pentrix.local",
  steps: [
    {
      title: "Read the request.",
      detail: "An ordinary signed-in user asks for the admin panel.",
    },
    {
      title: "Spot the flaw.",
      detail: "The panel checks that a session exists, never the role.",
    },
    {
      title: "Prove it.",
      detail: "Type the path, then check it.",
    },
  ],
  inputLabel: "Try a path",
  inputPlaceholder: "/admin",
  checkLabel: "Check",
  idleText: "Type a path, then press Check.",
  wrongText: "No admin panel at that path. Try again.",
  solvedBadge: "Solved",
  solvedFlagLine: PENTRIX_FLAG_LINE,
  caseStudyLabel: "Read the PenTrix-VulnLab case study",
  caseStudyTo: "/projects/pentrix-vulnlab",
  resetLabel: "Reset",
};

export type ProjectCount = {
  value: string;
  what: string;
  source: string;
};

export type Project = {
  name: string;
  outcome: string;
  tags: string[];
  link: string;
  linkLabel: string;
  featured?: boolean;
  note?: string;
  /* A real command, payload, input, or verified feature list, shown as a code strip. */
  strip: string;
  catalogue: number;
  role: string;
  year: number;
  status: "Live" | "Repo" | "Course project";
  filters: string[];
  verification: string;
  counts?: ProjectCount[];
  collaboration?: string;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "PenTrix-VulnLab",
    outcome:
      "A deliberately vulnerable learning lab where students learn offensive security by exploiting real vulnerability classes in a safe, local environment.",
    tags: ["Node.js", "Express", "SQLite"],
    link: "https://github.com/mizazhaider-ceh/PenTrix-VulnLab",
    linkLabel: "View on GitHub",
    strip: "GET /admin HTTP/1.1\nHost: lab.pentrix.local",
    featured: true,
    catalogue: 1,
    role: "Founder, lead developer",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "Open Source", "Research"],
    verification:
      "Supported by project documentation. Repo link only, never a live deployment.",
    counts: [
      {
        value: "201 challenges across 29 modules",
        what: "Challenges grouped by vulnerability class",
        source: "PenTrix-VulnLab repo README and module list",
      },
      {
        value: "3 kill chain scenarios",
        what: "Scenarios that string single flaws into a full attack path",
        source: "PenTrix-VulnLab repo README",
      },
      {
        value: "3 career paths with verifiable certificates",
        what: "Career paths with verifiable certificates",
        source: "PenTrix-VulnLab repo README",
      },
    ],
  },
  {
    name: "PowerShell Academy",
    outcome:
      "A free learning platform that teaches PowerShell from zero to confident use: 18 chapters, 61 lessons, 48 glossary terms.",
    tags: ["Next.js", "React", "TypeScript"],
    link: "https://powershell-academy-seven.vercel.app/",
    linkLabel: "Visit live site",
    strip: "Get-Command *-Process\n# verb-noun: find the cmdlet, then read its help",
    featured: true,
    catalogue: 2,
    role: "Sole builder",
    year: 2026,
    status: "Live",
    filters: ["Software Engineering", "Research", "Open Source"],
    verification:
      "Verified as a live product. Sole builder verified against the repo contributors endpoint 9 November 2026 (exactly one contributor: mizazhaider-ceh, 8 contributions). The 102 commands figure is Supported by project documentation, re-verified on the live commands page 9 November 2026 (page reads \"Showing 102 of 102 commands\").",
    counts: [
      {
        value: "18 chapters",
        what: "Chapters across 6 stages",
        source: "Live site, powershell-academy-seven.vercel.app",
      },
      {
        value: "61 lessons",
        what: "Lessons across 6 stages",
        source: "Live site, powershell-academy-seven.vercel.app",
      },
      {
        value: "48 glossary terms",
        what: "Glossary terms",
        source: "Live site, powershell-academy-seven.vercel.app",
      },
      {
        value: "102 commands",
        what: "Commands in the command reference",
        source: "Live commands page, re-verified 9 November 2026",
      },
      {
        value: "6 stages",
        what: "Stages from Foundations to Projects",
        source: "Live site, powershell-academy-seven.vercel.app",
      },
    ],
  },
  {
    name: "BugHunt Arsenal",
    outcome:
      "A live browser-based security research platform: 800+ payloads, 60+ CTF tools, 14+ modules.",
    tags: ["Browser app", "Payloads", "Web pentesting"],
    link: "https://bughunt-arsenal.vercel.app/",
    linkLabel: "Visit live site",
    strip: "<script>alert(1)</script>\n# one of 800+ payloads, 21 categories",
    featured: true,
    catalogue: 3,
    role: "Sole builder",
    year: 2026,
    status: "Live",
    filters: ["Cybersecurity"],
    verification:
      "Verified as a live product. Headline figures only. No repo exists for BugHunt Arsenal: the full public repo list (82 repos) was checked 9 November 2026 and holds no BugHunt repo, and the live site links no repo, so sole builder status and stack cannot be verified against a repo and stay unverified. No repo link and no open-source claim until a repo is confirmed.",
    counts: [
      {
        value: "800+ payloads",
        what: "Payloads in the payload browser",
        source: "Live site headline, bughunt-arsenal.vercel.app",
      },
      {
        value: "60+ CTF tools",
        what: "CTF tools",
        source: "Live site headline, bughunt-arsenal.vercel.app",
      },
      {
        value: "14+ modules",
        what: "Modules",
        source: "Live site headline, bughunt-arsenal.vercel.app",
      },
      {
        value: "150+ security tools",
        what: "Security tools",
        source: "Live site headline, bughunt-arsenal.vercel.app",
      },
      {
        value: "21+ categories",
        what: "Payload categories",
        source: "Live site headline, bughunt-arsenal.vercel.app",
      },
      {
        value: "50+ free labs",
        what: "Free labs",
        source: "Live site headline, bughunt-arsenal.vercel.app",
      },
    ],
  },
  {
    name: "APK Security Pipeline",
    outcome:
      "A Python CLI that scans Android APKs for security issues, explains every step, and reports in HTML and JSON.",
    tags: ["Python", "Frida", "Android"],
    link: "https://github.com/mizazhaider-ceh/apk-security-pipeline",
    linkLabel: "View on GitHub",
    strip: "# static rules, Frida traces\n# HTML and JSON reports",
    featured: true,
    catalogue: 4,
    role: "Sole builder",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "Software Engineering", "Automation"],
    verification:
      "Supported by project documentation. Sole builder verified against the repo contributors endpoint 9 November 2026 (exactly one contributor: mizazhaider-ceh, 6 contributions).",
    counts: [
      {
        value: "64 tests passing at v2.1.0",
        what: "Tests passing at the recorded version",
        source: "Repo README, re-checked 9 November 2026 (live README badge reads version v2.1.0 and tests 64 passing)",
      },
      {
        value: "4 Frida scripts",
        what: "Frida scripts for dynamic traces",
        source: "Repo README and project documentation",
      },
      {
        value: "100 minus critical 25, high 15, medium 7, low 3",
        what: "Scoring: one score out of 100",
        source: "Repo README and project documentation",
      },
      {
        value: "Score 26 out of 100, grade F, 12 findings",
        what: "Demo run on a synthetic APK",
        source: "Demo run as recorded in the v2 build",
      },
    ],
  },
  {
    name: "Security-Books",
    outcome:
      "A curated collection of security books, guides, and resources, his most starred repository.",
    tags: ["Curated", "Books", "Resources"],
    link: "https://github.com/mizazhaider-ceh/Security-Books",
    linkLabel: "View on GitHub",
    strip: "# 160+ books, guides, resources\n# the cybersecurity library",
    featured: true,
    catalogue: 5,
    role: "Curator, maintainer",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "Research", "Open Source"],
    verification:
      "Verified as a repo; curation Supported by project documentation. Star count fetched live or omitted, never hardcoded.",
    counts: [
      {
        value: "160+ curated books, guides, and resources",
        what: "Curated books, guides, and resources",
        source: "Repo README",
      },
      {
        value: "Most starred repo",
        what: "Most starred repository on the account",
        source: "GitHub API, live at audit date, fetch live or omit the number",
      },
    ],
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    name: "Ai-Terminal-X",
    outcome:
      "Plain language to terminal commands, with safe execution checks.",
    tags: ["Python", "Gemini", "CLI"],
    link: "https://github.com/mizazhaider-ceh/Ai-Terminal-X",
    linkLabel: "View on GitHub",
    strip: "\"list the largest files\"\n# plain language in, a command out",
    catalogue: 6,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["AI Security", "Software Engineering"],
    verification: "Supported by project documentation.",
  },
  {
    name: "AgentArsenal",
    outcome:
      "A unified skills repository across 29 domains, with versioning, testing, and a one-command installer.",
    tags: ["Skills", "Automation", "CLI"],
    link: "https://github.com/mizazhaider-ceh/AgentArsenal",
    linkLabel: "View on GitHub",
    strip: "# 353 skills, 29 domains\n# one-command install",
    catalogue: 7,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["AI Security", "Software Engineering", "Open Source"],
    verification:
      "Supported by project documentation. Counts come from the workspace manifest, not from the GitHub API.",
    counts: [
      {
        value: "353 skills across 29 domains",
        what: "Skills across domains",
        source: "Workspace manifest, generated 27 October 2026, re-checked 9 November 2026, not GitHub API verified",
      },
      {
        value: "290 sub-skills, 36 agents",
        what: "Sub-skills and agents",
        source: "Workspace manifest, generated 27 October 2026, re-checked 9 November 2026, not GitHub API verified",
      },
    ],
  },
  {
    name: "VulnNotes",
    outcome:
      "Deliberately vulnerable notes app, built with Muhammad Muzammil Khan. Course project, no public repo.",
    tags: ["Flask", "Frida", "Course project"],
    link: "",
    linkLabel: "",
    strip: "# Flask API, Frida scripts\n# course project, no public repo",
    note: "Course project, no public repo",
    catalogue: 8,
    role: "Build lead",
    year: 2026,
    status: "Course project",
    filters: ["Software Engineering", "Cybersecurity"],
    verification:
      "Supported by project documentation. Re-read 9 November 2026, gate 15: build guide and project guide re-read, team split and course-project label confirmed, no public repo (GitHub search for vulnnotes returned 0 results). No correction needed.",
    collaboration:
      "Izaz leads the build. Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts. Demo is individual.",
  },
  {
    name: "90DaysOfCyberSecurity",
    outcome:
      "A 90-day, hands-on cybersecurity study plan, 1 to 2 hours a day, every tool free.",
    tags: ["Study plan", "Roadmap", "Beginners"],
    link: "https://github.com/mizazhaider-ceh/90DaysOfCyberSecurity",
    linkLabel: "View on GitHub",
    strip: "# 90 days, 1 to 2 hours a day\n# zero to job-ready fundamentals",
    catalogue: 9,
    role: "Author",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "Research", "Open Source"],
    verification: "Supported by project documentation.",
    counts: [
      {
        value: "90 daily tasks in 10 phases",
        what: "Daily tasks in phases, plus a career track",
        source: "Repo",
      },
    ],
  },
  {
    name: "Ai-CMD-X",
    outcome:
      "Plain English to real Windows commands, with safe review before anything runs.",
    tags: ["Python", "Windows", "AI"],
    link: "https://github.com/mizazhaider-ceh/Ai-CMD-X",
    linkLabel: "View on GitHub",
    strip: '"open the calculator"\n# plain English in, a command out',
    catalogue: 10,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["AI Security", "Software Engineering"],
    verification:
      "Verified 9 November 2026, gate 13: repo exists, README read. Python CLI using Google Gemini AI, Quick Mode and Interactive Mode with safe preview before executing. No LICENSE file, so no Open Source filter.",
  },
  {
    name: "Icarus-X",
    outcome:
      "Modular AI-powered penetration testing framework: 13+ tools for recon, exploitation, and post-exploitation in one CLI.",
    tags: ["Python", "Pentesting", "AI"],
    link: "https://github.com/mizazhaider-ceh/Icarus-X",
    linkLabel: "View on GitHub",
    strip: "# recon, exploitation, post-exploitation\n# one unified interface",
    catalogue: 11,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "AI Security", "Software Engineering", "Open Source"],
    verification:
      "Verified 9 November 2026, gate 13: repo exists, README read. Python 3.11+ async framework, 13+ tools, Cerebras AI analysis, MIT LICENSE file confirmed by raw fetch. Name casing follows the live API, Icarus-X.",
  },
  {
    name: "Intel-Scan",
    outcome:
      "OSINT framework with a CLI and a web GUI: DNS, WHOIS, and subdomain enumeration.",
    tags: ["OSINT", "Python", "Web GUI"],
    link: "https://github.com/mizazhaider-ceh/Intel-Scan",
    linkLabel: "View on GitHub",
    strip: "# DNS, WHOIS, subdomain enumeration\n# CLI and web GUI",
    catalogue: 12,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "Software Engineering"],
    verification:
      "Verified 9 November 2026, gate 13: repo exists, README read. Python, dual CLI and Gradio web GUI, DNS, WHOIS, multithreaded subdomain scanning, multi-format reports. No LICENSE file, so no Open Source filter; no AI in the README, so no AI Security filter.",
  },
  {
    name: "X-Recon",
    outcome:
      "AI-powered reconnaissance toolkit with a web dashboard and a real-time terminal.",
    tags: ["Recon", "AI", "Dashboard"],
    link: "https://github.com/mizazhaider-ceh/X-Recon",
    linkLabel: "View on GitHub",
    strip: "# AI recon toolkit\n# web dashboard, live terminal",
    catalogue: 13,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "AI Security", "Software Engineering"],
    verification:
      "Verified 9 November 2026, gate 13: repo exists, README read. Python and FastAPI, async port and subdomain scanning, Cerebras Llama analysis, real-time WebSocket terminal. No LICENSE file, so no Open Source filter.",
  },
  {
    name: "Active Automation",
    outcome:
      "Bash scripts automating active recon with Nmap, from basic to advanced scans.",
    tags: ["Bash", "Nmap", "Recon"],
    link: "https://github.com/mizazhaider-ceh/active-automation",
    linkLabel: "View on GitHub",
    strip: "# Bash-powered Nmap automation\n# active recon",
    catalogue: 14,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "Automation", "Open Source"],
    verification:
      "Verified 9 November 2026, gate 13: repo exists, README read. Bash and Nmap, v3.1, 32+ features, 1400+ lines. MIT license confirmed by the GitHub API.",
  },
  {
    name: "Passive Automation",
    outcome:
      "Bash script automating passive recon with OSINT tools, gathering target information without alerting the target. His first Bash scripting project.",
    tags: ["Bash", "OSINT", "Recon"],
    link: "https://github.com/mizazhaider-ceh/passive-automation",
    linkLabel: "View on GitHub",
    strip: "# Bash-powered passive recon\n# OSINT tools, no active scanning",
    catalogue: 15,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "Automation", "Open Source"],
    verification:
      "Verified 9 November 2026, gate 13: repo exists, README read. Bash v3.1, passive OSINT tools (whois, DNS, subdomains, harvesting), no active scanning. Corrected 9 November 2026: the earlier outcome named Nmap, which the README does not use for passive recon. MIT license confirmed by the GitHub API.",
  },
  {
    name: "Prime-PenTrix",
    outcome:
      "AI cybersecurity learning platform: hybrid retrieval, multi-provider LLM streaming, spaced repetition quizzes, and 24+ tools.",
    tags: ["TypeScript", "RAG", "Learning"],
    link: "https://github.com/mizazhaider-ceh/Prime-PenTrix",
    linkLabel: "View on GitHub",
    strip: "# hybrid retrieval, LLM streaming\n# spaced repetition quizzes",
    catalogue: 16,
    role: "Builder",
    year: 2026,
    status: "Repo",
    filters: ["Cybersecurity", "AI Security", "Software Engineering", "Research"],
    verification:
      "Verified 9 November 2026, gate 13: repo exists, README read. Next.js 16, TypeScript, FastAPI, Docker, hybrid RAG (pgvector plus BM25), multi-provider LLM streaming, spaced-repetition quizzes, 24+ tools. No LICENSE file despite an MIT badge, so no Open Source filter.",
    counts: [
      {
        value: "24+ tools",
        what: "Tools in the platform",
        source: "Repo",
      },
    ],
  },
  {
    name: "Scapy-based tools",
    outcome:
      "Investigation candidate. No matching repo found under this name in the 9 November 2026 review.",
    tags: ["Scapy"],
    link: "",
    linkLabel: "",
    strip: "# no matching repo found under this name\n# per-repo review, 9 November 2026",
    note: "No matching repo found in the 9 November 2026 review",
    catalogue: 17,
    role: "To confirm",
    year: 2026,
    status: "Repo",
    filters: [],
    verification:
      "Unverified. No repo named Scapy-based tools, or matching Scapy, found in the 9 November 2026 review: GitHub search for scapy under mizazhaider-ceh returned 0 results and the full public repo list (82 repos) holds no Scapy repo. Name only until a repo and a one-line problem are confirmed.",
  },
  {
    name: "LINA",
    outcome:
      "Investigation candidate. No matching repo found under this name in the 9 November 2026 review.",
    tags: [],
    link: "",
    linkLabel: "",
    strip: "# no matching repo found under this name\n# per-repo review, 9 November 2026",
    note: "No matching repo found in the 9 November 2026 review",
    catalogue: 18,
    role: "To confirm",
    year: 2026,
    status: "Repo",
    filters: [],
    verification:
      "Unverified. No repo named LINA found in the 9 November 2026 review: GitHub search for LINA under mizazhaider-ceh returned 0 results and the full public repo list (82 repos) holds no LINA repo. Name only until a repo and a one-line problem are confirmed.",
  },
];

export const ABOUT_PARAGRAPHS = [
  "I started in security young, breaking things to learn how they work. That habit became a craft: web penetration testing, bug bounty hunting on YesWeHack, and building the tools I wish I had.",
  "My first year closed at 60 out of 60 credits on the first attempt, and I placed first in Web at CSCB 2026. I founded The PenTrix to teach what I learn, through tutorials, tools, and write-ups.",
  "Now I am going deep on the defensive side too: digital forensics, reverse engineering, and malware analysis. The goal is the same on both sides: understand the system, find the weakness, and make it stronger.",
];

export const ABOUT_FACTS = [
  { label: "Degree", value: "BSc Cybersecurity" },
  { label: "Year", value: "Second year, graduating Jun 2028" },
  { label: "Location", value: "Sijsele-Damme, Belgium" },
  { label: "First year", value: "60/60 credits, first attempt" },
  { label: "Bug bounty", value: "YesWeHack, since Feb 2026" },
  { label: "Founder", value: "The PenTrix" },
];

// Retained only so the v2 About component typechecks until Phase 7 removes
// its Education section. One entry only, no institution name, and the two
// earlier school entries are cut: naming them would name institutions.
export const EDUCATION = [
  {
    title: "BSc Cybersecurity",
    org: "Belgium",
    period: "Sep 2025 to Jun 2028, 180 ECTS",
    detail: "First year: 60/60 credits, first attempt, no retakes.",
  },
];

export const LOCATION = "Sijsele-Damme, Belgium";

export const STUDY_STATUS =
  "Second-year BSc Cybersecurity student in Belgium, expected graduation June 2028.";

export const WORK_SOUGHT =
  "Offensive security internships, junior pentesting roles, and research placements.";

export const AVAILABILITY =
  "Available for internships and junior roles: Feb to Apr 2027 and Jul to Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium.";

export const WORK_AUTHORISATION_PLACEHOLDER = {
  label: "Placeholder, wording to be approved",
  text: "Work authorisation: exact wording to be approved by Muhammad Izaz Haider before this line is published.",
};

export const GRADES_LINE =
  "18/20 in Programming, Computer Architecture and OS, and Web Backend. 17/20 in Web Pentesting, Capture the Flag, Linux for Ethical Hackers, and Networks.";

// Structured field only. Never render in a bio line. Only these two figures
// are used anywhere: 16.74/20 weighted, 16.58/20 unweighted.
export const GPA = {
  weighted: "16.74/20",
  unweighted: "16.58/20",
};

export const PENTRIX = {
  mission:
    "A deliberately vulnerable learning lab where students learn offensive security by exploiting real vulnerability classes in a safe, local environment.",
  whyItExists:
    "He wanted a lab that teaches the method, not just the exploit, with challenges, guidance, and a clear path from finding to fixing.",
  technicalFocus:
    "Web vulnerabilities, authentication and authorisation flaws, injection, and the surrounding tooling, built as an Express and SQLite application with 201 challenges across 29 modules.",
  responsibilities: [
    "Founder",
    "Lead developer",
    "Challenge designer",
    "Documentation author",
  ],
  flagLine: PENTRIX_FLAG_LINE,
  repoLink: "https://github.com/mizazhaider-ceh/PenTrix-VulnLab",
  repoNote:
    "PenTrix-VulnLab must not be deployed publicly. The repository is the only link.",
};

export const TIMELINE = [
  {
    date: "Feb 2026 to present",
    title: "Bug bounty hunter, YesWeHack",
    text: "Responsible disclosure on live programmes, by category only.",
    evidenceTo: "/expertise#bug-bounty",
  },
  {
    date: "Nov 2025 to Jun 2026",
    title: "Junior DevSecOps and AI Security Engineer, Damno Solutions",
    text: "Part time, remote, 20 hours per week. Role ended, always past tense.",
    evidenceTo: "/about#experience",
  },
  {
    date: "Self founded, ongoing",
    title: "Founder of The PenTrix",
    text: "Tutorials, tools, write-ups, and roadmaps for the next generation of security researchers.",
    evidenceTo: "/projects/pentrix-vulnlab",
  },
  {
    date: "2026",
    title: "CSCB 2026 placement",
    text: "First place in Web, Junior division. Third overall Junior. 26th of 806 nationally. 26 flags solved.",
    evidenceTo: "/about#cscb",
  },
];

export type Role = {
  title: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export const ROLES: Role[] = [
  {
    title: "Bug Bounty Hunter",
    org: "YesWeHack",
    period: "Feb 2026 to Present",
    location: "Remote, part time",
    bullets: [
      "Responsible disclosure on live programmes, by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting.",
      "35 reports submitted to date, 3 rewarded, by my own count, with quarterly recognition for performance.",
    ],
  },
  {
    title: "Founder and Offensive Security Researcher",
    org: "The PenTrix",
    period: "Self founded",
    location: "Tutorials, tools, and roadmaps",
    bullets: [
      "Built for the next generation of security researchers: PenTrix-VulnLab, 30 Days of Practical Pentesting, the PenTrix platform, and Security-Books.",
      "Every project ships with a write-up that explains the method, not just the result.",
    ],
  },
  {
    title: "Junior DevSecOps and AI Security Engineer",
    org: "Damno Solutions",
    period: "Nov 2025 to Jun 2026",
    location: "Remote, part time, 20 hours per week",
    bullets: [
      "Delivered 13 vulnerabilities against a brief of 3 or more, and fixed 2 critical ones: remote code execution and SQL injection.",
      "Built GitLab CI/CD security pipelines, reviewed the CBAM codebase, and wrote 1,800+ lines of security documentation.",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "First place, Web, Junior division, CSCB 2026",
    detail: "First in the Web category, Junior division.",
    verification: "Verified",
  },
  {
    title: "Third overall, Junior division, CSCB 2026",
    detail: "Third overall Junior.",
    verification: "Verified",
  },
  {
    title: "26th of 806 participants nationally, CSCB 2026",
    detail: "26 flags solved.",
    verification: "Verified",
  },
  {
    title: "YesWeHack quarterly recognition",
    detail: "Quarterly recognition for bug bounty performance.",
    verification: "Verified",
  },
  {
    title: "First year, 60 out of 60 credits, first attempt",
    detail: "All first-year units passed at the first exam opportunity, no retakes.",
    verification: "Verified",
  },
];

export type ExpertiseGroup = {
  id: string;
  name: string;
  coverage: string;
  tools: string[];
  status?: string;
  provedBy: { label: string; to: string }[];
  capabilities: { name: string; evidence: string }[];
};

export const EXPERTISE_GROUPS: ExpertiseGroup[] = [
  {
    id: "web-pentesting",
    name: "Web application penetration testing",
    coverage:
      "Finding flaws in web applications by reading the app, testing its inputs, and proving each finding with a working exploit, then explaining the fix. Strongest evidence on the site: a national first place in the Web category and a teaching lab built around the same flaw classes.",
    tools: ["Burp Suite", "OWASP ZAP"],
    provedBy: [
      { label: "PenTrix-VulnLab case study", to: "/projects/pentrix-vulnlab" },
      { label: "CSCB evidence", to: "/about#cscb" },
    ],
    capabilities: [
      {
        name: "Penetration testing",
        evidence: "CSCB first place Web Junior; PenTrix-VulnLab",
      },
      {
        name: "Web application security",
        evidence: "YesWeHack bounty hunting since Feb 2026",
      },
      {
        name: "Burp Suite",
        evidence: "Daily use in bounty hunting and PenTrix-VulnLab",
      },
      {
        name: "OWASP ZAP",
        evidence: "Certificate held; used in web testing",
      },
      { name: "API security", evidence: "JWT work; VulnNotes IDOR" },
      { name: "SQL", evidence: "SQLite in PenTrix-VulnLab" },
      {
        name: "Git and GitHub",
        evidence: "Public repos on GitHub, no count shown",
      },
    ],
  },
  {
    id: "bug-bounty",
    name: "Bug bounty hunting and responsible disclosure",
    coverage:
      "Responsible disclosure on live programmes since February 2026, reported by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting. Categories only, never a programme name, report title, ID, endpoint, or reward amount.",
    tools: ["Burp Suite", "OWASP ZAP"],
    provedBy: [
      { label: "YesWeHack role, About experience", to: "/about#experience" },
    ],
    capabilities: [
      {
        name: "Bug bounty hunting",
        evidence: "YesWeHack, since Feb 2026",
      },
      {
        name: "Responsible disclosure",
        evidence: "Live programmes, by category only",
      },
    ],
  },
  {
    id: "vulnerability-assessment",
    name: "Vulnerability assessment and secure code review",
    coverage:
      "Assessing a real codebase and a real delivery pipeline against a brief, reporting each vulnerability with its impact, and fixing the critical ones.",
    tools: ["GitLab CI/CD", "Manual code review"],
    provedBy: [
      {
        label: "Damno Solutions role, About experience",
        to: "/about#experience",
      },
    ],
    capabilities: [
      {
        name: "Vulnerability assessment",
        evidence: "13 vulnerabilities delivered at Damno",
      },
      {
        name: "Secure code review",
        evidence: "CBAM codebase review at Damno",
      },
      {
        name: "Cryptography",
        evidence: "CNSP covers it; applied in findings by category only",
      },
    ],
  },
  {
    id: "devsecops",
    name: "DevSecOps and CI/CD security",
    coverage:
      "Building security into the delivery pipeline: CI/CD security pipelines and the documentation that lets a team run them.",
    tools: ["GitLab CI/CD"],
    provedBy: [
      {
        label: "Damno Solutions role, About experience",
        to: "/about#experience",
      },
    ],
    capabilities: [
      {
        name: "CI/CD security",
        evidence: "GitLab pipelines at Damno",
      },
      {
        name: "DevSecOps",
        evidence: "Damno role, CI/CD security pipelines, 20 hours per week",
      },
    ],
  },
  {
    id: "mobile-security",
    name: "Mobile security",
    coverage:
      "Static analysis of Android apps and dynamic analysis with Frida, plus reverse engineering of app behaviour. Demonstrated tooling plus coursework, not a completed professional mobile role. Mobile Security coursework (VulnNotes, group project; Izaz leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts).",
    tools: ["APK Security Pipeline", "Frida", "apktool", "jadx", "androguard"],
    provedBy: [
      {
        label: "APK Security Pipeline case study",
        to: "/projects/apk-security-pipeline",
      },
    ],
    capabilities: [
      {
        name: "Mobile security",
        evidence: "APK Security Pipeline; VulnNotes; Mobile Security labs",
      },
      {
        name: "Frida",
        evidence: "APK Security Pipeline dynamic traces; Mobile Security labs",
      },
      {
        name: "Testing and QA",
        evidence:
          "APK Security Pipeline, 64 tests passing at v2.1.0; AgentArsenal CI harness",
      },
    ],
  },
  {
    id: "digital-forensics",
    name: "Digital forensics",
    coverage:
      "Filesystem recovery and forensic analysis, labelled clearly as coursework in progress, not as completed forensic expertise. Course labs complete for Labs 03 and 04, Lab 05 in progress at the last record, Lab 06 study guide built; ext filesystem recovery work recorded.",
    tools: ["Sleuth Kit tooling (fls, istat)"],
    status: "Coursework in progress",
    provedBy: [{ label: "About, study status", to: "/about" }],
    capabilities: [
      {
        name: "Digital forensics",
        evidence: "Course labs; ext filesystem recovery",
      },
    ],
  },
  {
    id: "linux-server-security",
    name: "Linux and server security",
    coverage:
      "Linux as a daily driver, server security labs, and Windows Server security labs including Active Directory work. Presented as labs plus tooling, not as production administration experience.",
    tools: ["Linux", "PowerShell", "Windows Server"],
    provedBy: [
      {
        label: "PowerShell Academy case study",
        to: "/projects/powershell-academy",
      },
    ],
    capabilities: [
      {
        name: "Linux",
        evidence: "Daily driver; server security labs",
      },
      {
        name: "Windows Server security",
        evidence: "Active Directory labs on Server 2025",
      },
      { name: "PowerShell", evidence: "PowerShell Academy" },
    ],
  },
  {
    id: "ai-security",
    name: "AI security and LLM integration",
    coverage:
      "LLM integration and retrieval augmented generation in security tooling, and prompt engineering for terminal and security tasks. Thinner than the offensive security dimension, so it supports rather than leads, and no AI security claim outruns the evidence.",
    tools: ["Python", "Gemini", "Retrieval tooling"],
    provedBy: [
      { label: "Ai-Terminal-X, archive", to: "/projects/ai-terminal-x" },
      { label: "AgentArsenal, archive", to: "/projects/agentarsenal" },
    ],
    capabilities: [
      {
        name: "LLM integration and RAG",
        evidence: "Prime-PenTrix, Sentinel-Copilot-S2",
      },
      {
        name: "Prompt engineering",
        evidence: "Ai-Terminal-X; AgentArsenal",
      },
      {
        name: "Python",
        evidence: "Ai-Terminal-X, X-Recon, APK Security Pipeline",
      },
      {
        name: "Git and GitHub",
        evidence: "Public repos on GitHub, no count shown",
      },
    ],
  },
  {
    id: "network-security",
    name: "Network security and recon",
    coverage:
      "Reconnaissance and network assessment: subdomain enumeration, port scanning with CVE correlation, and Nmap automation for active and passive recon.",
    tools: ["Nmap", "Sub-Hunter", "X-Recon", "Intel-Scan"],
    provedBy: [
      {
        label: "Projects, archive entries for the recon tools",
        to: "/projects",
      },
    ],
    capabilities: [
      {
        name: "Network security",
        evidence: "Nmap automation tools",
      },
      { name: "Recon", evidence: "X-Recon, Sub-Hunter, Intel-Scan" },
      {
        name: "Bash scripting",
        evidence: "active-automation, passive-automation",
      },
    ],
  },
];

export type SkillGroup = {
  name: string;
  items: { name: string; evidence: string }[];
};

// Compatibility view of EXPERTISE_GROUPS in the v2 shape, so the v2 Skills
// route still typechecks until Phase 7 rewrites it as /expertise. Single
// source of truth is EXPERTISE_GROUPS; this is derived, never edited by hand.
export const SKILL_GROUPS: SkillGroup[] = EXPERTISE_GROUPS.map((group) => ({
  name: group.name,
  items: group.capabilities.map((capability) => ({
    name: capability.name,
    evidence: capability.evidence,
  })),
}));

export const SOFT_SKILLS = [
  "Problem solving",
  "Team leadership",
  "Communication",
  "Critical thinking",
  "Adaptability",
  "Time management",
];

export const CERTIFICATIONS = [
  { name: "Certified Network Security Practitioner (CNSP), with Merit", org: "The SecOps Group" },
  { name: "Application Security for Developers and DevOps Professionals", org: "IBM" },
  { name: "Web Application Security Testing with OWASP ZAP", org: "Coursera" },
  { name: "Linux 101", org: "TCM Security" },
  { name: "Web App Security Testing with Google Hacking", org: "CodeRed" },
  { name: "Certified Ethical Hacking v12 (CEH), course certificate", org: "LearnKartS" },
  { name: "CompTIA PenTest+ Specialization, course", org: "Packt" },
  { name: "AI Agents and Agentic AI", org: "Vanderbilt University" },
];

// Clearly marked pending block. Not featured, not counted, not held.
// Phase 8 must confirm both with evidence before either moves up.
export const PENDING_CERTIFICATIONS = [
  {
    name: "Google AI Essentials",
    org: "Google",
    note: "Listed in the sanitized CV; no certificate found yet. Not featured above until confirmed with evidence.",
  },
  {
    name: "Advanced Python Scripting",
    org: "Issuer unknown",
    note: "No issuer found in any source checked. Not featured above until the issuer is confirmed with evidence.",
  },
];

// Clearly separated from held certifications. Never listed as held.
export const IN_PROGRESS_STUDY = {
  heading: "In progress, not held",
  text: "eJPT and eWPT through INE Security. Courses studied, exams not taken. Not held yet.",
};

export const RESEARCH = {
  interests:
    "My research interests are offensive security, AI security, and learning tools: finding flaws in web applications, understanding how AI systems can be attacked and defended, and building the labs and tools that teach others to do the same.",
  amsterdam: {
    heading: "International project, Amsterdam",
    event: "Security Summer Camp",
    place: "Amsterdam",
    dates: "28 June to 2 July 2027",
    credits: "10 ECTS",
    groupSize: "Group of six",
    plannedRole:
      "Security specialist (reverse engineering and forensics tasks) and documentation lead",
    status: "Assigned, planned, not performed",
    finalityNote:
      "Assigned 5 November 2026. The change window closed 11 November 2026. Do not publish 'confirmed' until Phase 8 confirms the final status.",
  },
  applicationsLine:
    "Research internship applications for summer 2027 have been submitted.",
  writingNote: {
    heading: "Writing lives in the projects",
    text: "I have no standalone publications. My write-ups live inside the project documentation: the PenTrix-VulnLab docs, the PowerShell Academy lessons, and the Security-Books curation.",
    links: [
      { label: "PenTrix-VulnLab docs", to: "/projects/pentrix-vulnlab" },
      { label: "PowerShell Academy lessons", to: "/projects/powershell-academy" },
      { label: "Security-Books curation", to: "/projects/security-books" },
    ],
  },
};

export const PROOF_STATS = [
  {
    figure: "#1 in Web",
    label: "CSCB 2026 Junior",
    detail: "First place in the Web category, Junior division.",
  },
  {
    figure: "#3 Junior, #26 of 806",
    label: "CSCB 2026 National CTF",
    detail: "Third overall Junior, 26 flags solved, nationally.",
  },
  {
    figure: "Recognized Hunter",
    label: "YesWeHack",
    detail: "Quarterly recognition for bug bounty performance.",
  },
];

// Retained as asset data for the lightbox component. The four-image gallery
// is not republished as a gallery on any supporting page: About proves CSCB
// with the three-photograph CSCB_STORY only.
export const PROOF_GALLERY = [
  { src: "/images/cscb-rankings.png", alt: "CSCB 2026 rankings page showing Izaz Haider among the top juniors", label: "CSCB 2026: Junior rankings", width: 1280, height: 899 },
  { src: "/images/cscb-junior-top3.png", alt: "CSCB 2026 top three Junior standings", label: "CSCB 2026: Top 3 Junior", width: 585, height: 674 },
  { src: "/images/yeswehack-swag.png", alt: "YesWeHack quarterly recognition swag sent for bug bounty performance", label: "YesWeHack: quarterly recognition swag", width: 1280, height: 912 },
  { src: "/images/yeswehack-email.png", alt: "YesWeHack recognition email for bug bounty performance", label: "YesWeHack: recognition email", width: 480, height: 1070 },
];

/* CSCB 2026, told in three photographs (photo-chapters moment).
   These three images are used ONLY here, not in the proof gallery. */
export const CSCB_STORY = [
  {
    src: "/images/cscb-web-first.png",
    alt: "CSCB 2026 scoreboard showing first place in the Web category, Junior division",
    width: 1240,
    height: 641,
    title: "Web Junior 2026: first place",
    text: "First in the Web category, Junior division. Web is where I started, and where I am strongest.",
  },
  {
    src: "/images/cscb-26th-place.png",
    alt: "CSCB 2026 national standings showing 26th place of 806",
    width: 1280,
    height: 799,
    title: "National board 2026: 26th of 806",
    text: "26th of 806 players nationally. 26 flags solved across the weekend.",
  },
  {
    src: "/images/cscb-solves-breakdown.png",
    alt: "CSCB 2026 solve breakdown showing 26 flags solved",
    width: 1280,
    height: 772,
    title: "Solve breakdown 2026: 26 flags",
    text: "Every flag earned the same way: read the app, find the flaw, prove it. No shortcuts, no guessing.",
  },
];

export const FAQS = [
  {
    q: "What kind of work are you looking for?",
    a: "Offensive security internships, junior pentesting roles, and research placements. I am available Feb to Apr 2027 and Jul to Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium.",
  },
  {
    q: "When are you available?",
    a: "For a 3 month internship: Feb to Apr 2027 and Jul to Sep 2027. I am open to junior roles and research from 2028, when I graduate.",
  },
  {
    q: "Do you do bug bounty?",
    a: "Yes, on YesWeHack since Feb 2026. I do responsible disclosure on live programmes, by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting.",
  },
  {
    q: "What is The PenTrix?",
    a: "A self founded initiative with tutorials, tools, write-ups, and roadmaps for the next generation of security researchers. Its flagship is PenTrix-VulnLab, a deliberately vulnerable web app with 201 challenges across 29 modules.",
  },
  {
    q: "Can I see your CV?",
    a: "Yes. Download my CV from the contact details on this page, or ask me for it by email.",
  },
  {
    q: "How do I reach you?",
    a: "Email mizazhaiderceh@gmail.com, or use the contact form on this page. My GitHub and LinkedIn are linked on this page and in the footer.",
  },
];

export const CONTACT = {
  email: "mizazhaiderceh@gmail.com",
  github: "https://github.com/mizazhaider-ceh",
  linkedin: "https://www.linkedin.com/in/muhammad-izaz-haider-091639314",
  formspree: "https://formspree.io/f/xldjdnlr",
  cv: "/files/Muhammad_Izaz_Haider_CV.pdf",
};

export const PS_STAGES = [
  { name: "Foundations", chapters: 1, lessons: 5, note: "Why PowerShell, and how to read a command." },
  { name: "PowerShell Basics", chapters: 4, lessons: 18, note: "Verbs and nouns, help, variables, and the pipeline." },
  { name: "Core Skills", chapters: 4, lessons: 7, note: "Objects, formatting, and working with data." },
  { name: "Admin Power", chapters: 6, lessons: 19, note: "Managing systems, services, and remote machines." },
  { name: "Security Power", chapters: 2, lessons: 8, note: "Auditing, hardening, and spotting abuse." },
  { name: "Projects", chapters: 1, lessons: 4, note: "Real scripts that solve real admin problems." },
];

export const PS_REPO = "https://github.com/mizazhaider-ceh/my-powershell-academy";
export const PS_LIVE = "https://powershell-academy-seven.vercel.app/";

export const AGENT_DOMAINS = ["ad","ai-security","api","auth","automotive","binary","blockchain","bugbounty","c2","cloud","crypto","ctf","defensive","engineering","forensics","hardware","ics-scada","incident","linux","malware","memory","mobile","network","osint","privacy","privesc","recon","soc","web"];

export const AI_TERMINAL_EXAMPLES = [
  { prompt: "Show my public IP address", command: "curl ifconfig.me", note: "One plain sentence, one real command." },
  { prompt: "List all files in the current directory", command: "ls", note: "The simplest ask, answered directly." },
  { prompt: "Check disk usage", command: "df -h", note: "Readable sizes, no flags to memorize." },
];

export const APK_STAGES = [
  { name: "Static manifest rules", checks: "Permissions, exported components, and manifest settings.", produces: "Findings with severity" },
  { name: "Strings and code rules", checks: "Hardcoded secrets, unsafe crypto, and risky API use.", produces: "Findings with severity" },
  { name: "Frida dynamic traces", checks: "What the app actually does while it runs.", produces: "Runtime evidence" },
  { name: "Scoring", checks: "Every finding weighs into one score out of 100.", produces: "A grade from A to F" },
  { name: "Reports", checks: "The same result as HTML for people and JSON for tools.", produces: "HTML and JSON reports" },
  { name: "Baseline and CI", checks: "Compare against a known good run, or fail the build on new findings.", produces: "Baseline diff, CI exit code" },
];

export const BUGHUNT_CATEGORIES = [
  { name: "Cross site scripting", payloads: ["<script>alert(1)</script>", "<img src=x onerror=alert(1)>", "\"><svg onload=alert(1)>"] },
  { name: "SQL injection", payloads: ["' OR '1'='1", "1' UNION SELECT NULL--", "' AND SLEEP(5)--"] },
  { name: "Server side request forgery", payloads: ["http://169.254.169.254/latest/meta-data/", "http://localhost:8080/admin", "file:///etc/passwd"] },
  { name: "Path traversal", payloads: ["../../../../etc/passwd", "..%2f..%2f..%2fetc%2fpasswd", "....//....//etc/passwd"] },
  { name: "Command injection", payloads: ["; id", "| whoami", "$(cat /etc/passwd)"] },
  { name: "XML external entity", payloads: ["<!ENTITY xxe SYSTEM \"file:///etc/passwd\">", "<!ENTITY xxe SYSTEM \"http://169.254.169.254/\">", "% xxe;"] },
];

// Search index. The index is built from the same structured data the pages
// render from, never from a separate hardcoded list that can drift. Adding a
// project, group, or certification to this file makes it appear in search
// with no second edit; removing it removes it. Project-section entries
// (Problem, My role, Decisions, How it was built, Evidence, What I would
// improve, Links) come from the detail page content data in Phase 7, not
// from here. Pending certifications and in-progress study are never indexed
// as held.
export type SearchCategory =
  | "Project"
  | "Project section"
  | "Command"
  | "Concept"
  | "Page"
  | "Resource";

export type SearchIndexEntry = {
  title: string;
  snippet: string;
  destination: string;
  category: SearchCategory;
};

const PAGE_LEADS: Record<string, { title: string; snippet: string }> = {
  "/": {
    title: "Home",
    snippet: "I break web apps, then teach others to break them safely.",
  },
  "/projects": {
    title: "Projects",
    snippet: "Five case studies, then the archive. Every project ships with a real artefact.",
  },
  "/about": {
    title: "About",
    snippet: "Penetration tester and security tool builder in Sijsele-Damme, Belgium.",
  },
  "/expertise": {
    title: "Expertise",
    snippet: "No percentages. Each group carries the evidence for it, and a link to the project or role that proves it.",
  },
  "/research": {
    title: "Research",
    snippet: "Direction and ambition, honestly stated. No published output is claimed, because none exists yet.",
  },
  "/contact": {
    title: "Contact",
    snippet: "Get in touch about offensive security internships, junior roles, or research placements.",
  },
};

function snippet(text: string): string {
  return text.length > 160 ? `${text.slice(0, 157)}...` : text;
}

export function buildSearchIndex(): SearchIndexEntry[] {
  const entries: SearchIndexEntry[] = [];
  for (const project of [...FEATURED_PROJECTS, ...MORE_PROJECTS]) {
    entries.push({
      title: project.name,
      snippet: snippet(project.outcome),
      destination: DETAIL_ROUTES[project.name] ?? project.link ?? "/projects",
      category: "Project",
    });
  }
  for (const stage of PS_STAGES) {
    entries.push({
      title: `PowerShell Academy, ${stage.name}`,
      snippet: snippet(`${stage.chapters} chapters, ${stage.lessons} lessons. ${stage.note}`),
      destination: "/projects/powershell-academy",
      category: "Command",
    });
  }
  for (const project of FEATURED_PROJECTS) {
    const firstLine = project.strip.split("\n")[0] ?? "";
    if (firstLine) {
      entries.push({
        title: firstLine,
        snippet: snippet(`${project.name}: ${project.outcome}`),
        destination: DETAIL_ROUTES[project.name] ?? "/projects",
        category: "Command",
      });
    }
  }
  for (const group of EXPERTISE_GROUPS) {
    entries.push({
      title: group.name,
      snippet: snippet(group.coverage),
      destination: `/expertise#${group.id}`,
      category: "Concept",
    });
  }
  for (const cert of CERTIFICATIONS) {
    entries.push({
      title: cert.name,
      snippet: snippet(`${cert.org}. Held certification.`),
      destination: "/expertise#certifications",
      category: "Concept",
    });
  }
  for (const link of NAV_LINKS) {
    const lead = PAGE_LEADS[link.to];
    if (lead) {
      entries.push({
        title: lead.title,
        snippet: snippet(lead.snippet),
        destination: link.to,
        category: "Page",
      });
    }
  }
  const homeLead = PAGE_LEADS["/"];
  if (homeLead) {
    entries.push({
      title: homeLead.title,
      snippet: snippet(homeLead.snippet),
      destination: "/",
      category: "Page",
    });
  }
  entries.push(
    {
      title: "CV (PDF)",
      snippet: "Download the sanitized CV, PDF, 8 KB.",
      destination: CONTACT.cv,
      category: "Resource",
    },
    {
      title: "GitHub",
      snippet: "github.com/mizazhaider-ceh",
      destination: CONTACT.github,
      category: "Resource",
    },
    {
      title: "LinkedIn",
      snippet: "linkedin.com/in/muhammad-izaz-haider-091639314",
      destination: CONTACT.linkedin,
      category: "Resource",
    },
    {
      title: "Email",
      snippet: "mizazhaiderceh@gmail.com",
      destination: `mailto:${CONTACT.email}`,
      category: "Resource",
    },
  );
  return entries;
}
