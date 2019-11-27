var express = require('express');
var router = express.Router();
var signup = require('../controllers/admin/signup');
var login = require('../controllers/admin/login');

router.get('/log-in', login);

router.post('/sign-up', signup);

router.get('/log-out', function (req, res, next) {
    res.status(200).send('Admin OK');
});

router.get('/forget-password', function (req, res, next) {
    res.status(200).send('Admin OK');
});

module.exports = router;