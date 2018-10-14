const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connexion à la base de données OK')
});

Models = require('./models')
