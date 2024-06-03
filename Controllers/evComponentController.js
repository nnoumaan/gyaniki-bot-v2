const EvComponentModel = require("../Models/EvComponentModel");

const EvComBtns = require("../Models/EvComBtns")

const evComponentController = async (req, res) => {
  const data = await EvComBtns.find();


  res.status(200).json({
    success: true,
    data,
  });
};

const evSearchController = async (req, res) => {


  const myquery = [
    {
      $search: {
        index: "ecsSearch",
        text: {
          query: `${req.body.data}Questions`,
          path: ["steps.keywords"],
        },
      },
    },
  ];

  const data = await EvComponentModel.aggregate(myquery);


  res.status(200).json({
    success: true,
    data,
  });
};

module.exports = { evComponentController, evSearchController };
