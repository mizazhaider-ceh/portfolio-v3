# Competitive Research: Exceptional Portfolios and What They Teach This Rebuild

**Phase 2, portfolio v3 rebuild. Research date: 9 November 2026.**
**Scope:** design principles only. No copy, no imagery, and no layout is taken from any site below. Principles are extracted, not copied.
**Rule for this file:** no em dashes anywhere. No bounty program names, report titles, IDs, endpoints, or reward amounts. No test-pass counts. No GPA figure in bios. No invented experience, grades, or skills. No PenTrix flag storage disclosure.

## How this research was done, and its limits

This report is based on what was actually read in this pass: full text fetches of the six assigned sources, plus three supporting pages read in full. No live browser was used, nothing was clicked, and no login was attempted anywhere.

What was read in full:

- Awwwards homepage, https://www.awwwards.com/
- Hoverstate, 14 Best Portfolio Websites for Designers and Developers in 2026, https://www.hoverstate.design/best-portfolio-websites
- Really Good Designs, 18 Interactive Portfolio Examples That Engage On Another Level, https://reallygooddesigns.com/interactive-portfolio-examples/
- Siteinspire homepage, https://www.siteinspire.com/
- Lapa Ninja homepage, https://www.lapa.ninja/
- Behance, Building the Perfect Case Study by Nick Longo, https://www.behance.net/resources/articles/building-the-perfect-case-study
- Supporting read: Hon Tran, How to Build an Award-Winning Portfolio Site, https://www.hontran.dev/blog/how-to-build-an-award-winning-portfolio-site (an Awwwards jury member writing from inside the judging process)
- Supporting read: search results on case study structure and editorial layout, used only where they agree with the full pages above and cited as search findings, not as full reads

Two honest limits:

1. Siteinspire and Lapa Ninja are JavaScript galleries. A text fetch of each homepage returned only a few lines (see sections 4 and 5). This report states only what those fetches actually showed and does not pretend to have browsed their galleries in depth.
2. Awwwards itself is also a visual, jury-driven showcase. Its homepage fetch returned the current Site of the Day, the nominee list, and its sections, but the judging criteria in this report come from Hon Tran's jury-member guide, which was read in full, and are attributed to him, not presented as a fresh reading of Awwwards documentation.

## Who this rebuild is for (grounding, from docs/01-profile-audit.md)

The portfolio belongs to Muhammad Izaz Haider: penetration tester, AI x offensive security, second-year BSc Cybersecurity student in Belgium, founder of The PenTrix, bug bounty hunter since February 2026, former Junior DevSecOps and AI Security Engineer at Damno Solutions (November 2025 to June 2026, part time). His verified competition result is CSCB 2026: first place in Web, Junior division, third overall Junior, 26th of 806 participants nationally. His flagship work is PenTrix-VulnLab (a deliberately vulnerable learning app), PowerShell Academy (a free learning platform, live), BugHunt Arsenal (a free browser-based security research platform, live), APK Security Pipeline, Security-Books, Ai-Terminal-X, and AgentArsenal, plus the VulnNotes course project, which has no public repo. The existing v2 site is a React site with 17 routes, six project detail pages, an interactive challenge demo on the home page, and a proof page built on his own screenshots. The v3 rebuild rejects the old Arsenal design system entirely and rejects hacker cliches (no green terminal text, no neon, no Matrix rain, no hexagons, no glowing borders, no cyberpunk templates). The brief asks for a cinematic hero, video background, cursor-reactive interaction, and art-directed footage. Every principle below is judged against that person, that evidence, and those constraints.

---

## 1. Awwwards, https://www.awwwards.com/

### What was actually found

