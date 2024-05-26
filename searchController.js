const NewsModel = require("./NewsSchema");
const searchController = async (req, res) => {






  const myquery = [
    {
      $search: {
        index: 'askGyaniki',
        text: {
          query: req.body.question,
          path: ["question","answer.description","answer.heading"]
        }
      }


    },{
      '$limit': 3  }
  ];
  const result = await NewsModel.aggregate(myquery);
  


  res.status(200).json({
    success: true,
    message: "Query Recieved",
    data:result
  });
};

module.exports = searchController;
