import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";

const BASE = "http://localhost:4173";
const ROUTES = [
  ["/", "home"],
  ["/about", "about"],
  ["/projects", "projects"],
  ["/projects/pentrix-vulnlab", "pentrix"],
  ["/projects/powershell-academy", "powershell"],
  ["/projects/bughunt-arsenal", "bughunt"],
  ["/projects/apk-security-pipeline", "apk"],
  ["/projects/agentarsenal", "agentarsenal"],
  ["/projects/ai-terminal-x", "aiterminal"],
  ["/experience", "experience"],
  ["/skills", "skills"],
  ["/certifications", "certifications"],
  ["/proof", "proof"],
  ["/contact", "contact"],
  ["/no-such-page", "404"],
  ["/privacy", "privacy"],
  ["/terms", "terms"],
];
const OUT = "/home/hatch/workspace/portfolio-v2/.verify";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/home/hatch/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome",
  args: ["--no-sandbox"],
});
const results = [];

async function checkPage(route, slug, theme, width, height, shot) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.addInitScript((t) => localStorage.setItem("portfolio-v2-theme", t), theme);
  await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(900);
  const m = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    innerW: window.innerWidth,
    overflow: document.documentElement.scrollWidth - window.innerWidth,
    h1: document.querySelector("h1")?.textContent?.trim() ?? "NO H1",
    title: document.title,
    theme: document.documentElement.getAttribute("data-theme"),
    iframes: [...document.querySelectorAll("iframe")].map((f) => ({ src: f.getAttribute("src"), loaded: f.contentDocument !== null })),
    imgs: [...document.querySelectorAll("img")].map((i) => ({ src: i.getAttribute("src"), ok: i.complete && i.naturalWidth > 0 })),
  }));
  const badImgs = m.imgs.filter((i) => !i.ok);
  const status = errors.length === 0 && m.overflow <= 0 && badImgs.length === 0 ? "OK" : "FAIL";
  results.push(`${status} ${theme} ${width}x${height} ${route} | h1="${m.h1.slice(0, 50)}" | overflow=${m.overflow} | consoleErrors=${errors.length}${errors.length ? " " + errors.join(" | ").slice(0, 300) : ""} | badImgs=${badImgs.map((i) => i.src).join(",")} | iframes=${m.iframes.map((f) => f.src + ":" + f.loaded).join(",")}`);
  if (shot) await page.screenshot({ path: `${OUT}/${slug}-${theme}-${width}.png`, fullPage: false });
  await page.close();
}

// Hero visibility at 1280x800 (light, home + a detail page)
for (const [route, slug] of [["/", "home"], ["/projects/pentrix-vulnlab", "pentrix"]]) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.addInitScript(() => localStorage.setItem("portfolio-v2-theme", "light"));
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  const hero = await page.evaluate(() => {
    const h1 = document.querySelector("h1")?.getBoundingClientRect();
    const btn = document.querySelector(".btn-primary")?.getBoundingClientRect();
    return { h1Top: h1?.top, h1Bottom: h1?.bottom, btnTop: btn?.top, btnBottom: btn?.bottom, vh: window.innerHeight };
  });
  results.push(`HERO 1280x800 ${route}: h1 ${Math.round(hero.h1Top ?? -1)}-${Math.round(hero.h1Bottom ?? -1)}, primaryBtn ${Math.round(hero.btnTop ?? -1)}-${Math.round(hero.btnBottom ?? -1)} of ${hero.vh} -> ${hero.h1Bottom !== undefined && hero.h1Bottom <= 800 && hero.btnBottom !== undefined && hero.btnBottom <= 800 ? "VISIBLE" : "NOT VISIBLE"}`);
  await page.close();
}

// Light theme, all routes, all widths
for (const [route, slug] of ROUTES) {
  for (const w of [1440, 1024, 768, 390]) {
    await checkPage(route, slug, "light", w, w >= 1024 ? 900 : 844, w === 1440 || w === 390);
  }
}
// Dark theme, all routes at 1440 and 390
for (const [route, slug] of ROUTES) {
  for (const w of [1440, 390]) {
    await checkPage(route, slug, "dark", w, w === 1440 ? 900 : 844, w === 1440 || w === 390);
  }
}

// Theme switch persistence: click Dark on home, go to /projects, check data-theme
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.click('button[aria-pressed="false"] >> nth=0').catch(() => {});
  await page.waitForTimeout(400);
  const t1 = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
  await page.goto(BASE + "/projects", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const t2 = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
  const stored = await page.evaluate(() => localStorage.getItem("portfolio-v2-theme"));
  results.push(`THEME-SWITCH: after click=${t1}, after nav to /projects=${t2}, stored=${stored}`);
  await page.close();
}

await browser.close();
writeFileSync(`${OUT}/results.txt`, results.join("\n") + "\n");
console.log(results.join("\n"));
