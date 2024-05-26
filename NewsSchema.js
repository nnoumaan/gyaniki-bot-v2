const mongoose = require("mongoose")


const NewsSchema = new mongoose.Schema({
    question:{
        type:String
    },
    answer:{
        type:Array
    }
})

const NewsModel = mongoose.model("blogs",NewsSchema)


module.exports = NewsModel