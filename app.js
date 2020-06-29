const express       = require("express");
const app           = express();
const session       = require('express-session');
const mongoose      = require('mongoose');

const routes        = require("./src/backEnd/routes") //it will automatically take index name file
const PORT          = process.env.PORT || "5000";

//connect with Mongo DB
require('./src/backEnd/config/mongoose');

//create session
app.use(session(
    {
        name: 'TopTidings',
        secret: 'noSecret',
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
        console.log(`Error in running server @ port ${PORT}`);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
})