const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String
    },

    URL: {
        type: String
    },

    imageURL: {
        type: String
    },
    
    description: {
        type: String
    }
})

const News = mongoose.model("News", newsSchema);

module.exports = News;