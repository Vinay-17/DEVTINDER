const mongoose = require("mongoose");
  const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://vinayveerapaneni068_db_user:VINAYMONGODB068@nodejs.qgrvu1g.mongodb.net/devTinder")
  }
  module.exports={connectDB}