import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express()
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
  path: './.env'
});

connectDB()


// (async () => {
//   try{
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     app.on("error", (error)=>{
//       console.log("Error: ", error);
//       throw error
      
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//     console.log("Connected to MongoDB successfully");

//   }catch(err){
//     console.log("ERROR : ",  err)
//     throw err
//   }
// })()