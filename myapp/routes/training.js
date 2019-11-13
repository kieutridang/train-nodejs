var express = require('express');
var router = express.Router();

/* GET html index file */
router.get('/', function(req, res, next) {
  var options = {
    root: 'public/html'
  }
  res.sendFile('index.html', options);
});

module.exports = router;