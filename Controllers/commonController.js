// Model Imports

const BasicEvModel = require("../Models/BasicEvModel");

// Controller Import
const basicEvController = require("./basicEvController");
const {evComponentController,evSearchController} = require("./evComponentController");
const faqsController = require("./faqsController");

const commonController = async (req, res) => {


  let data = "";

  if (req.body.data === "Basic knowlegde of EV") {
    data = await BasicEvModel.find();
  }

  if(req.body.data === "EV component study"){
    evComponentController(req,res)
    return
  }

  if(req.body.data === "FAQ"){
    faqsController(req,res)
    return
  }

  if(req.body.data === "BMS" || req.body.data === "Battery"||req.body.data ==="Motor" || req.body.data === "Motor Controller" || req.body.data === "DC Converter" || req.body.data === "Inverter" || req.body.data === "ADAS" || req.body.data === "VCU" || req.body.data === "Wiring Harness"){


  
    evSearchController(req,res)
    return
  }

  res.status(200).json({
    success: "true",
    data,
  });
};

module.exports = commonController;
