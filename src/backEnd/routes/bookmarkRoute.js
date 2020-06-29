const express               = require('express');
const router                = express.Router();
const bookmarkController    = require('../controllers/bookmarkController'); 

router.post('/bookmark/add', bookmarkController.addBookmark);

router.post('/bookmark/add', bookmarkController.delBookmark);

module.exports = router