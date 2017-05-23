const rp = require('request-promise');
const cheerio = require('cheerio');
const ical2json = require('ical2json');

function getIcal(url) {
    return rp(url)
      .then(cheerio.load)
      .then($ => $('form [name=ics]').val());
}

function getJson(url) {
  return getIcal(url).then(ics => ical2json.convert(ics));
}

module.exports = {
  getIcal, getJson
};
