const User                      = require('../models/userModel');
const bcrypt                    = require('bcrypt');
const jwt                       = require('jsonwebtoken');
const authValidation    = require('../validations/authValidation');
const saltRound                 = 10;

require('dotenv').config;

module.exports = {
    register: async (req, res) => {
        //validate user details
        const errMsg = await authValidation.userRegisterValidation(req.body);
        if (errMsg.error != null) {
            return res.status(400).send(errMsg.error.details[0].message);
        }

        //destructure req.body data
        const { name, email, password, confirmedPass } = req.body;
        
        //check if email is unique or not
        const isEmailExist = await User.find({email: email});
        if (isEmailExist.length > 0) {
            return res.status(401).send("email already exist");
        }
        
        //chk if both password same or not
        if (password != confirmedPass) {
            console.log("password not match");
            return res.status(401).send("password not match");
        }
        
        //create hash of password
        try {
            const salt = await bcrypt.genSalt(saltRound);
            const hash = await bcrypt.hash(password, salt)
            
            try {
                //now save user into database
                const newUser = new User({ name: name, email: email, password: hash });
                await newUser.save();
                res.json(newUser);
            } 
            catch (err) {
                console.log("error in saving user to database ", err);
                return res.status(402).send("can't save user to database");
            }
            
        } 
        catch (err) {
            console.log("can't hash password ", err);   
            return res.status(402).send("can't create hash of password");
        }
    },

    login: async (req, res) => {
        //validate user details
        const errMsg = authValidation.userLoginValidation(req.body);
        if (errMsg.error != null) {
            return res.status(400).send(errMsg.error.details[0].message);
        }

        //destructure req.body details
        const { email, password } = req.body;

        //check if email exist
        const findUser = await User.find({email: email});
        if (findUser.length == 0) {
            //if no user found with given email
            return res.status(402).send("email not exist");
        }

        try {
            //compare password
            const match = await bcrypt.compare(password, findUser[0].password);
            //if match == true then password matches and user logged in
            if (match) {
                return res.send("user logged in");
            }
            else {
                return res.status(402).send("password not match");
            }
        } 
        catch (err) {
            console.log("error in matching password ", err);
            return res.status(402).send("error in matching password");
        }
 
    } 
}