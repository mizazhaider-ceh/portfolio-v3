// All content below is verified (see ~/workspace/portfolio-rebuild-brief.md).
// Never add a fact here that is not in the brief. No invented metrics,
// no bounty amounts, no test-pass counts, no cert counts, no GPA in bios.

export const NAV_LINKS = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/about" },
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "experience", label: "Experience", to: "/experience" },
  { id: "skills", label: "Skills", to: "/skills" },
  { id: "certifications", label: "Certifications", to: "/certifications" },
  { id: "proof", label: "Proof", to: "/proof" },
  { id: "contact", label: "Contact", to: "/contact" },
];

export const DETAIL_ROUTES: Record<string, string> = {
  "PenTrix-VulnLab": "/projects/pentrix-vulnlab",
  "PowerShell Academy": "/projects/powershell-academy",
  "BugHunt Arsenal": "/projects/bughunt-arsenal",
  "Ai-Terminal-X": "/projects/ai-terminal-x",
  "APK Security Pipeline": "/projects/apk-security-pipeline",
  "AgentArsenal": "/projects/agentarsenal",
};

export const HERO = {
  name: "Muhammad Izaz Haider",
  sentence:
    "Second year BSc Cybersecurity student at Howest who breaks web apps, hunts bounties on YesWeHack, and builds the tools he wishes he had.",
  fact: "CSCB 2026: #1 Web Junior, #3 overall Junior, #26 of 806",
  availability: "Available for internships and junior roles: Feb–Apr 2027 and Jul–Sep 2027",
  statusLine: "status: available for internships, feb apr 2027, jul sep 2027",
};

export const TAGLINE = ["Understand it.", "Break it.", "Build it.", "Secure it."];

export const ABOUT_PARAGRAPHS = [
  "I started in security young, breaking things to learn how they work. That habit became a craft: web penetration testing, bug bounty hunting on YesWeHack, and building the tools I wish I had.",
  "I study BSc Cybersecurity at Howest in Belgium. My first year closed at 60 out of 60 credits on the first attempt, and I placed #1 Web Junior at CSCB 2026. I founded The PenTrix to teach what I learn, through tutorials, tools, and write ups.",
  "Now I am going deep on the defensive side too: digital forensics, reverse engineering, and malware analysis. The goal is the same on both sides: understand the system, find the weakness, and make it stronger.",
];

export const ABOUT_FACTS = [
  { label: "Degree", value: "BSc Cybersecurity, Howest" },
  { label: "Year", value: "Second year, graduating Jun 2028" },
  { label: "Location", value: "Sijsele-Damme, Belgium" },
  { label: "First year", value: "60/60 credits, first attempt" },
  { label: "Bug bounty", value: "YesWeHack, since Feb 2026" },
  { label: "Founder", value: "The PenTrix" },
];

