import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import userRouter from "./routes/user.routes.js";
const app = express()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use user routes
app.use("/api/v1/users", userRouter);


dotenv.config({
  path: './.env'
});

connectDB()
.then(()=>{
  app.listen(process.env.PORT||3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })
})

.catch((err) => {
  console.log("Error connecting to MongoDB: ", err);
  throw err;
});


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