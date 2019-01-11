let puppeteer = require('puppeteer');

async function ssr(url, browserWSEndpoint) {
  try {
    const start = Date.now();

    const browser = await puppeteer.connect({ browserWSEndpoint });
    const page = await browser.newPage();

    // disable render of unnecessary requests and GA
    await page.setRequestInterception(true);
    page.on('request', req => {
      const whitelist = ['document', 'script', 'xhr', 'fetch'];
      if (!whitelist.includes(req.resourceType())) {
        return req.abort();
      }
      const blacklist = ['www.google-analytics.com', '/gtag/js', 'ga.js', 'analytics.js'];
      if (blacklist.find(regex => req.url().match(regex))) {
        return req.abort();
      }

      req.continue();
    });

    try {
      await page.goto(url, {waitUntil: 'networkidle0'});
      await page.waitForSelector('main');
    } catch (err) {
      console.error(err);
      throw new Error('page.goto/waitForSelector timed out.');
    }

    const html = await page.content();
    await page.close();

    const renderTime = Date.now() - start;
    console.info(`prerender page in: ${renderTime}ms`);

    return {html};
  } catch (err) {
    console.error(err);
  }
};

module.exports = ssr;
