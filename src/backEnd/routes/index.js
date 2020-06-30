const express           = require('express');
const router            = express.Router();
const authRoutes        = require('./authRoute');
const bookmarkRoutes    = require('./bookmarkRoute'); 

router.use('/', authRoutes);
router.use('/user/:user_id/', bookmarkRoutes);

module.exports = router;