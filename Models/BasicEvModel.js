const mongoose = require("mongoose");

const basicEvSchema = new mongoose.Schema({});

const BasicEvModel = mongoose.model("bkevs", basicEvSchema);

module.exports =  BasicEvModel;
