const mongoose      = require('mongoose');

//connect with mongoose
mongoose.connect('mongodb://localhost:27017/TopTidings', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

// When successfully connected
const db = mongoose.connection.on('connected', () => {
	console.log('Successfully connected to database');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Error in connecting with database : ' + err);
});

module.exports = db;