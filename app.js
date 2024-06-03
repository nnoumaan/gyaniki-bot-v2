const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
app.use(cors())
app.use(express.json())

// Greet Routes Import

const greetRoutes = require("./routes/greetingRoute")

//  Common Route
const commonRoute = require("./routes/commonRoute")



// Greeting Routes

app.use("/api/v1",greetRoutes)

app.use("/api/v1",commonRoute)





module.exports =  app;
