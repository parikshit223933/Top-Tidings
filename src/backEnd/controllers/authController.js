const User                  = require('../models/userModel');
const bcrypt                = require('bcrypt');
const passport              = require('passport');
const jwt                   = require('jsonwebtoken');
const config                = require('../config/index');
const authValidation        = require('../validations/authValidation');
const saltRound             = 10;

module.exports = {
    register: async (req, res) => {
        //validate user details
        const errMsg = await authValidation.userRegisterValidation(req.body);
        if (errMsg.error != null) {
            return res.json({
                status: 404,
                message: errMsg.error.details[0].message 
            })
        }

        //destructure req.body data
        const { name, email, password, confirmPass } = req.body;
        
        //check if email is unique or not
        const isEmailExist = await User.find({email: email});
        if (isEmailExist.length > 0) {
            return res.json({
                status: 404,
                message: "email already exist" 
            })
        }
        
        //chk if both password same or not
        if (password != confirmPass) {
            console.log("password not match");
            return res.json({
                status: 404,
                message: "password not match" 
            })
        }
        
        //create hash of password
        try {
            const salt = await bcrypt.genSalt(saltRound);
            const hash = await bcrypt.hash(password, salt);
            
            try {
                //now save user into database
                const newUser = await User.create({ name: name, email: email, password: hash });
                console.log("New User Register", newUser);
                return res.json({
                    status: 200,
                    message: "User successfully registered"
                })               
            } 
            catch (err) {
                console.log("error in saving user to database ", err);
                return res.json({
                    status: 404,
                    message: "can't save user to database" 
                })
            }
        } 
        catch (err) {
            console.log("can't hash password ", err);   
            return res.json({
                status: 404,
                message: "can't create hash of password" 
            })
        }
    },

    login: async (req, res) => {
        //validate user details
        const errMsg = await authValidation.userLoginValidation(req.body);
        if (errMsg.error != null) {
            return res.json({
                status: 404,
                message: errMsg.error.details[0].message 
            })
        }

        //destructure req.body details
        const { email, password } = req.body;

        //check if email exist
        const user = await User.findOne({email: email});
        if (!user) {
            //if no user found with given email
            return res.json({
                status: 404,
                message: "email not exist" 
            })
        }

        try {
            //compare password
            const match = await bcrypt.compare(password, user.password);
            //if match == true then password matches and user logged in
            if (!match) {
                return res.json({
                    status: 404,
                    message: "password not match" 
                })
            }   
            try {
                //assign jwt token to user
                const token = jwt.sign({id: user._id}, 
                                        config.secretOrKey, 
                                        { expiresIn: '24h' }
                                    ); 
                console.log("user logged in ", user, " with token ", token);
                await passport.authenticate('local', {failureRedirect:'/signin'})
                console.log("check logged in or not", req.user);
                return res.json({
                    status: 200,
                    message: "user successfully logged in",
                    user: user,
                    jwt: token
                })
            } 
            catch (err) {
                console.log("error in assigning token ", err);
                return res.json({
                    status: 404,
                    message: "error in assigning code" 
                })
            }
        } 
        catch (err) {
            console.log("error in matching password ", err);
            return res.json({
                status: 404,
                message: "error in matching password" 
            })
        }
    } 
}