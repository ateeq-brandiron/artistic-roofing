const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  const pages = [
    { name: 'home', url: 'http://localhost:3000/' },
    { name: 'about', url: 'http://localhost:3000/about' },
    { name: 'services', url: 'http://localhost:3000/services' },
    { name: 'process', url: 'http://localhost:3000/process' },
    { name: 'testimonials', url: 'http://localhost:3000/testimonials' },
    { name: 'contact', url: 'http://localhost:3000/contact' },
  ];

  for (const p of pages) {
    await page.goto(p.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `/tmp/${p.name}.png`, fullPage: false });
    console.log(`✓ ${p.name}`);
  }

  await browser.close();
})();
