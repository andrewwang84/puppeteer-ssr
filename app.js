let createError = require('http-errors');
let express = require('express');
let logger = require('morgan');
let puppeteer = require('puppeteer');
let ssr = require('./ssr.js');

let browserWSEndpoint = null;
let app = express();

app.use(logger('dev'));

app.get('/', async (req, res, next) => {
  if (!browserWSEndpoint) {
    const browser = await puppeteer.launch(
      { 
        // headless: false,
        // below args is for testing on win7, where puppeteer will bugged out in headless mode
        // args: [
        //   '--proxy-server="direct://"',
        //   '--proxy-bypass-list=*'
        // ]
      }
    );
    browserWSEndpoint = await browser.wsEndpoint();
  }

  const html = await ssr(req.query.url, browserWSEndpoint);
  return res.status(200).send(html);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