The homepage fetch (crawled 8 November 2026) showed: Site of the Day for 8 November 2026, Extrafazant, score 7.24 of 10; a Latest nominees list (including Yehor Herasymenko '26, No Mercy Michel, emblematica, Justin Jefferson, ViV, Agrumea Farm, Grail, DeepBook, Grids); Academy and Collections sections; a creators directory; a blog (including a post on trendy gradients); and a Market section that sells portfolio templates. The homepage itself is a showcase index, not a design essay, so it demonstrates curation and ranking more than it explains any one site.

The substance on what wins came from Hon Tran's guide, read in full. Tran is an Awwwards jury member with 19 international awards and a two-time Independent of the Year nominee, writing about the scoring system from inside the panel. His account of the scoring:

- Design, 40 percent: visual craft, typography, layout, color, composition, art direction.
- Usability, 30 percent: a first-time visitor can navigate, load fast, and not get lost.
- Creativity, 20 percent: originality of concept and execution.
- Content, 10 percent: quality and relevance of the actual work shown.
- A minimum of 18 jurors score each approved submission, the three scores furthest from the average are dropped, voting runs about five days, a score of 6.5 or higher earns an Honorable Mention, and the top score takes Site of the Day.

### Principles it demonstrates

- **Design plus usability is 70 percent of the score.** Tran's non-obvious lesson, in his words, is that newcomers over-index on creativity (a wild WebGL gimmick) and lose on fundamentals. A groundbreaking site that takes five seconds to load or confuses navigation scores lower than a clean, fast, beautifully typeset site with modest ambition.
- **One sentence concept before code.** Every winner he worked on started with one sentence, not a Figma file. His examples: a portfolio that feels like flipping through a printed monograph, an events agency site where every section is a stage. He asks three questions: what is the one idea, what is the signature moment, and what can be cut.
- **One signature moment, protected by restraint.** Every memorable site has one interaction people screenshot: the hero reveal, a displacement transition, a scroll-driven sequence. The rest of the site is designed to protect that moment. Restraint reads as confidence.
- **Directed motion, not decoration.** The patterns that land with jurors are scroll as narrative (pin a section and scrub a sequence so the user controls the pace), considered transitions (a WebGL image displacement on hover or between projects), and micro-interactions (magnetic buttons, custom cursors, staggered text reveals). Motion has to serve navigation, not fight it.
- **Performance is a judging criterion, not a chore.** A WebGL hero that drops to 20 frames per second on a mid-range laptop reads as broken, no matter how beautiful the still frame. His rules: animate transform and opacity only, lazy-init WebGL only when in view and pause it off-screen, cap pixel ratio at 2, ship less JavaScript, aim for largest contentful paint under 2.5 seconds. A site that holds 60 frames per second on a low cost phone out-scores a prettier one that stutters.
- **Content is only 10 percent but decisive.** Three exceptional case studies beat twelve thumbnails. For each project: the problem, the role, the craft, and the outcome, in real copy, because jurors read it.
- **Accessibility is part of the score.** Gate decorative motion behind prefers-reduced-motion, keep focus states, keep contrast. Tran lists a missing accessibility floor among the mistakes that quietly kill a score.
- **Common killers:** animation without hierarchy (everything moves, so nothing matters), ignoring mobile (a desktop-only masterpiece caps at an Honorable Mention), slow loads disguised as intros (a six-second loader is a usability penalty, not art direction), derivative concepts (borrowing the year's trend, such as the same horizontal-scroll gallery everyone shipped, tanks the creativity score), and no accessibility floor.
- **No WebGL is required.** Tran states plainly that plenty of Sites of the Day are pure CSS and GSAP with exceptional typography and motion, and a flawless 2D site beats a janky 3D one every time.

### What this means for this rebuild

Awwwards is a useful standard for craft and a dangerous standard for imitation. The scoring weights argue for spending the budget on typography, layout, speed, and navigation first, and on one signature interaction second. They also argue against chasing the year's winning gimmick, because derivative concepts are explicitly penalised.

---

## 2. Hoverstate, https://www.hoverstate.design/best-portfolio-websites

### What was actually found

The page, by Shahriyar Ishmam, last updated October 2026, lists 14 portfolios and tools. Its opening line is the thesis of the whole page: the best portfolio sites do not follow a template; some are interactive experiments, some are just text on a white background; what they share is clarity about who the person is and what they can do. The page groups the examples into interactive and creative developer portfolios, minimal and writing-focused portfolios, and case study and process portfolios, then covers tools (Framer, Readymag, Cargo, Contra) and a FAQ section.

Examples and approaches recorded on the page:

- **The portfolio as an interactive experience.** The 3D driving game portfolio (Bruno Simon, named as such in supporting coverage read in this pass) lets the visitor drive a toy car through a world that contains his work. Hoverstate calls it one of the most influential portfolio sites ever made, not because everyone should copy it, but because it proved a portfolio can be the product. Approach stated on the page: the site is the demonstration of skill.
- **Let the interactions demonstrate the skill.** A minimal personal site from a respected design engineer uses clean typography, subtle interactions, and a focus on the work over personality. Every detail is the portfolio.
- **Interactions as proof of work, open-source contributions as credibility.** A portfolio focused on UI interactions and animations, whose projects section includes open-source libraries with genuine GitHub traction.
- **Text-first, writing over hero sections, speed as a signal.** One of the cleanest developer portfolios on the internet: text-first, fast, focused on writing and projects rather than a hero section. Developer portfolios do not need design flair, they need clarity.
- **Annual rebuild as process documentation.** A designer rebuilds her portfolio from scratch every year with a completely different concept, often using CSS art, and each version is documented as a case study. The commitment to reinvention is itself a signal of creativity and craft.
- **Teaching as portfolio.** A site that is a blog with interactive explanations embedded in every post. If you can read the posts and understand them, you understand the value he provides. The blog is the product.
- **Anti-trend: no JavaScript, no tracker, writing as portfolio, speed as philosophy.** An intentionally simple portfolio that prioritises writing and making over visual flair, presented as a quiet counterargument to over-designed portfolios.
- **Context-constraint-outcome case study format.** A case study-heavy portfolio from a senior design leader. Projects are presented with context, constraints, and outcomes, not just screenshots. The writing is direct and shows strategic thinking.
- **Process-forward case studies.** A product designer portfolio with detailed process documentation: problem, research, iterations, shipped outcome, clear non-jargon writing, collaboration evidence.
- **Personal brand as portfolio.** A highly illustrative site with custom cursor interactions, where the aesthetic is immediately distinctive and self-consistent.

The FAQ section adds practical rules that match the other sources: a strong designer portfolio needs 3 to 5 case studies with problem context and outcome, not just screenshots; hiring teams skim portfolios in under two minutes, so the headline of each case study must instantly state what was done and for whom; for developers, five strong projects with real users beat twenty side projects no one uses; a blog with even a few technical posts adds significant credibility because it demonstrates the ability to explain thinking, not just write code; the best case studies take 3 to 5 minutes to read, cover the problem, the role, key decisions and why, and the outcome, in about 600 to 900 words with at least three supporting visuals (a problem frame, a process or iteration shot, and the final delivered design); a common mistake is too much backstory and too little decision rationale; mobile must be tested at 375px and 430px width before publishing, because a significant share of recruiters first see a portfolio on a phone.

### Principles it demonstrates

- **Clarity of identity beats novelty of format.** Text on a white background and a 3D driving game both win when the visitor leaves knowing who the person is and what they can do.
- **The site itself is evidence.** The strongest developer portfolios do not describe skill, they perform it in the interaction design of the site.
- **Teaching is the highest-leverage proof for a technical person.** Explaining a hard thing clearly proves depth and communication at once.
- **Curation beats volume.** Three to five deep case studies beat a long grid of thumbnails. Five strong projects beat twenty side projects.
- **The case study headline is a decision tool.** A recruiter skims in under two minutes, so the outcome must be legible in the first seconds.

### What this means for this rebuild

Hoverstate is the most directly useful of the six sources for this portfolio, because it covers developer portfolios specifically and it separates the formats honestly. Its lesson is that this rebuild does not need to choose between spectacular and clear: the spectacular part should be the site performing his skill (an interactive security challenge, a live tool), and the clear part should be short, outcome-led case studies and teaching-style explanations.

---

## 3. Really Good Designs, https://reallygooddesigns.com/interactive-portfolio-examples/

### What was actually found

The page, published 23 February 2026 and updated 20 March 2026, lists 18 interactive portfolios. It defines an interactive portfolio as one that responds to the user by moving, shifting, or reacting as the visitor scrolls, hovers, or clicks, and it names the techniques: scroll-triggered animations, parallax, cursor interactions, 3D objects, micro-interactions, Lottie and SVG animations, WebGL and 3D scenes, and motion-driven layouts. Its closing advice is to keep animations smooth and gentle, make movement support the content, avoid effects that slow down loading, focus on playful interactions rather than distractions, and think about mobile users, because not all effects translate well.

The 18 examples, and what each demonstrates:

1. **Wildy Riftian.** A digital keychain that reacts to the cursor; each pendant is clickable and leads to a section. The Work section shows archive folders that react to hovering, with images popping out as the cursor moves over them. Principle: navigation itself can be the interaction.
2. **Andre Souza.** A hero that feels like a creative playground: draggable gramophone platters, photo snapshots, notes, a scratch-off card that uncovers hidden details, and a central card styled like a social media post. Principle: a playful hero that invites touch.
3. **Lydia Amaruch.** A black hero with draggable photos, graphics, and colorful elements orbiting oversized typography reading UI/UX Brand Designer. Principle: draggable objects around bold type.
4. **Robby Leonardi.** Portfolio browsing turned into a retro computer game, a nostalgic adventure that tells the story of his skills. Principle: storytelling as a game, with the resume inside the journey.
5. **Yifei Luo.** A digital playground where every hover and movement reacts in real time. The page calls it experimental and kind of weird, and notes that the interactivity makes visitors stay and wonder what else he can create. Principle: the playground as a demonstration of coding skill.
6. **Chris Pokrzywa.** An immersive 3D virtual workspace to explore: a desk with a computer, laptop, tablet, and coffee cup, each clickable to discover a part of his work. Principle: a world the visitor explores, where objects are navigation.
7. **Pierre Nel.** Floating 3D shapes that react to cursor movement, with a sleek palette and smooth scrolling. Principle: cursor-reactive 3D as atmosphere.
8. **Stephane Willems.** A 3D character in the dark that never loses the cursor from sight, with the cursor acting as a light illuminating the character's face. Principle: the cursor as a light, a single focused interaction rather than many.
9. **Valeriia Shchebetovska.** Elegant micro-interactions and smooth scrollytelling: a soft cursor trail, refined hover effects, gentle text reveals, calm and immersive scrolling. Principle: restraint can be the luxury; subtle and deliberate beats loud.
10. **Max Milkin.** 3D floating objects that interact with the cursor, a tracing effect that follows the mouse, scroll-triggered animations and micro-interactions. Principle: a cursor trace as a signature.
11. **Jesse Ermens.** 3D scroll animations and text effects, with clear project layouts and smooth navigation keeping the experience dynamic while showcasing the work. Principle: scroll animation plus clear project structure.
12. **Seungyun Shin.** A bold 3D animated shape that moves with the cursor, combined with a clean modern layout and subtle interactions. Principle: one strong 3D element, not a scene full of them.
13. **Jesse Martinez.** 3D cubes in the hero that can be grabbed and rotated, sleek black design, smooth scrolling, sections appearing as the visitor scrolls. Principle: a grabbable object in the hero, then calm content.
14. **Joe Garner.** Scroll-driven animation that feels like storytelling, revealing each chapter step by step. Principle: scroll as chapters.
15. **Aseem Gautam.** A playable hero: floating shapes react to the cursor, elements shift on hover, smooth motion and clean typography. Principle: alive without being overwhelming.
16. **Dorian Lods.** A WebGL refraction hover effect, glassy and futuristic, giving the work depth and movement. Principle: one simple effect, done well, can carry the whole impression.
17. **Marie Antoine.** Brutalist structure with soft gradients and crisp micro-interactions, an oversize geometric cursor trace on a soft pastel background. Principle: a bold cursor can be the brand mark.
18. **Maxime Guillon.** An immersive virtual island home where every object represents a skill; scrolling zooms the camera forward into the house, and rooms hold playful interactive details (coffee mugs labeled React, shampoo bottles for CSS and Python). Principle: skills as a world to walk through.

### Principles it demonstrates

- **One interaction can carry a site.** The strongest examples each have one clear interactive idea (a keychain, a desk, a character watching the cursor, a refraction effect), not ten.
- **The cursor is a design material.** Trails, light, magnetism, refraction, and grabbable objects all treat the cursor as an instrument, not as decoration.
- **Play is a proof of skill for developers.** A playground hero demonstrates coding ability in a way a bullet list cannot.
- **Restraint is a visible choice.** The elegant examples (Valeriia Shchebetovska, Seungyun Shin, Dorian Lods) are remembered for calm and precision, not for volume of effects.
- **Mobile is the weak point of every playful portfolio.** The page's own advice flags it: not all effects translate to touch, so the site must still work when the cursor does not exist.

### What this means for this rebuild

This page is a catalog of interaction ideas, and its value is in the pattern across the 18, not in any single example. The pattern is: one signature interaction, cursor as instrument, scroll as story, and a calm structure underneath the play. The risk it also shows is that a playground can swallow the evidence; the examples that work keep project content clear and reachable underneath the interaction.

---

## 4. Siteinspire, https://www.siteinspire.com/

### What was actually found

The text fetch of the homepage returned almost nothing: the page title (Best Website Design Inspiration | Siteinspire), a subscription prompt for a weekly edit, and a note that it is delivered every week and can be unsubscribed from at any time. The gallery content is rendered by JavaScript and did not appear in the text fetch. No individual portfolio on Siteinspire was read in this pass, and none is described here.

### Principles it demonstrates (only what the fetch supports)

- **Curation is the product.** Siteinspire's visible proposition is a human-edited weekly selection of websites, not an open directory. The value is editorial judgment about what is worth looking at.
- **Discovery needs filters, not just a feed.** The site's public description, as returned by search, presents it as a curated gallery of website design inspiration. A gallery that cannot be filtered by type is a mood board, not a research tool.

### What this means for this rebuild

Siteinspire contributed little to this pass beyond a caution: inspiration galleries are useful for seeing what exists, and weak as a source of principles, because they show finished surfaces without explaining the decisions underneath. The rebuild should not treat a gallery screenshot as a specification. Where Siteinspire is useful later, it is for browsing specific portfolio entries with a question in mind (for example, how a technical portfolio handles its project index), and any claim from that browsing must be recorded from the actual page visited.

---

## 5. Lapa Ninja, https://www.lapa.ninja/

### What was actually found

The text fetch of the homepage returned: the title (Landing Page Design Examples: 7,300+ Best Landing Pages); the statement that Lapa Ninja offers over 7,300 landing page designs since 2015, along with 15,000+ full-page website screenshots, with full website screenshots and video recordings, unlimited access to website categories, past versions, filtering, and search results; sections for latest web design inspiration, best OG images for social media, responsive website templates, learning design from the best, and free design books; and a weekly inspiration newsletter. No individual landing page or portfolio on Lapa Ninja was read in this pass, and none is described here.

### Principles it demonstrates (only what the fetch supports)

- **Full-page screenshots and recordings beat cropped thumbnails.** Lapa Ninja's distinguishing feature is showing the whole page, and video recordings of it, so a researcher can see how a design behaves down the page rather than judging a hero crop.
- **Categories and filters are what make a large gallery usable.** With thousands of examples, the value is in narrowing to a type (landing pages, portfolios) rather than scrolling a feed.
- **Landing pages are a different species from portfolios.** A landing page is built to convert a visitor to one action. A portfolio is built to prove a person over several pieces of evidence. The archive is still useful for studying heroes, OG images, and responsive behaviour, but its conversion patterns (countdown, pricing, testimonial blocks) do not transfer to a portfolio.

### What this means for this rebuild

Lapa Ninja is a reference library for page-level craft (hero composition, full-page rhythm, OG images, responsive templates), not a source of portfolio strategy. Its most transferable lesson for this rebuild is procedural: judge any reference by its full page and its behaviour on scroll and on mobile, not by its hero screenshot.

---

## 6. Behance, https://www.behance.net/

### What was actually found

Behance's project pages are visual case studies, and the platform's own guidance on how to build one was read in full: Nick Longo's article Building the Perfect Case Study (https://www.behance.net/resources/articles/building-the-perfect-case-study). Longo is the owner of Longo Brand, co-host of Adobe Office Hours, a professional creative for over 25 years, and a design teacher at California State University, Northridge. His argument is that the way work is shown is just as important as the work itself, and that a case study is a story that shows how the author thinks, not just what was made.

His anatomy of a great case study:

1. **Project Overview.** What was the project, who was it for, what were the goals. This is the opening scene.
2. **The Challenge.** What problem was being solved, and what limitations or requirements applied. This sets the stakes.
3. **The Process.** Sketches, moodboards, research, iterations, and thinking. Explain why decisions were made and how ideas evolved.
4. **The Solution.** The final work, shown with mockups or product shots, with an explanation of why the final solution works, not just images dropped on the page.
5. **Reflection.** What was learned, and what would be done differently next time. A little honesty shows maturity.

He adds that a case study does not need to be a novel, and that it should read like explaining the process to a friend or classmate: clean and honest. On Behance specifically, he points to image plus text blocks (pairing visuals with commentary step by step), rich media support (video, GIFs, prototypes), custom layouts and covers (first impressions matter), tool tags (showing what tools were used, and helping discovery), and stats and engagement (seeing who views and appreciates the work). His practical tip is to write the case study in a document first, then lay it out like a pitch deck, playing with pacing.

Supporting search findings agree with Longo and extend him to technical work: hiring managers care more about storytelling around projects than about repo lists, recruiters increasingly expect visual case studies that explain context, constraints, and impact, and the best technical case studies treat each project as a narrative layer on top of GitHub and LinkedIn, with a bold cover, a short problem statement, before and after screenshots, a tech stack and implementation section, architecture diagrams, screenshots of key flows, and links out to GitHub and a live demo. One caution from that supporting search: the concrete tech-portfolio profiles in the article found (https://examples-of.com/technology-software/tech-resumes-and-portfolios/online-portfolio-platforms-for-developers/technology-software-tech-resumes-and-portfolios-online-portfolio-platforms-for-developers-using-behance-for-tech-portfolios/) are explicitly described by their author as composite profiles based on patterns, with fictional names, so they are evidence about structure, not about any real person, and no name from them is used here.

### Principles it demonstrates

- **Show why, not just what.** The question a case study answers is why each decision was made.
- **Process is the evidence.** Sketches, iterations, dead ends, and revisions prove thinking in a way a finished screenshot cannot.
- **Honesty is a credential.** A reflection section that names what would be done differently reads as maturity, not weakness.
- **Pair every visual with commentary.** An image without a caption is a gallery; an image with a sentence of reasoning is a case study.
- **Tool tags and links are discovery infrastructure.** Naming the real tools and linking the real repo and live demo lets a technical reader verify the work.

### What this means for this rebuild

Behance is not the right home for this portfolio (see the closest and not closest section below), but its case study discipline is directly transferable to the six project detail pages this rebuild already plans. Longo's five-part anatomy maps cleanly onto a security project: overview, challenge (the vulnerability class or learning gap), process (method, decisions, trade-offs), solution (the working tool or lab, shown running), reflection (what would change next time). The reflection step is especially useful for a student portfolio, because it turns unfinished or learning work into evidence of judgment rather than a gap to hide.

---

## 7. Supporting reads (case study structure, editorial layout)

Two supporting searches were used to cross-check the case study and editorial points, and are cited as search findings rather than full reads.

**Case study structure.** The guides found agree on one structure across design, engineering, data, and operations: a one-line summary (what it was and what happened, before anything else); context and problem in two or three sentences; an explicit statement of role, especially on team projects; the options considered and why some were rejected (described in one guide as the section most people skip, and the one that most demonstrates judgment); what was done, with enough detail to be credible; outcome with numbers; and what would be done differently. They agree a case study should be scannable in ninety seconds and readable in five minutes, use headings so a skimmer can find the outcome and the decisions, lead with the outcome rather than a chronological build-up (because a hiring manager decides in about thirty seconds), and keep to two or three case studies rather than eight, with the strongest first. One guide puts a single case study at 400 to 800 words plus images; Hoverstate's FAQ puts it at 600 to 900 words with at least three supporting visuals. The range, not the exact number, is the point: short enough to skim, long enough to show judgment.

**Editorial layout.** The editorial portfolio guidance found describes building the page as a sequence of distinct chapters, letting the work establish desire before explaining the studio, opening with one strong image and a concise positioning line, treating each case study as a new magazine cover, using oversized typography as the handoff from proof to contact, and ending with a high-contrast contact chapter that feels final rather than appended. Its visual system advice: a near-black frame with warm white and one muted color field per project, a grotesk display face with a neutral text companion, a 12-column grid with 40 to 64px desktop edge margins, full-bleed chapters kept rare and purposeful, and the strongest proof changing scale while other sections stay quiet. Its motion advice: 160 to 220ms for control feedback, 500 to 760ms for section entrances, stagger of 45 to 70ms, parallax below 5 percent, a stable hero, no scroll hijacking, and pausing offscreen media. A separate account of a portfolio build (Brandon Yasin, via Codrops) adds a useful formulation: restraint from print, motion from the screen, with the layout quiet and editorial and the motion doing what paper cannot, including a two-phase curtain reveal preloader and navigation rethought as magazine covers the visitor moves between without hard page loads.

---

## 8. Ranked design principles for this rebuild

Ranked by leverage for this specific person and this specific evidence, strongest first. Each principle names where it shows up in the rebuild.

### 1. One idea, one sentence, before anything is built

The portfolio needs a single organising idea that can be said in one sentence, and every section, transition, and line of copy must serve it. Awwwards jury guidance and the editorial chapter guidance agree: winners start from a sentence, not a layout. For this rebuild, the idea must come from his actual work, not from a genre. The strongest candidate shape, to be confirmed in creative direction, is a portfolio that behaves like a lab bench: the visitor does not read about security work, they try a piece of it, then see the evidence behind it. The idea is not a slogan on the hero; it is the reason the hero is interactive, the case studies are evidence-led, and the proof page exists. Where it shows up: the hero concept, the choice of the signature interaction, and the cut list (anything that does not serve the idea goes).

### 2. The portfolio is the proof, not the brochure

The site itself must demonstrate the skill it claims. This is the single most repeated lesson across Hoverstate and Really Good Designs: the portfolio can be the product, interactions demonstrate skill, and a playground hero proves coding ability. For this person, the proof is already built into v2 and must be kept and deepened, not replaced with a prettier static page: the interactive challenge demo on the home page (built around a real forced-browsing challenge, where the panel checks session only and never role), the live tools (PowerShell Academy and BugHunt Arsenal, both live sites), and the working code in public repos. Where it shows up: hero (a real, small, safe interaction, such as the challenge demo or a live tool excerpt, not a decorative animation), project case studies (embedded live demos and runnable excerpts alongside screenshots), and the expertise section (each skill paired with the artifact that proves it, as v2 already does with evidence notes, never with percentages).

### 3. Outcome first, then problem, role, decisions, and outcome with evidence

Every project case study leads with the outcome on the first screen, then states the problem, the author's exact role, the options considered and rejected, what was done, and the outcome with verified evidence. This is the unanimous structure from Behance, Hoverstate, and the case study guides: hiring managers skim in under two minutes and often decide in about thirty seconds, so the outcome cannot sit two scrolls down. The options-considered section is the one that most demonstrates judgment, and it is the section most portfolios skip. Where it shows up: project case studies (PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, AgentArsenal, and the VulnNotes course project, each in the same five-part shape: overview, challenge, process and decisions, solution, reflection), with a short summary line at the top, a meta line stating role and dates, and evidence attached to every claim (live link, repo link, screenshot, diagram, or sample output). Numbers are used only where verified in the profile audit, and stale counts are fetched live or omitted.

### 4. Editorial typography leads, decoration follows

A typography-led, editorial layout: a clear grid, generous whitespace, one display face with a neutral text companion, oversized type used sparingly for the hero and for section handoffs, and full-bleed moments kept rare and purposeful. The editorial guidance and the Awwwards scoring agree that type and spacing carry 40 percent of the judgment, and that the static frames must look intentional with the animation removed. Where it shows up: hero (one headline, broken into two or three lines by hand, one action, nothing else above the fold), project index (title, role, year, and outcome in a consistent grid, with metadata aligned beneath its image), expertise (type-led groupings with evidence notes, not icon grids), and timeline (a vertical editorial spine with dates and roles, not a decorative graphic).

### 5. Directed motion: scroll as narrative, one signature moment

Motion has a job: it reveals structure, guides the eye, or makes a piece of work tangible. The patterns that score are scroll as narrative (pin a section and scrub a sequence so the user controls the pace), considered transitions between projects, and micro-interactions that reward attention. Everything else is cut. The rebuild gets one signature moment (the hero interaction or a scroll-driven sequence through one project), and the rest of the site protects it by staying calm. Where it shows up: hero (the reveal and the first interaction), project case studies (a scroll-driven sequence that walks through the method step by step, in the style of Joe Garner's chapter-by-chapter scroll), and page transitions (a short, consistent transition that carries the visitor between pages, in the spirit of the magazine-cover navigation described in the Brandon Yasin build, without copying its mechanism).

### 6. A cinematic hero with art-directed motion, built for performance

The brief asks for a cinematic hero with a video background. The video guidance found by search and the Awwwards performance rules agree on the constraints: the video must be short (a 10 to 15 second loop), silent, steady (little to no camera movement), simple enough to sit behind text, and compressed hard, with a static image fallback for slow connections, data-saving modes, and reduced-motion preferences. The footage must be art-directed to the site's palette and idea, not stock, and the headline must stay readable against every frame (through a scrim, a framed panel, or knockout type, not by hoping the footage stays dark). Where it shows up: hero only, with the video as atmosphere behind one headline and one action, and with the interactive challenge demo as the foreground proof rather than a second competing spectacle. If the video cannot be made light and readable, the fallback is a still frame with the same composition, not a heavier video.

### 7. The cursor is a quiet instrument, not a toy

Cursor systems win when they do one thing well: a light that reveals, a magnetic pull on the primary action, a refraction or trace on hover, a preview that follows the cursor over a project title. They fail when they replace the cursor everywhere, lag, or hide information on touch devices. The best examples in the research each use one cursor idea, and the elegant ones use the subtlest version. Where it shows up: navigation and primary actions (magnetic or gently scaling buttons), the project index (a hover preview that follows the cursor and shows the project, with the same information available without hover), and the hero (a restrained trace or light effect that never competes with the headline). On touch devices the cursor layer simply does not exist, and nothing is lost.

### 8. Performance is part of the design, not a task at the end

Design plus usability is 70 percent of the Awwwards score, and performance is judged on real devices. The rules from the jury guide are concrete and transferable: animate transform and opacity only, never width, top, or box-shadow on scroll; lazy-init heavy scenes only when in view and pause them off-screen; cap pixel ratio at 2; dynamic-import heavy modules; keep largest contentful paint under 2.5 seconds; and keep the page fast on a low cost phone. The v2 audit gives this principle a concrete starting point for this rebuild: the v2 bundle is a single 440.88 KB JavaScript bundle with no code splitting, the public folder is 6.7 MB with unoptimised PNG screenshots, and the hero image is lazy-loaded above the fold. Where it shows up: everywhere, but measurably in the hero (eager hero media, compressed video, static fallback), the project pages (route-level code splitting, diagrams loaded only when reached), and the proof page (compressed screenshots with explicit dimensions, no 1.5 MB unoptimised images).

### 9. Navigation that never loses the visitor

A first-time visitor must always know where they are, where the work is, and how to get in touch. That means a persistent, compact navigation with the identity anchored, clear active states, a project index that is reachable in one tap from anywhere, and page transitions that feel like continuity rather than a reload. The editorial guidance places compact navigation at the outer edges and keeps the identity strongly anchored; the Awwwards usability criterion penalises any site where a visitor gets lost. Where it shows up: navigation (fixed, minimal, with Work, Experience, Proof, About, and Contact always visible, and a full-screen mobile menu with focus management, which v2 lacked), project case studies (previous and next project links at the foot of every case study, so the work reads as a sequence), and the footer (navigation, location, social links, and the contact ask resolved without competing with each other).

### 10. Evidence over lists, everywhere

Technical work is presented as evidence rather than as a list of repo names. A repo name, a tool name, or a skill word proves nothing on its own. What proves it is the artifact beside it: a live demo, a screenshot of the tool running, a sample report, an architecture diagram, a scoreboard screenshot, or a short excerpt of the method. This is the Behance lesson (pair every visual with commentary), the Hoverstate lesson (five strong projects beat twenty side projects), and the v2 lesson (the proof page with his own screenshots is the most persuasive page on the site). Where it shows up: project case studies (each claim carries its artifact), expertise (each skill carries its evidence note, as v2 already does, and no skill appears without one), timeline (each role carries its verified outcome, such as the vulnerabilities delivered and fixed at Damno Solutions, stated as the sanitized CV states them), and proof (the competition screenshots and recognition artifacts, shown with captions that state what is shown and what happened, and with point totals used only beside the screenshot, never as standalone claims).

### 11. Mobile is a first-class citizen, not a responsive afterthought

A significant share of recruiters first see a portfolio on a phone, and the jury guidance caps a desktop-only masterpiece at an Honorable Mention. Every playful effect in this research has the same weak point: touch. The rules are concrete: test every page at 375px and 430px width before publishing, keep the hero legible and the primary action tappable at phone width, make the cursor layer degrade to nothing on touch, replace drag and hover interactions with tap equivalents or remove them on small screens, and keep video short and the static fallback ready. Where it shows up: hero (headline, video fallback, and action all work at 375px), project case studies (diagrams and tables scroll or stack cleanly, never overflow), navigation (the mobile menu is a real menu with focus management, not a scaled-down desktop bar), and proof (screenshots remain readable without pinching).

### 12. An accessibility floor under everything

Reduced-motion support, visible focus states, sufficient contrast, real buttons and links (not clickable divs), alt text on every image, and a site that is fully usable with the motion turned off. The jury guide lists a missing accessibility floor as a score killer, the v2 audit lists concrete gaps to fix (lightbox focus not returned to its thumbnail, tab browsers without proper tab semantics, mobile menu without focus management), and the editorial guidance requires that content never stay hidden if an animation fails. Where it shows up: hero (decorative motion gated behind prefers-reduced-motion, with a safety net that reveals content), project case studies (tabs implemented as real tabs or replaced with a simpler disclosure pattern, diagrams with text equivalents), navigation (skip link, focus visible, focus moved into the mobile menu and returned on close), and the whole site (contrast checked against the new palette, not assumed from the old one).

---

## 9. What to avoid, with reasons

### Hacker cliches (banned by the brief, and the research agrees)

Green terminal text, neon, Matrix rain, hexagons, glowing borders, skull imagery, and cyberpunk templates. Reason: they signal a genre, not a person. They are the most copied visual language in security portfolios, so they make this portfolio look like every other security portfolio, and they contradict the premium, editorial direction. The v2 audit records that the v1 site already carried a skull hero, gradient text, and a typewriter headline, and all of them were dropped for the same reason. A security portfolio that looks like a film set invites the visitor to doubt the engineering underneath.

### The typed or typewriter hero

A headline that types itself out letter by letter. Reason: it was on the v1 site and was dropped in v2, it delays the message by seconds on every visit, it reads as a template default, and it adds nothing once the visitor has seen it once. A static headline, broken into lines by hand, is faster and more confident.

### Skill percentage bars and skill counts

Bars showing a skill at 87 percent, or a count such as a large number of skills. Reason: no source supports the numbers (the profile audit records the live site's percentages as invented and its skill count as unverified), a percentage of a skill is meaningless, and a recruiter reads it as filler. The v2 site already replaced percentages with one-line evidence notes per skill; the rebuild keeps that and goes further by attaching an artifact to each skill.

### The card grid of repo names

A uniform grid of twenty or more project cards, each with a name, a one-line description, and a stack of tags. Reason: it presents work as inventory, it buries the flagship projects among coursework and small tools (the profile audit notes the GitHub README already makes this mistake by featuring small tools and omitting the flagship work), and no card in the grid answers the question a hiring manager asks, which is what the author decided and what happened. The rebuild shows six deep case studies and keeps the rest as a compact, clearly secondary archive.

### Testimonial carousels and invented social proof

Quotes from unnamed or unverifiable people, logos of companies never worked for, and counts of happy clients. Reason: no testimonial, client quote, or employer endorsement was found in any source for this person, and the profile audit explicitly forbids inventing one. The BugHunt site's own testimonial section uses unverified handles and must never be reused. Real proof (competition screenshots, recognition artifacts, live tools) is stronger than borrowed praise, and fake praise destroys trust the moment it is checked.

### Long loaders and intro sequences

A preloader that runs for several seconds, a curtain that must finish before content appears, or any intro that blocks the first paint. Reason: the jury guide calls a six-second loader a usability penalty, not art direction, and a recruiter who waits will leave. A short reveal (under a second, tied to the hero) is fine; a gate is not. The Brandon Yasin preloader works because it is two quick phases that lead straight into the work; anything longer is a risk.

### Everything moving at once

Parallax on every section, reveals on every element, a WebGL scene plus a video plus a cursor trail plus floating shapes. Reason: animation without hierarchy means nothing matters, and the jury guide lists it as a score killer. It also hurts performance and accessibility, and it makes the site feel anxious rather than confident. One signature moment, calm structure everywhere else.

### The copied trend of the year

Horizontal-scroll galleries, bento grids, oversized marquees, or any layout that appears on every award list this season. Reason: derivative concepts are explicitly penalised for creativity, and a trend copied wholesale dates the portfolio to the year it was built. The research shows the trend itself is not the problem; the problem is copying it without a reason rooted in this person's work. A bento grid is fine if the content genuinely needs a bento; it is a template tell if it is there because award sites have one.

### Dark-only design with low contrast

A site that only works in a dark theme, with muted grey text on near-black and neon accents carrying the hierarchy. Reason: it fails contrast checks, it tires the eye over a long case study, and it is the visual signature of the cyberpunk template the brief rejects. The rebuild needs a light default that reads like a printed document and a dark theme that is a deliberate second design, not an inversion.

### Generic template tells

A stock hero photo, a generic abstract 3D shape with no relationship to the work, lorem-style filler copy, a "services" section listing generic offerings, a pricing or process section copied from an agency template, and social icons with no real profiles behind them. Reason: each one tells the visitor the site was assembled rather than designed. For this portfolio specifically, the template tells to watch for are: a hero that could belong to any developer, a projects page that is only a GitHub mirror, and an about page that lists adjectives instead of evidence.

### Hiding the evidence behind interaction

A 3D world, a game, or a puzzle that must be solved before the visitor can see any project. Reason: the most spectacular examples in this research (the driving game, the virtual desk, the island home) are memorable precisely because the interaction is the point, but they all risk the same failure: a recruiter on a phone, in two minutes, cannot find the work. The rebuild can borrow their spirit (the site performs the skill) but must never borrow their cost (the work hidden behind play). Every interactive moment must have a plain, fast path to the same content beside it.

---

## 10. Closest useful references, and which are not

### Closest

**1. Creative developer portfolios where the site is the product.** Examples in the research: Bruno Simon's driving game portfolio, and the minimal design-engineer sites Hoverstate describes. Why they are the closest: the person is a developer whose skill is the product, and the portfolio proves it by being well built. What to take: the idea that the site performs the skill, the restraint of the minimal examples, and the single signature interaction. What not to take: a game or world that hides the work, and a concept that needs minutes of play before it makes sense. For this rebuild, the equivalent of the driving game is the interactive challenge demo, which is already real, already his, and already about security.

**2. Case study and process portfolios (product and senior design leaders).** Examples in the research: the senior design leader portfolio built on context, constraints, and outcomes, and the process-forward product designer portfolio with research, iterations, and shipped outcomes. Why they are close: this person's strongest hiring argument is judgment (choosing a method, building a tool, fixing a real vulnerability), and judgment only shows in a case study. What to take: the context, constraint, outcome format; the explicit role statement on team work (essential for VulnNotes, where he leads the build and a teammate owns the API); the options-considered section; and the 600 to 900 word, three-visual shape. What not to take: the visual-design framing (their evidence is screens and flows; his is tools running, reports, diagrams, and live demos).

**3. Teaching-led technical portfolios.** Examples in the research: Josh Comeau's interactive blog posts, and the writing-first developer portfolios Hoverstate describes. Why they are close: this person already teaches (PowerShell Academy, The PenTrix, 30 Days of Practical Pentesting), and teaching proves depth and communication at once. What to take: short, interactive explanations embedded in the portfolio (a concept explained with a live example, not a paragraph about the concept), and the text-first clarity that makes a technical portfolio fast and credible. What not to take: turning the portfolio into a blog; the teaching lives inside the case studies and the expertise section, and the portfolio stays a portfolio.

**4. Minimal, text-first developer portfolios.** Examples in the research: the clean, fast, text-first portfolios Hoverstate groups under minimal and writing-focused, including the intentionally simple no-JavaScript portfolio. Why they are close: recruiters skim, and clarity is the deciding factor for a junior hire. What to take: speed as a signal, writing over hero sections where the writing is stronger, and the discipline of cutting everything that does not prove something. What not to take: plainness as an identity; this rebuild wants a premium, cinematic feel, so minimalism is the structure underneath the cinema, not the whole design.

**5. Editorial, chapter-based portfolios.** Examples in the research: the editorial portfolio chapter system (dark frame, warm white, one muted color field per project, oversized typography as handoff, high-contrast contact finale) and the Brandon Yasin print-meets-motion build. Why they are close: they solve the exact problem this rebuild has, which is making a long, evidence-heavy portfolio feel like a designed object rather than a database dump. What to take: chapters, a strong grid, rare full-bleed moments, oversized type at handoffs, and a contact chapter that feels final. What not to take: the fashion and photography imagery that usually fills those chapters; here the full-bleed moments are his own screenshots, diagrams, and tool interfaces.

### Not close, and why

**1. Visual designer and illustrator portfolios.** Why not: their evidence is imagery, and their portfolios are galleries of finished visuals. His evidence is behaviour (tools running, challenges solved, reports produced), and a gallery of screenshots without method or outcome would misrepresent the work. Useful only for layout ideas, never as a structural model.

**2. Agency showreels and studio sites.** Why not: they sell a team, a process, and a client list. This portfolio sells one person, and team work must be credited precisely (VulnNotes is shared with a named teammate; the Damno Solutions role was inside a company). An agency structure would blur who did what, which is exactly what a hiring manager checks first.

**3. Full game or 3D world portfolios as the whole site.** Why not: they are the most memorable format in this research and the riskiest. They hide evidence behind play, they fail on mobile and on slow devices, and they punish the two-minute skim. Borrow one interaction from them, never their structure.

**4. Landing page galleries (Lapa Ninja's core content).** Why not: landing pages optimise for one conversion action, and their patterns (countdowns, pricing tables, testimonial blocks, feature grids) do not transfer to a portfolio. Useful for studying hero composition and OG images, not for structuring the site.

**5. Behance as the primary home.** Why not: Behance is a discovery and storytelling layer, and its case study discipline is excellent, but it is a platform profile, not a portfolio. It cannot carry the interactive challenge demo, the live tools, the proof page, or the custom navigation this rebuild needs. The right relationship is: the portfolio is home, and Behance-style case study structure is how the project pages are written. A Behance profile can exist alongside it as a mirror, not instead of it.

**6. Template marketplaces and no-code portfolio builders as a model.** Why not: Framer, Readymag, Cargo, and Contra are legitimate tools, and Hoverstate recommends them for speed, but their templates are the source of the generic patterns listed in section 9. This rebuild is a custom React site precisely so it does not look like a template. The builders are useful for a quick experiment, not as the design reference.

---

## 11. What Phase 3 (creative direction) must decide next

This research deliberately does not pick the concept, the palette, or the typefaces. Those are creative direction decisions. What it does fix is the brief those decisions must satisfy:

1. State the one-sentence idea, and the one signature moment, before any layout is drawn.
2. Keep the interactive challenge demo as the hero proof, and decide whether the cinematic video sits behind it or beside it, never competing with it.
3. Write the six case studies in the five-part shape (overview, challenge, process and decisions, solution, reflection), each with its artifacts attached and its numbers verified against the profile audit.
4. Budget the motion: one signature interaction, directed scroll, quiet everything else, with a reduced-motion path that leaves nothing hidden.
5. Set performance budgets before building (largest contentful paint under 2.5 seconds, transform and opacity only, route-level code splitting, compressed images and video, eager hero media), because the v2 audit shows the current site misses several of these.
6. Design mobile at 375px first for the hero, the project index, and the case study template, and test the cursor layer by removing it entirely.
7. Fix the known accessibility gaps from the v2 audit (lightbox focus return, real tab semantics or a simpler pattern, mobile menu focus management) as part of the build, not as a polish pass.

## Sources read in this pass

- https://www.awwwards.com/
- https://www.hoverstate.design/best-portfolio-websites
- https://reallygooddesigns.com/interactive-portfolio-examples/
- https://www.siteinspire.com/
- https://www.lapa.ninja/
- https://www.behance.net/resources/articles/building-the-perfect-case-study
- https://www.hontran.dev/blog/how-to-build-an-award-winning-portfolio-site
- https://hireadrian.com/award-winning-websites/ (search result, supporting)
- https://futurists.in/10-best-award-winning-websites-of-2026/ (search result, supporting)
- https://www.refolk.ai/candidates/guides/portfolio-case-study-write-up (search result, supporting)
- https://thetailorcv.com/blog/portfolio-case-study-writing (search result, supporting)
- https://www.ui-skills.com/skills/mengto/editorial-portfolio-chapters (search result, supporting)
- https://tympanus.net/codrops/2026/11/04/brandon-yasin-portfolio/ (search result, supporting)
- https://examples-of.com/technology-software/tech-resumes-and-portfolios/online-portfolio-platforms-for-developers/technology-software-tech-resumes-and-portfolios-online-portfolio-platforms-for-developers-using-behance-for-tech-portfolios/ (search result, supporting; its tech profiles are composites with fictional names, used only for structure)
- Internal grounding: docs/01-profile-audit.md and docs/01-repo-audit.md (read before the web research)
