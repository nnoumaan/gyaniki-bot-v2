const GreetModel = require("../Models/GreetModel.js")

const greetController = async(req,res)=>{

    const  data = await GreetModel.find()


   

   res.status(200).json({
    status:"Success",
    message:"Data received",
    data:data[0].greetings
   })


}



module.exports = greetController