export const PROOF_STATS = [
  {
    figure: "#1 in Web",
    label: "CSCB 2026 Junior",
    detail: "First place in the Web category, representing Howest.",
  },
  {
    figure: "#3 Junior · #26/806",
    label: "CSCB 2026 National CTF",
    detail: "Third overall Junior, 26 flags solved, nationally.",
  },
  {
    figure: "Recognized Hunter",
    label: "YesWeHack · MIHX01",
    detail: "Quarterly recognition for bug bounty performance.",
  },
];

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
    text: "First in the Web category, Junior division, representing Howest. Web is where I started, and where I am strongest.",
  },
  {
    src: "/images/cscb-26th-place.png",
    alt: "CSCB 2026 national standings showing 26th place of 806",
    width: 1280,
    height: 799,
    title: "National board 2026: #26 of 806",
    text: "26th of 806 players nationally, and the only Pakistani at that rank. 26 flags solved across the weekend.",
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
};

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "PenTrix-VulnLab",
    outcome: "Deliberately vulnerable web app for learning web penetration testing: 201 challenges across 29 modules, 3 kill chain scenarios, and 3 career paths with verifiable certificates.",
    tags: ["Express", "SQLite", "Web pentesting"],
    link: "https://github.com/mizazhaider-ceh/PenTrix-VulnLab",
    linkLabel: "View on GitHub",
    strip: "GET /admin HTTP/1.1\nHost: lab.pentrix.local",
    featured: true,
  },
  {
    name: "PowerShell Academy",
    outcome: "Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages, from foundations to security projects.",
    tags: ["TypeScript", "Next.js", "Vercel"],
    link: "https://powershell-academy-seven.vercel.app/",
    linkLabel: "Visit live site",
    strip: "Get-Command *-Process\n# verb-noun: find the cmdlet, then read its help",
    featured: true,
  },
  {
    name: "BugHunt Arsenal",
    outcome: "Free browser based web pentesting and security research platform: 800+ payloads across 21 categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules. No install, no sign up.",
    tags: ["Web pentesting", "Payloads", "Browser app"],
    link: "https://bughunt-arsenal.vercel.app/",
    linkLabel: "Visit live site",
    strip: "<script>alert(1)</script>\n# one of 800+ payloads, 21 categories",
    featured: true,
  },
  {
    name: "Ai-Terminal-X",
    outcome: "AI powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks.",
    tags: ["Python", "Gemini AI", "CLI"],
    link: "https://github.com/mizazhaider-ceh/Ai-Terminal-X",
    linkLabel: "View on GitHub",
    strip: "\"list the largest files\"\n# plain language in, a command out",
    featured: true,
  },
  {
    name: "APK Security Pipeline",
    outcome: "One command security checks an Android app and explains every step: static manifest and code rules, Frida dynamic traces, scoring, HTML and JSON reports.",
    tags: ["Python", "Frida", "Android"],
    link: "https://github.com/mizazhaider-ceh/apk-security-pipeline",
    linkLabel: "View on GitHub",
    strip: "# static rules, Frida traces\n# HTML and JSON reports",
    featured: true,
  },
  {
    name: "AgentArsenal",
    outcome: "Unified skills repository: 353 skills across 29 domains, per skill versioning, automated testing, quality scoring, and a one command installer.",
    tags: ["Skills", "Automation", "CLI"],
    link: "https://github.com/mizazhaider-ceh/AgentArsenal",
    linkLabel: "View on GitHub",
    strip: "# 353 skills, 29 domains\n# one-command install",
    featured: true,
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    name: "VulnNotes",
    outcome: "Deliberately vulnerable notes app, built as a Mobile Security course project worth 70% of the module. Group project with Muhammad Muzammil Khan; Izaz leads the build.",
    tags: ["Flask", "Frida", "Course project"],
    link: "",
    linkLabel: "",
    strip: "# Flask API, Frida scripts\n# Mobile Security course project",
    note: "Course project, no public repo",
  },
  {
    name: "Security-Books",
    outcome: "The cybersecurity library: 160+ curated books, guides, and resources. His most starred repo.",
    tags: ["Curated", "Books", "Resources"],
    link: "https://github.com/mizazhaider-ceh/Security-Books",
    linkLabel: "View on GitHub",
    strip: "# 160+ books, guides, resources\n# the cybersecurity library",
  },
  {
    name: "Intel-Scan",
    outcome: "OSINT framework with a CLI and a web GUI: DNS, WHOIS, and subdomain enumeration.",
    tags: ["OSINT", "Python", "Web GUI"],
    link: "https://github.com/mizazhaider-ceh/Intel-Scan",
    linkLabel: "View on GitHub",
    strip: "# DNS, WHOIS, subdomain enumeration\n# CLI and web GUI",
  },
  {
    name: "X-Recon",
    outcome: "AI powered reconnaissance toolkit with a web dashboard and a real time terminal.",
    tags: ["Recon", "AI", "Dashboard"],
    link: "https://github.com/mizazhaider-ceh/X-Recon",
    linkLabel: "View on GitHub",
    strip: "# AI recon toolkit\n# web dashboard, live terminal",
  },
  {
    name: "Prime-PenTrix",
    outcome: "AI cybersecurity learning platform: hybrid retrieval, multi provider LLM streaming, spaced repetition quizzes, and 24+ tools.",
    tags: ["Next.js", "FastAPI", "RAG"],
    link: "https://github.com/mizazhaider-ceh/Prime-PenTrix",
    linkLabel: "View on GitHub",
    strip: "# hybrid retrieval, LLM streaming\n# spaced repetition quizzes",
  },
  {
    name: "Sub-Hunter",
    outcome: "Subdomain enumeration: takeover detection, VHost discovery, JS parsing, and cloud detection.",
    tags: ["Recon", "Subdomains", "Python"],
    link: "https://github.com/mizazhaider-ceh/Sub-Hunter",
    linkLabel: "View on GitHub",
    strip: "# takeover detection, VHost discovery\n# JS parsing, cloud detection",
  },
  {
    name: "PortBlitz",
    outcome: "Async port scanner with CVE correlation and an interactive terminal UI, 500+ concurrent connections.",
    tags: ["Port scanning", "CVE", "TUI"],
    link: "https://github.com/mizazhaider-ceh/PortBlitz",
    linkLabel: "View on GitHub",
    strip: "# async port scan, CVE correlation\n# 500+ concurrent connections",
  },
  {
    name: "90DaysOfCyberSecurity",
    outcome: "A 90-day, hands-on cybersecurity study plan: from zero to job-ready fundamentals, 1-2 hours a day, every tool free.",
    tags: ["Study plan", "Roadmap", "Beginners"],
    link: "https://github.com/mizazhaider-ceh/90DaysOfCyberSecurity",
    linkLabel: "View on GitHub",
    strip: "# 90 days, 1-2 hours a day\n# zero to job-ready fundamentals",
  },
  {
    name: "The PenTrix 30 Days",
    outcome: "A comprehensive cybersecurity initiative teaching practical pentesting, day by day.",
    tags: ["Pentesting", "Training", "The PenTrix"],
    link: "https://github.com/mizazhaider-ceh/The-PenTrix-30-Days-of-Practical-Pentesting",
    linkLabel: "View on GitHub",
    strip: "# 30 days of practical pentesting\n# tutorials, tools, write ups",
  },
  {
    name: "pentrix-platform",
    outcome: "The PenTrix learning platform (v1): 192 verified cybersecurity resources, sequenced roadmaps.",
    tags: ["Next.js", "TypeScript", "Learning"],
    link: "https://github.com/mizazhaider-ceh/pentrix-platform",
    linkLabel: "View on GitHub",
    strip: "# 192 verified resources\n# sequenced roadmaps",
  },
  {
    name: "Ai-CMD-X",
    outcome: "Plain English to real Windows commands.",
    tags: ["Python", "Windows", "AI"],
    link: "https://github.com/mizazhaider-ceh/Ai-CMD-X",
    linkLabel: "View on GitHub",
    strip: '"open the calculator"\n# plain English in, a command out',
  },
  {
    name: "icarus-x",
    outcome: "Modular AI-powered penetration testing framework: recon, exploitation, and post-exploitation in one interface.",
    tags: ["Python", "Pentesting", "AI"],
    link: "https://github.com/mizazhaider-ceh/icarus-x",
    linkLabel: "View on GitHub",
    strip: "# recon, exploitation, post-exploitation\n# one unified interface",
  },
  {
    name: "KeyGen-X",
    outcome: "Secure key generation and validation, cross-platform (C++).",
    tags: ["C++", "Python", "Crypto"],
    link: "https://github.com/mizazhaider-ceh/KeyGen-X",
    linkLabel: "View on GitHub",
    strip: "# secure key generation\n# cross-platform",
  },
  {
    name: "active-automation",
    outcome: "Bash-powered Nmap automation for active recon, customizable scans.",
    tags: ["Bash", "Nmap", "Recon"],
    link: "https://github.com/mizazhaider-ceh/active-automation",
    linkLabel: "View on GitHub",
    strip: "# Bash-powered Nmap automation\n# active recon",
  },
  {
    name: "passive-automation",
    outcome: "Bash-powered Nmap automation for passive recon, v3.1. His first Bash scripting project.",
    tags: ["Bash", "Nmap", "Recon"],
    link: "https://github.com/mizazhaider-ceh/passive-automation",
    linkLabel: "View on GitHub",
    strip: "# Bash-powered Nmap automation\n# passive recon",
  },
  {
    name: "Sentinel-Copilot-S2",
    outcome: "AI SecOps copilot built from scratch: hybrid retrieval, 46 modular files, and 24+ tools.",
    tags: ["SecOps", "AI", "RAG"],
    link: "https://github.com/mizazhaider-ceh/Sentinel-Copilot-S2",
    linkLabel: "View on GitHub",
    strip: "# hybrid retrieval, 46 modular files\n# 24+ SecOps tools",
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
      "Built for the next generation of security researchers: PenTrix-VulnLab, 30 Days of Practical Pentesting, the pentrix platform, and Security-Books.",
      "Every project ships with a write up that explains the method, not just the result.",
    ],
  },
  {
    title: "Junior DevSecOps and AI Security Engineer",
    org: "Damno Solutions",
    period: "Nov 2025 to Jun 2026",
    location: "Remote, part time, 20h/week",
    bullets: [
      "Delivered 13 vulnerabilities against a brief of 3+, and fixed 2 critical ones: remote code execution and SQL injection.",
      "Built GitLab CI/CD security pipelines, reviewed the CBAM codebase, and wrote 1800+ lines of security documentation.",
    ],
  },
];

