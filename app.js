const express       = require("express");
const app           = express();
const session       = require('express-session');
const mongoose      = require('mongoose');

const routes        = require("./src/backEnd/routes") //it will automatically take index name file
const PORT          = process.env.PORT || "5000";

//connect with Mongo DB
mongoose.connect('mongodb://localhost:27017/TopTidings', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

//create session
app.use(session(
    {
        name: 'TopTidings',
        secret: 'mySecret',
        saveUninitialized: false,
        resave: false,
    }
));

app.use(express.json()); //parse json
app.use(express.urlencoded({ extended: false }));

//use routes
app.use('/', routes);

//Listen SERVER
app.listen(PORT, (error) =>
{
    if(error)
    {
        console.log(`Error in running the server @ port ${PORT}`);
        return;
    }
    console.log(`Server is running on the port ${PORT}`);
})