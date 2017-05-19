# zaw-fetch

This is a very simple module that fetches the garbage collection dates of ZAW
and returns them in ical.

The ZAW does not provide a direct URL to fetch the ical data (at least as far as I know). This module extracts the ical data from the given URL.

## usage

```
const zaw = require('zaw-fetch');
const url = '...'; // get the URL by for you town/street from ZAW (*1)
zaw.getIcal(url).then(icalData => {
  console.log(icalData);
});
```

(*1): https://zaw-online.de/index.php?option=com_abfallkalender&view=abfallkalender&Itemid=163