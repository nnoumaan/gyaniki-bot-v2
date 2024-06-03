const mongoose = require("mongoose");

const greetSchema = new mongoose.Schema({
  greetings: { type: Array },
});

const GreetModels = mongoose.model("greetings", greetSchema);

module.exports =  GreetModels;
