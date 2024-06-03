const mongoose = require("mongoose")



const faqSchema = new mongoose.Schema({})

const FaqModel = mongoose.model("faqs",faqSchema)



module.exports = FaqModel