import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import urlRoute from "./routes/urls.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", urlRoute);

app.get("/", (req, res) => {
  res.json({ message: "API is working! 🚀" });
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));

export default app;
