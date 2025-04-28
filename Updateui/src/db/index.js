import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Construct the connection URI with DB_NAME
    const uri = `${process.env.MONGODB_URI.endsWith('/') ? process.env.MONGODB_URI : process.env.MONGODB_URI + '/'}${DB_NAME}`;

    
    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully");
    console.log(`MONGODB HOST: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
