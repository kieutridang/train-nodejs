var bcrypt = require('bcrypt');
var Admin = require('../../models/admin');

const saltRounds = 7;

/*  */
function signup(req, res, next) {
    // Handle request
    const { email, password } = req.body;
    console.log(email)

    // Check email existence
    Admin.exists({ username: email }).then(function (isExisted) {
        console.log(isExisted)
        if (isExisted) {
            // Error Handler
            res.status(400).send('Email existed!');
        } else {
            // Hash password
            bcrypt.hash(password, saltRounds, function (err, hash) {
                // Store hash in your password DB.
                const newAdmin = new Admin({
                    username: email,
                    password: hash
                })
                newAdmin.save((err, admin) => {
                    if (err) res.status(500).send(err);
                    res.status(200).send(admin)
                })
            });
        }

    });

}

module.exports = signup