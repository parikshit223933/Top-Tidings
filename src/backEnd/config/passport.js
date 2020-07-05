const JwtStrategy       = require("passport-jwt").Strategy;
const ExtractJwt        = require("passport-jwt").ExtractJwt;
const config            = require('./index');
const User              = require('../models/userModel');

//create JWT strategy
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
};