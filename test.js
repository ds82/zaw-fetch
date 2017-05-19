const zaw = require('./index');
const URL =
  'https://zaw-online.de/index.php?option=com_abfallkalender&view=abfallkalender&Itemid=163&step=2&ortid=16&strid=6938&artid%5B%5D=3&artid%5B%5D=4&artid%5B%5D=2&artid%5B%5D=1&artid%5B%5D=5&excludeweekly=1&startdate=2017-05-18&selectdate=2017-12-31&alarmtime=-1&alarmaction=display';

zaw.getIcal(URL).then(ical => console.log(ical));
