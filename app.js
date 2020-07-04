const express       = require("express");
const app           = express();

const session       = require('express-session'); //get express session
const db            = require('./src/backEnd/config/mongoose'); //get mongoose configuration
const mongoStore    = require('connect-mongo')(session); //store session in database avoid loss of session on server restart
const passportLocal = require('./src/backEnd/config/passport'); //get passport configuration

const cors          = require('cors'); //for cross-origin request
const routes        = require("./src/backEnd/routes") //it will automatically take index name file

//use dot env file
require('dotenv').config();
const PORT = process.env.PORT || "5000";

// Express session to create session for the user.
app.use(session(
    {
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET, //used to encode and decode the key's value in the cookie. 
        saveUninitialized: false, //not to save uninitialized request
        resave: false, // avoid overwriting of data
        cookie:
        {
            maxAge:(1000 * 60 * 60 * 24 * 30) // age for which the user will be logged in i.e. 30 days
        },
        // mongo store is used to store the session cookie in the db
        store:new mongoStore(
            {
                mongooseConnection: db,// connect session with mongo DB
                autoRemove: 'disabled'
            },
            function(error)
            {
                console.log(error||'Connect mongo Setup is working fine!');
            }
        )
    }
));

app.use(cors()); //enable cors for all requests
app.use(express.json()); //parse body
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method")); //for put and delete request
app.use(cookieParser()); //parse cookie

app.use(passport.initialize()); //initializing passport globally
app.use(passport.session()); //passport session

app.use(passport.setAuthenticatedUser); //An authentication check will be made on each passport session initialization and user details will be given to res.locals to pass them further to views (check the setAuthenticatedUser function in passport_local_strategy file in configs folder.)

//use routes
app.use('/', routes);

//Listen server
app.listen(PORT, (error) =>
{
    if(error)
    {
        console.log(`Error in running server @ port ${PORT}`);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
})