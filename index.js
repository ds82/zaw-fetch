const rp = require('request-promise');
const cheerio = require('cheerio');

function getIcal(url) {
    return rp(url)
      .then(cheerio.load)
      .then($ => $('form [name=ics]').val());
}

module.exports = { getIcal };
