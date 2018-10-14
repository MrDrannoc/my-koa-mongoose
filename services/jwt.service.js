const jwt = require('jsonwebtoken');
// const config = require('../config/config.js');

module.exports = {

    issue(payload, expiresIn) {

        return jwt.sign(payload, 'secret', {
            expiresIn: expiresIn
        })
    },

    verify(token) {
        return jwt.verify(token, 'secret')
    }
};