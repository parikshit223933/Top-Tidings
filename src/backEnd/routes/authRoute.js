const express           = require('express'); 
const router            = express.Router();
const authController    = require('../controllers/authController');

router.post("/signup", authController.register);

router.post("/signin", passport.authenticate('local', {failureRedirect:'/signin'}), authController.login);

module.exports = router;