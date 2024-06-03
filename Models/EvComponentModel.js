const mongoose = require("mongoose")




const evComponentSchema = new mongoose.Schema({})

const EvComponentModel = mongoose.model("ecs",evComponentSchema)

module.exports = EvComponentModel