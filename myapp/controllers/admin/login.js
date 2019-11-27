var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var Admin = require('../../models/admin');

const privateKey = 'newPrivateKey';

function login(req, res, next) {
    // Handle request
    const { email, password } = req.body;

    // Check email/password valid
    Admin.exists({ username: email }).then(function (isExisted) {
        // Error handler
        if (isExisted == false) {
            res.status(401).send('Email or password is invalid');
        } else {
            Admin.find({ username: email }).then(function (foundAdmin, err) {
                if (err) {
                    res.status(500).send(err);
                    return
                }
                bcrypt.compare(password, foundAdmin[0].password).then(function (isMatched) {
                    if (isMatched) {
                        // Create access token as jwt
                        jwt.sign({ email, password }, privateKey, function (err, accessToken) {
                            // Store access token
                            if (err) {
                                res.status(500).send(err);
                                return
                            }
                            Admin.update({ username: email }, { accessToken: accessToken }).then(function (rawResponse, err) {
                                if (err) {
                                    res.status(500).send(err);
                                    return
                                }
                                res.status(200).send(accessToken);
                            })

                        })
                    } else {
                        // Error handler
                        res.status(401).send('Email or password is invalid');
                    }
                })
            });
        }
    })
}


module.exports = login