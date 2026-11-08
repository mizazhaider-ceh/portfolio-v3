import json, os, sys
from playwright.sync_api import sync_playwright

BASE = "http://localhost:4173"
ROUTES = [
    ("/", "home"), ("/about", "about"), ("/projects", "projects"),
    ("/projects/pentrix-vulnlab", "pentrix"), ("/projects/powershell-academy", "powershell"),
    ("/projects/bughunt-arsenal", "bughunt"), ("/projects/apk-security-pipeline", "apk"),
    ("/projects/agentarsenal", "agentarsenal"), ("/projects/ai-terminal-x", "aiterminal"),
    ("/experience", "experience"), ("/skills", "skills"), ("/certifications", "certifications"),
    ("/proof", "proof"), ("/contact", "contact"), ("/no-such-page", "404"),
    ("/privacy", "privacy"), ("/terms", "terms"),
]
OUT = "/home/hatch/workspace/portfolio-v2/.verify"
os.makedirs(OUT, exist_ok=True)
CHROME = "/home/hatch/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome"
results = []

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, args=["--no-sandbox"])

    def check(route, slug, theme, width, height, shot):
        page = browser.new_page(viewport={"width": width, "height": height})
        errors = []
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.add_init_script(f"localStorage.setItem('portfolio-v2-theme', '{theme}')")
        page.goto(BASE + route, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(900)
        m = page.evaluate("""() => ({
            scrollW: document.documentElement.scrollWidth,
            innerW: window.innerWidth,
            h1: (document.querySelector('h1')||{textContent:'NO H1'}).textContent.trim(),
            title: document.title,
            theme: document.documentElement.getAttribute('data-theme'),
            iframes: [...document.querySelectorAll('iframe')].map(f => ({src: f.getAttribute('src'), loaded: f.contentDocument !== null})),
            imgs: [...document.querySelectorAll('img')].map(i => ({src: i.getAttribute('src'), ok: i.complete && i.naturalWidth > 0}))
        })""")
        bad = [i["src"] for i in m["imgs"] if not i["ok"]]
        overflow = m["scrollW"] - m["innerW"]
        ok = not errors and overflow <= 0 and not bad
        results.append(f"{'OK' if ok else 'FAIL'} {theme} {width}x{height} {route} | h1=\"{m['h1'][:50]}\" | overflow={overflow} | consoleErrors={len(errors)}{(' ' + ' | '.join(errors)[:300]) if errors else ''} | badImgs={','.join(bad)} | iframes={','.join(f['src'] + ':' + str(f['loaded']) for f in m['iframes'])}")
        if shot:
            page.screenshot(path=f"{OUT}/{slug}-{theme}-{width}.png")
        page.close()

    # Hero visibility at 1280x800
    for route, slug in [("/", "home"), ("/projects/pentrix-vulnlab", "pentrix")]:
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.add_init_script("localStorage.setItem('portfolio-v2-theme', 'light')")
        page.goto(BASE + route, wait_until="networkidle")
        page.wait_for_timeout(900)
        h = page.evaluate("""() => {
            const h1 = document.querySelector('h1').getBoundingClientRect();
            const btn = document.querySelector('.btn-primary').getBoundingClientRect();
            return {h1b: h1.bottom, btnB: btn.bottom, vh: window.innerHeight};
        }""")
        vis = h["h1b"] <= 800 and h["btnB"] <= 800
        results.append(f"HERO 1280x800 {route}: h1Bottom={round(h['h1b'])}, btnBottom={round(h['btnB'])} of 800 -> {'VISIBLE' if vis else 'NOT VISIBLE'}")
        page.close()

    for route, slug in ROUTES:
        for w in (1440, 1024, 768, 390):
            check(route, slug, "light", w, 900 if w >= 1024 else 844, w in (1440, 390))
    for route, slug in ROUTES:
        for w in (1440, 390):
            check(route, slug, "dark", w, 900 if w == 1440 else 844, w in (1440, 390))

    # Theme switch persistence
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(BASE + "/", wait_until="networkidle")
    page.wait_for_timeout(600)
    page.click('button[aria-pressed="false"] >> nth=0')
    page.wait_for_timeout(400)
    t1 = page.evaluate("document.documentElement.getAttribute('data-theme')")
    page.goto(BASE + "/projects", wait_until="networkidle")
    page.wait_for_timeout(400)
    t2 = page.evaluate("document.documentElement.getAttribute('data-theme')")
    stored = page.evaluate("localStorage.getItem('portfolio-v2-theme')")
    results.append(f"THEME-SWITCH: after click={t1}, after nav to /projects={t2}, stored={stored}")
    page.close()
    browser.close()

open(f"{OUT}/results.txt", "w").write("\n".join(results) + "\n")
print("\n".join(results))