export type SkillGroup = {
  name: string;
  items: { name: string; evidence: string }[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Offensive security",
    items: [
      { name: "Penetration testing", evidence: "CSCB #1 Web Junior; PenTrix-VulnLab" },
      { name: "Web application security", evidence: "YesWeHack bounty hunting since Feb 2026" },
      { name: "Burp Suite", evidence: "Daily in bounty hunting and PenTrix-VulnLab" },
      { name: "OWASP ZAP", evidence: "Certified; used in web testing" },
      { name: "Vulnerability assessment", evidence: "13 vulnerabilities delivered at Damno" },
      { name: "API security", evidence: "JWT work; VulnNotes IDOR" },
      { name: "Mobile security", evidence: "Static analysis, Frida dynamic analysis, reverse engineering" },
      { name: "Digital forensics", evidence: "Course labs; ext filesystem recovery" },
    ],
  },
  {
    name: "Defensive security",
    items: [
      { name: "Linux", evidence: "Daily driver; server security labs" },
      { name: "Windows Server security", evidence: "Active Directory labs on Server 2025" },
      { name: "Secure code review", evidence: "CBAM codebase at Damno" },
      { name: "CI/CD security", evidence: "GitLab pipelines at Damno" },
      { name: "Malware analysis", evidence: "Course work in progress" },
      { name: "Network security", evidence: "Nmap and recon tooling" },
      { name: "Cryptography", evidence: "Certified; applied in findings" },
    ],
  },
  {
    name: "AI security and automation",
    items: [
      { name: "Python", evidence: "Ai-Terminal-X, X-Recon, APK Security Pipeline" },
      { name: "LLM integration and RAG", evidence: "Prime-PenTrix, Sentinel-Copilot-S2" },
      { name: "Prompt engineering", evidence: "Ai-Terminal-X" },
      { name: "Bash scripting", evidence: "Active and passive automation" },
      { name: "JavaScript", evidence: "BugHunt Arsenal, Prime-PenTrix" },
      { name: "SQL", evidence: "SQLite in PenTrix-VulnLab" },
      { name: "Git and GitHub", evidence: "80 public repos" },
      { name: "PowerShell", evidence: "PowerShell Academy; WSS Lab 2" },
      { name: "Frida", evidence: "APK Security Pipeline dynamic traces; Mobile Security labs" },
      { name: "C and C++", evidence: "KeyGen-X" },
      { name: "Testing and QA", evidence: "APK pipeline, 64 tests; AgentArsenal CI harness" },
    ],
  },
];

