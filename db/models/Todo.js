const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  title: String,
  complete: Boolean,
  userId: String
});

let Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
