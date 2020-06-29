const mongoose      = require('mongoose');
const URL = 'mongodb://localhost:27017/TopTidings';

//connect with mongoose
mongoose.connect(process.env.MONGODB_URL || URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Successfully connected to database');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Error in connecting with database : ' + err);
});