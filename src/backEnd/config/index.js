require("dotenv").config();

module.exports = {
    port: process.env.PORT || 5000,
    sessionName: process.env.SESSION_NAME,
    sessionSecret: process.env.SESSION_SECRET,
    secretOrKey: process.env.JWT_SECRET,
};