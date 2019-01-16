# puppeteer-ssr

## What's this?

- A nodejs server for prerender websites
- So if you have an old website or a spa website witch uses client side render and is suffering from SEO issues, use this project as a middleware in your server

## Installation

- clone the repo
- `npm i`
- open your web browser, type in `127.0.0.1:3000/?url=[sites_you_want_to_prerender]`, and you'll see the prerender result
- set up nginx's location block to make sure you only serve prerendered page for bots, [example](https://github.com/andrewwang84/puppeteer-ssr/blob/master/nginx.txt)
- test your site with `curl -A 'Googlebot' [your_site]` or chrome extension [User-Agent Switcher for Google Chrome](https://chrome.google.com/webstore/detail/user-agent-switcher-for-g/ffhkkpnppgnfaobgihpdblnhmmbodake)
- set up your pm2 & logrotate, and you're good to go!


## Trouble Shooting

- fail launching Chrome: happens on ubuntu 16.04 in my case, run the chrome_dependence.bat and the problem should be solved
- headless mode not working on win7: uncommon the args part in app.js
