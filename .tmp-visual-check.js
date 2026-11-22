const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();

  // Normal path — 3D WebGL scene should mount and render.
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push("CONSOLE: " + m.text());
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);
  const hasCanvas = await page.locator("canvas").count();
  await page.screenshot({ path: "shot-normal.png", fullPage: false });
  console.log("NORMAL canvas count:", hasCanvas);
  console.log("NORMAL errors:", errors.length ? JSON.stringify(errors, null, 2) : "none");

  // Reduced-motion path — static fallback, no canvas.
  const ctx2 = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: "reduce",
  });
  const page2 = await ctx2.newPage();
  const errors2 = [];
  page2.on("pageerror", (e) => errors2.push("PAGEERROR: " + e.message));
  await page2.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
  await page2.waitForTimeout(1500);
  const canvas2 = await page2.locator("canvas").count();
  await page2.screenshot({ path: "shot-reduced.png", fullPage: false });
  console.log("REDUCED canvas count:", canvas2);
  console.log("REDUCED errors:", errors2.length ? JSON.stringify(errors2, null, 2) : "none");

  await browser.close();
})();