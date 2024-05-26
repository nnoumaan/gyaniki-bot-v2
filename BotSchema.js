const mongoose =require("mongoose")



const BotSchemas = new mongoose.Schema({

    bot_response:{
        type:Object
    }

})



const BotModel = mongoose.model("bots",BotSchemas)


module.exports = BotModel