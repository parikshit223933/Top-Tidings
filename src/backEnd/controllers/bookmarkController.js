const User      = require('../models/userModel');
const News      = require('../models/newsModel');

module.exports = {
    addBookmark: async (req, res) => {
        console.log(req);
        const newNews = req.body;
        console.log(newNews);
        const news = new News(newNews);
        //find user who bookmarked news
        int 
    },

    delBookmark: async (req, res) => {

    }
}