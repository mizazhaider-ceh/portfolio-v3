import asyncio, json
from playwright.async_api import async_playwright

ROUTES = ["/", "/about", "/projects", "/projects/pentrix-vulnlab",
 "/projects/powershell-academy", "/projects/bughunt- Arsenal".replace(" ", ""),
 "/projects/apk-security-pipeline", "/projects/agentarsenal",
 "/projects/ai-terminal-x", "/experience", "/skills", "/certifications",
 "/proof", "/contact", "/privacy", "/terms", "/does-not-exist-xyz"]
BASE = "http://localhost:4173"
OUT = "/home/hatch/workspace/portfolio-v2/reviews/shots"
EXE = "/home/hatch/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path=EXE, args=["--no-sandbox"])
        for width, height in ((1440, 900), (390, 844)):
            ctx = await browser.new_context(viewport={"width": width, "height": height})
            page = await ctx.new_page()
            failed = []
            page.on("response", lambda r: failed.append(f"{r.status} {r.url}") if r.status >= 400 else None)
            page.on("pageerror", lambda e: failed.append(f"PAGEERROR {e}"))
            await page.add_init_script("localStorage.setItem('portfolio-v2-theme','dark');")
            for r in ROUTES:
                slug = r.strip("/").replace("/", "-") or "home"
                failed.clear()
                await page.goto(BASE + r, wait_until="networkidle", timeout=30000)
                await page.wait_for_timeout(1000)
                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                await page.wait_for_timeout(700)
                await page.evaluate("window.scrollTo(0,0)")
                await page.wait_for_timeout(300)
                overflow = await page.evaluate(
                    "document.documentElement.scrollWidth - document.documentElement.clientWidth")
                text = await page.evaluate("document.body.innerText.slice(0, 9000)")
                with open(f"{OUT}/{slug}-dark-{width}.txt", "w") as f:
                    f.write(f"ROUTE {r} theme=dark width={width}\nOVERFLOW: {overflow}px\nFAILED: {failed}\n\n{text}")
                await page.screenshot(path=f"{OUT}/{slug}-dark-{width}-top.png")
                if failed or overflow:
                    print(slug, width, "overflow", overflow, "failed", failed, flush=True)
            await ctx.close()
        # light 390 missing pages + identify 404 resource on light 1440
        ctx = await browser.new_context(viewport={"width": 390, "height": 844})
        page = await ctx.new_page()
        failed = []
        page.on("response", lambda r: failed.append(f"{r.status} {r.url}") if r.status >= 400 else None)
        await page.add_init_script("localStorage.setItem('portfolio-v2-theme','light');")
        for r in ("/terms", "/does-not-exist-xyz"):
            slug = r.strip("/").replace("/", "-")
            failed.clear()
            await page.goto(BASE + r, wait_until="networkidle", timeout=30000)
            await page.wait_for_timeout(800)
            print(slug, "light-390 failed:", failed, flush=True)
            await page.screenshot(path=f"{OUT}/{slug}-light-390-top.png")
        await ctx.close()
        ctx2 = await browser.new_context(viewport={"width": 1440, "height": 900})
        page2 = await ctx2.new_page()
        failed2 = []
        page2.on("response", lambda r: failed2.append(f"{r.status} {r.url}") if r.status >= 400 else None)
        await page2.add_init_script("localStorage.setItem('portfolio-v2-theme','light');")
        for r in ("/about", "/experience", "/proof", "/contact", "/"):
            failed2.clear()
            await page2.goto(BASE + r, wait_until="networkidle", timeout=30000)
            await page2.wait_for_timeout(600)
            print(r, "light-1440 failed:", failed2, flush=True)
        await browser.close()
    print("DONE dark sweep", flush=True)

asyncio.run(main())
