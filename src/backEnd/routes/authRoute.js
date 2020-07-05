const express           = require('express'); 
const router            = express.Router();
const passport          = require('passport');
const authController    = require('../controllers/authController');

router.post("/signup", authController.register);

router.post("/signin", authController.login);

module.exports = router;