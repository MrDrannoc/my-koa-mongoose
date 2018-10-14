const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

let User = mongoose.model('User', UserSchema)

module.exports = User