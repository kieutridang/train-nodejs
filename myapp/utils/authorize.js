var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const privateKey = 'newPrivateKey';

function authorize(req, res, next) {
    const users = req.app.users;
    // TODO: Validate access token
    const { accesstoken } = req.headers;
    if (!accesstoken) {
        // TODO: Error handler
        invalidToken(res);
        return;
    }
    // TODO: Verify access token
    const isValidToken = users.some(user => user.accessToken === accesstoken);
    if (isValidToken) {
        next();
    } else {
        invalidToken(res);
    }
}

function invalidToken(res) {
    res.status(401).send('Invalid token');
}

module.exports = authorize;