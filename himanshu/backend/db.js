const mongoose = require("mongoose");

module.exports = ()=>{
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
     mongoose.connect( "mongodb://localhost:27017/users");
      console.log("connected to db succesfully")
    }catch(error){
         console.log("could not connect")
    }
}