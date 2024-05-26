const app = require("./app.js");
const mongoose = require("mongoose");
require("./config/db.js")








const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is started on ${PORT}`);
})

