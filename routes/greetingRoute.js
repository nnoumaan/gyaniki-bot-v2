const express = require("express");
const routes = express.Router();

// Greet Controller Import
const greetController = require("../Controllers/greetController.js");

// Routes for Greetings

routes.get("/greet", greetController);


module.exports = routes