# Portfolio v2 — End-user review

**Reviewer role:** non-technical visitor (family member / non-technical hiring manager / friend). No cybersecurity knowledge assumed.
**Date:** 2026-11-08
**Site reviewed:** http://localhost:4173/ (local preview of the v2 build)
**Verdict: FIX FIRST**

## Verdict in one paragraph

The site works and reads as honest and professional, and a stranger can understand who Izaz is and how to reach him. But it does not look finished: nearly every page has large stretches of completely empty space between sections, so a normal visitor scrolling down will think content failed to load. On top of that, the home page tagline renders as faint grey text that looks broken, the Skills diagram opens cut off mid-picture, and the About photo sits in a card that is half empty. Fix the empty-page feel first; everything else is small. This is not a rebuild: the structure, the words, the navigation, the theme switch and the contact page are all good.

## How the review was done

- Rendered in real Chromium (Playwright) at desktop 1440 and mobile 390, light and dark theme, and viewed the screenshots myself.
- Desktop light: all 17 routes rendered, 0 console errors, 0 px horizontal overflow, 0 broken images on every route (measured after a full scroll to trigger lazy images).
- Desktop dark: Home, Projects, Proof, Contact rendered, 0 px overflow.
- Mobile light (390): Home, About, Projects, PenTrix, PowerShell Academy, BugHunt, APK Pipeline, AgentArsenal, Ai-Terminal-X, Experience rendered, 0 px overflow, 0 console errors.
- Theme switch: clicked "Dark" in the nav on Home; the page switched to dark and the switch state followed. Light is the default on first load.
- **Limitation, stated honestly:** midway through the review the test environment broke (Chromium stopped launching with SIGTRAP/SIGILL, and the shell could no longer write file data anywhere: every write failed with EPERM "Operation not permitted", including `curl` downloads and a Firefox install). Because of that I could NOT browser-verify: mobile rendering of Skills, Certifications, Proof, Contact, Privacy, Terms and the 404 page; the mobile menu opening; the contact form's error and success states; or clicking through the nav links. For those four items I read the component source instead (see "Source-checked, not browser-verified" below). The site itself was never the cause of the breakage as far as I could tell; the same failure hit plain `about:blank` and `example.com` downloads. These items need a live-browser re-check before shipping.

## Top 5 findings (priority order)

### 1. The pages look unfinished: huge empty bands between sections

**Where:** every page, worst on Certifications, Contact, Home, Proof, Skills, About.
**What is wrong, in plain words:** you scroll and scroll through nothing. The Certifications page is about 85% blank space: ten small cards and one "In progress" box, then a giant empty area before the footer. On Contact there is a very long empty stretch between the form and the "Questions" section. On Home there are big empty gaps between the hero, the tagline, About, Featured projects, Proof and the final "Get in touch". A non-technical visitor will think the page did not finish loading, or that the site is empty. The cause appears to be the design rule of one section per screen: each section is given a full screen of height even when it only has two lines in it.
**Fix:** tighten the vertical spacing so a section ends soon after its content ends, or add content to fill the space. The Certifications and Contact pages need this most.

### 2. The home page tagline looks faded and broken

**Where:** Home (`/`), the line "Understand it. Break it. Build it. Secure it.", light and dark theme, desktop and mobile.
**What is wrong, in plain words:** the tagline prints in very pale grey, so faint it looks like placeholder text or a printing error. In the screenshots I took (after scrolling the whole page and back to the top) the words stayed faint; only the word "Secure" shows in colour. The design intends the words to light up one by one as you scroll, but in practice a visitor sees washed-out text and may think the site is broken or the text is disabled.
**Fix:** make the tagline fully readable by default and treat the scroll lighting-up as decoration only, or make the words reach full colour quickly and stay there.

### 3. The Skills diagram opens cut off

**Where:** Skills (`/skills`), section "One person, three branches", the "Technical identity, skills and career tree" diagram.
**What is wrong, in plain words:** the diagram is a tree with three branches, but when the page loads you only see the first branch (Offensive security) and the picture is cut off halfway through a box at the bottom edge. The other two branches (Defensive security, and AI security) are hidden until you figure out how to move and zoom inside a small embedded window. A non-technical visitor will not know to do that and will think the diagram is broken. The little buttons on the diagram (Classic, Still, Export, ROUTE, LENS, 100%) are unexplained words to a normal person.
**Fix:** make the whole tree fit in the box when the page loads (zoom to fit), so all three branches are visible without touching anything. Hide or explain the viewer buttons.

