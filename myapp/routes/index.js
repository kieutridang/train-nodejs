const express = require('express');
const router = express.Router();
const adminRouter = require('./Admin');
const productRouter = require('./Product');
const orderRouter = require('./Order');

const authorize = require('../utils/authorize');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Training tasks' });
});

router.use('/admin', adminRouter);
router.use('/product', authorize, productRouter);
router.use('/order', authorize, orderRouter);

module.exports = router;
