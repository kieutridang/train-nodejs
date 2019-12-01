const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/admin/Signup');
const login = require('../controllers/admin/Login');

router.get('/log-in', login);

router.post('/sign-up', signup);


module.exports = router;