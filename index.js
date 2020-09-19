var express = require('express');
var app = express();
app.get('/about', function (req, res) {
  res.send('gio thu in lai messag');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
