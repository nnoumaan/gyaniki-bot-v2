const FaqModel = require("../Models/FaqModel");

const faqsController = async (req, res) => {
  const data = await FaqModel.find();

  res.status(200).json({
    success: true,
    data,
  });
};



module.exports = faqsController