### 4. The About photo sits in a card that is half empty

**Where:** About (`/about`), the portrait photo next to the "I started in security young..." text.
**What is wrong, in plain words:** the photo is in a white card, but the card is about twice as tall as the photo, so there is a large empty white box under his picture. It looks like the photo failed to fill its frame.
**Fix:** make the card end just below the photo, or size the photo to fill the card.

### 5. A label is cut off on phones

**Where:** Home (`/`), mobile 390 px, the PenTrix challenge panel list.
**What is wrong, in plain words:** the third item in the challenge list reads "Insecure direct object ..." — the words are chopped off with dots because the text does not fit the phone screen. The other two items fit fine.
**Fix:** let that label wrap onto two lines instead of cutting it off.

## The questions, answered as an end user

### In plain words, what does he do? Could you explain it after 30 seconds on Home?

Yes, mostly. After 30 seconds I could say: "He is a second-year cybersecurity student in Belgium who finds weaknesses in websites, takes part in hacking competitions, and builds learning tools for other students." That comes from the hero sentence ("Second year BSc Cybersecurity student at Howest who breaks web apps, hunts bounties on YesWeHack, and builds the tools he wishes he had") and the line "I break things for a living, and I build the tools that find the break." "Breaks web apps" is clear; "hunts bounties on YesWeHack" is the one phrase a stranger will not understand (it means he finds security holes in real websites for rewards, but the page never says that in plain words). The challenge panel on the right of the hero (GET /api/orders/1042, SQL injection, Cross site scripting, Insecure direct object reference) is pure jargon to a non-technical visitor, but it is clearly framed as a demo of his work, and the plain sentence on the left carries the meaning, so it does not block understanding. One small thing: "CSCB 2026: #1 Web Junior, #3 overall Junior, #26 of 806" is shown as a badge under the hero with no explanation of what CSCB is; the Proof page explains it, but on Home a stranger will not know what the letters mean.

### Can you find your way around? Does the theme switch make sense and work?

Yes. The top bar has eight clear pages (Home, About, Projects, Experience, Skills, Certifications, Proof, Contact), the current page is highlighted, and there is a "Get in touch" button at the top right. Every project detail page has a "Back to projects" link at the top and the bottom. The 404 page ("This page does not exist") has "Back home" and "See my work" buttons. The footer repeats all the links plus Privacy, Terms and "Back to top". The theme switch is two labelled buttons, Light and Dark, in the top bar; I clicked Dark and the whole page switched to dark immediately, with readable text. It is obvious and it works. The mobile top bar shows his short name, the Light/Dark switch and a menu button (three lines); I could not open the menu in the browser because the test environment broke (see limitations), but the source shows it opens a full-screen list with all eight pages plus "Get in touch", GitHub and LinkedIn, and it closes when you pick a page.

### On your phone, is everything readable and tappable?

For the ten mobile pages I could render: yes. Measured 0 px sideways scrolling on all ten, no text running off the screen, no overlaps, and the buttons (Get in touch, See my work, the challenge step buttons) are big enough to tap. The profile photo, project cards and proof cards stack into one column cleanly. The only defect is finding 5 above (the chopped-off "Insecure direct object ..." label). Not browser-verified on mobile: Skills, Certifications, Proof, Contact, Privacy, Terms, 404. The Skills diagram is the one I would most want re-checked on a real phone, because its desktop view is already cut off.

### Is it obvious how to contact him? Does the form make sense?

