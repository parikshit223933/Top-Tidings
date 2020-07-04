const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;
const User              = require('../models/userModel');

//create local strategy
passport.use(new LocalStrategy({
    usernameField: 'email' //take email to create user
}, function (email, password, done)
{
    User.findOne({email: email}, function(error, user)
    {
        if(error)
        {
            console.log('Unable to find the user in the database: Passport-local-strategy', error);
            return done(error);
        }
        if(!user || user.password != password)//if the user is not found in the database or the password entered by the user does not match with that in the database
        {
            console.log('Invalid Username/password!');
            return done(null, false); //no error, but the user not found.
        }
        return done(null, user); //return user
    });
}
));

//determines which data of the user object should be stored in the session
passport.serializeUser(function(user, done)
{
    done(null, user.id); //save user id to the session
});

//deserializing the user from the key in the cookie
passport.deserializeUser(function(id, done)
{
    User.findById(id, (error, user)=>
    {
        if(error)
        {
            console.log('Error when deserializing the user: passport-local-strategy', error);
        }
        done(null, user); //retrieve user info from db using user id we saved in session during serializing user
    });
});

// isAuthenticated is a function provided by passport, check if the request is authenticated or not.
passport.checkAuthentication = (req, res, next) => {
    if(req.isAuthenticated())
    {
        return next(); //  if the user is authenticated, then proceed to the next function
    }
    // if the user is not signed in
    return res.json({
        status: 404,
        message: "You need to log in first"
    })  
}

passport.setAuthenticatedUser = (req, res, next) => {
    if(req.isAuthenticated())
    {
        //creating a variable to store current user detail
        res.locals.currentUser = req.user
    }
    next();
}

module.exports = passport;