const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const BotModel = require("./BotSchema.js");
const searchController = require("./searchController.js");

require("dotenv").config();

app.use(cors())
app.use(express.json())

const botController = async(req,res)=>{
    const respo = await BotModel.find({ })


    res.status(200).json({
        status:"Success",
        data:respo[0]


    })
}





app.get("/botData",botController)
app.post("/latestNews",searchController)





module.exports =  app;