Yes, this is one of the best parts. The Contact page shows his email address (mizazhaiderceh@gmail.com) as a clickable link, his GitHub and LinkedIn, when he is available (Feb-Apr 2027 and Jul-Sep 2027), where he can work on site (Kortrijk, Ghent, Brussels, Diegem, or remote from Belgium), and a "Download my CV (Europass PDF, 328 KB)" button. The form has three clear fields: Name ("Your name"), Email ("you@example.com"), Message ("What would you like to talk about?") and a "Send message" button. Below it are six questions in plain words ("What kind of work are you looking for?", "When are you available?", "Do you do bug bounty?", "What is The PenTrix?", "Can I see your CV?", "How do I reach you?"). I could not test the form in the browser (environment broke), but the source shows clear inline errors under each field ("Enter your name.", "Enter an email address.", "That email address does not look right. Check it and try again.", "Write a message first."), a calm confirmation ("Message sent. Thank you. I will reply soon.") only after a real send, and a clear failure message ("Sending failed. Check your connection and try again, or email me directly."). That wording is good. It still needs a live test (empty submit, bad email, real send) before shipping.

### Does anything look broken, strange, or unfinished?

- The empty space (finding 1) is the main one: it is on every page and makes the site feel unfinished.
- The faded tagline (finding 2) looks like a rendering fault.
- The cut-off Skills diagram (finding 3) and the half-empty photo card (finding 4) look like layout faults.
- The chopped label on mobile (finding 5).
- Nothing else: no missing images anywhere (every image on every rendered route loaded), no overlapping text, no dead-looking links in what I could see, no page that is truly empty. The 404 page is clean and helpful.

### Does the site feel trustworthy and professional, or does something feel off?

Trustworthy. The claims are specific and backed up: competition results are shown as real screenshots with his name visible, certificates are named one by one with who gave them, and the "In progress" box is clearly separated and says "Not held yet" about the two exams he has not taken. Nothing reads as bragging without proof. The tone is confident but plain ("I break things for a living", "Talk is cheap. Here is the proof."). The one thing a careful reader might question is the number of projects (22 cards on the Projects page, several of them small tools); that is a lot for a second-year student, but each card says what the thing is and links to the real code, so it reads as productive rather than invented. No grade or score is shown as a boast except "60/60 credits, first attempt", which the About page states plainly as a fact.

### The proof page: do the screenshots and badges make sense to a non-technical person?

Mostly yes. The three big cards at the top are in plain words: "#1 in Web, CSCB 2026 Junior, First place in the Web category, representing Howest"; "#3 Junior, #26/806, CSCB 2026 National CTF, Third overall Junior, 26 flags solved, nationally"; "Recognized Hunter, YesWeHack, Quarterly recognition for bug bounty performance". A stranger understands "first place" and "third overall" even if "CTF", "flags" and "CSCB" are never explained (a one-line plain explanation of each would help: a CTF is a hacking competition, a flag is a solved challenge). The three-photo story works: the first photo is a leaderboard with his name highlighted in first place, with a caption in his own words. The gallery below has four pictures: two more leaderboards (tiny writing, unreadable until you click to enlarge, but the captions explain them), a friendly photo of a YesWeHack T-shirt and stickers, and the YesWeHack recognition email (also too small to read until clicked). The captions do the explaining, so the page works. Two nits: the caption line "From CSCB Team with ♥" under the first photo is cryptic (it looks like a leftover note, not a caption), and the leaderboard screenshots are only useful after clicking; a stranger will not know how big they get.

## Hard rules check (all pass)

Checked against the built site (`dist/`) and the source, plus what I saw rendered:

- No bug bounty program names, report titles, IDs, endpoints or reward amounts: **pass**. Only "YesWeHack" (the platform name) and "MIHX01" (his public handle) appear; no program, report, or amount anywhere. Grep of `dist/` for "500 euro", "$80" and similar: no hits.
- No "269/269" figure: **pass**. No hits in `dist/` or `src/`.
- No "16.40/20" GPA in bios: **pass**. No hits. The About page gives grades as "18/20 in Programming..." and "60/60 credits, first attempt", which is the approved wording.
- No invented experience/grades/skills: **pass** as far as an end user can judge; every claim is tied to a named thing (a competition screenshot, a certificate issuer, a GitHub link, a course).
- No PenTrix flag-storage disclosure: **pass**. The PenTrix page says only the approved sentence: "Flags are randomly generated per install at first boot on the student's machine. No flag literal exists in any tracked file. Only genuine exploits earn flags." No storage location is named anywhere.
- No "53+ certifications": **pass**. Certifications are named one by one (10 held, 2 in progress, clearly separated). No count appears in any heading.
- birthDate must be 2007-01-28: **pass**. `dist/index.html` has `"birthDate": "2007-01-28"`.
- No CWE-434 mechanism detail: **pass**. No mention of CWE-434 anywhere.
- Note: the word "whoami" appears once in the built JavaScript, inside the BugHunt payload example list (`"| whoami"` as a command-injection payload example, `src/data.ts:508`). That is a payload example, not the status-line joke and not a secret; the home status line reads plainly "status: available for internships, feb apr 2027, jul sep 2027".

