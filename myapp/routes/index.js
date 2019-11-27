var express = require('express');
var router = express.Router();
var adminRouter = require('./admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Training tasks' });
});

router.use('/admin', adminRouter);

module.exports = router;
