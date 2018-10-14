const mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
    name: String
});

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo