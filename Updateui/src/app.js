import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Ensure CORS_ORIGIN is defined in your .env file
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000'; // Default to localhost if not set

app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));  // Ensure 'public' folder exists in your project
app.use(cookieParser());

// Router
import userRouter from "./routes/user.routes.js";

// Declare routers
app.use("/api/v1/users", userRouter);

export default app;
