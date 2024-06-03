const express = require("express")
const commonController = require("../Controllers/commonController.js")

const routes = express.Router()




routes.post("/commonChat",commonController)


module.exports = routes