export const SOFT_SKILLS = [
  "Problem solving",
  "Team leadership",
  "Communication",
  "Critical thinking",
  "Adaptability",
  "Time management",
];

export const EDUCATION = [
  {
    title: "BSc Cybersecurity",
    org: "Howest University of Applied Sciences, Bruges, Belgium",
    period: "Sep 2025 to Jun 2028 · 180 ECTS",
    detail: "First year: 60/60 credits, first attempt, no retakes.",
  },
  {
    title: "ICS: Intermediate in Computer Science",
    org: "Dawn Science College, Barnala, Pakistan",
    period: "2022 to 2024 · Grade A+",
    detail: "",
  },
  {
    title: "Matriculation: Computer Science",
    org: "Govt. High School for Boys, Hazara Mughlan, Pakistan",
    period: "2020 to 2022",
    detail: "",
  },
];

export const CERTIFICATIONS = [
  { name: "CNSP with Merit", org: "The SecOps Group" },
  { name: "Certified Ethical Hacking v12 (CEH), course certificate", org: "LearnKartS" },
  { name: "CompTIA PenTest+ Specialization, course", org: "Packt" },
  { name: "AI Agents and Agentic AI", org: "Vanderbilt University" },
  { name: "Application Security for Developers and DevOps Professionals", org: "IBM" },
  { name: "Web Application Security Testing with OWASP ZAP", org: "Coursera" },
  { name: "Linux 101", org: "TCM Security" },
  { name: "Web App Security Testing with Google Hacking", org: "CodeRed" },
  { name: "Google AI Essentials", org: "Google" },
  { name: "Advanced Python Scripting", org: "Issuer unknown" },
];

export const FAQS = [
  {
    q: "What kind of work are you looking for?",
    a: "Offensive security internships, junior pentesting roles, and research placements. I am available Feb–Apr 2027 and Jul–Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium.",
  },
  {
    q: "When are you available?",
    a: "For a 3 month internship: Feb–Apr 2027 and Jul–Sep 2027. I am open to junior roles and research from 2028, when I graduate.",
  },
  {
    q: "Do you do bug bounty?",
    a: "Yes, on YesWeHack since Feb 2026 under the handle MIHX01. I do responsible disclosure on live programmes: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting. 35 reports submitted to date, 3 rewarded, by my own count.",
  },
  {
    q: "What is The PenTrix?",
    a: "A self founded initiative with tutorials, tools, write ups, and roadmaps for the next generation of security researchers. Its flagship is PenTrix-VulnLab, a deliberately vulnerable web app with 201 challenges across 29 modules.",
  },
  {
    q: "Can I see your CV?",
    a: "Yes. Download my CV from the contact section below, or ask me for it by email.",
  },
  {
    q: "How do I reach you?",
    a: "Email mizazhaiderceh@gmail.com, or use the contact form below. My GitHub and LinkedIn are linked in the navigation.",
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