## Source-checked, not browser-verified (re-check live before shipping)

Because the test environment broke mid-review, these were verified by reading the code, not by clicking in a browser:

1. **Contact form behaviour.** `src/components/ContactForm.tsx`: validation and messages as quoted above; posts to Formspree; success replaces the form with "Message sent. Thank you. I will reply soon."; failure shows "Sending failed. Check your connection and try again, or email me directly." Needs a live test: empty submit, bad email, real send.
2. **Mobile menu.** `src/components/Nav.tsx`: full-screen overlay with all eight nav links, "Get in touch", GitHub and LinkedIn; closes on navigation; hamburger toggles to an X. Needs a live open/close test at 390 px.
3. **Nav click-through.** Routes are all declared in `src/App.tsx` (17 routes including Privacy, Terms and the 404 catch-all); the nav uses real router links with the active page highlighted. Needs a live click-through.
4. **Mobile rendering of Skills, Certifications, Proof, Contact, Privacy, Terms, 404.** Desktop renders of all of these were fine (0 overflow, 0 errors); mobile was never measured. The Skills diagram deserves the most attention on a real phone.
5. **The /skills mobile page crash.** During the first sweep the mobile page crashed while loading `/skills` (after ten mobile pages in the same browser session, with little free memory and another agent running Chrome at the same time). I could not tell whether that was the site or the machine; the desktop `/skills` render was fine. Re-check on a real phone.

## Things I liked most

1. **The Contact page is exactly right for a stranger.** Email, GitHub, LinkedIn, CV with its size, availability dates, where he can work, a three-field form and plain-word questions: nothing to hunt for, nothing to guess.
2. **The Proof page tells the story instead of just claiming it.** "First place in the Web category" in plain words, a leaderboard photo with his name at the top, and a T-shirt photo that makes the win feel real. A non-technical person gets it.
3. **The honesty is visible.** Certificates are named one by one with no counts, the two exams he has not taken yet sit in a separate "In progress" box that says "Not held yet", and the About page states facts ("60/60 credits, first attempt") without dressing them up. That is what makes the site feel trustworthy.

## Smaller notes

- The PenTrix architecture diagram (Pentrix page) renders fully and is followable: Student → app → 29 challenge modules → 3 kill chain scenarios, with the database and the career paths. Its little toolbar (Classic, Still, Export) is unexplained, but the diagram itself reads fine, unlike the Skills tree.
- Project cards are consistent: one plain sentence, a code strip, tags, and a link. On the Projects page the names "pentrix-platform" (lowercase, unlike the others) and "90DaysOfCyberSecurity" stand out as slightly untidy, but that is cosmetic.
- The dark theme is genuinely good: readable everywhere I looked, and the Light/Dark switch is obvious. The faded tagline is the only thing that looks wrong in dark mode.
- The footer is clear on every page, including the line "CSCB and YesWeHack images are my own screenshots. This site collects no data."

## Evidence

- Screenshots viewed: `home-desktop-light`, `home-mobile-light`, `home-desktop-dark`, `projects-desktop-light`, `proof-desktop-light`, `contact-desktop-light`, `skills-desktop-light`, `pentrix-desktop-light`, `about-desktop-light`, `certifications-desktop-light`, `notfound-desktop-light` (all full-page captures in the review run; the desktop and mobile captures for all 17 routes exist as PNGs).
- Measured in the live run: desktop light all 17 routes 0 console errors, 0 px overflow, 0 broken images; desktop dark (Home, Projects, Proof, Contact) 0 px overflow; mobile light 10 routes 0 console errors, 0 px overflow.
- Hard-rule greps run against `dist/` and `src/` (see "Hard rules check").
