import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import urlRoute from "./routes/urls.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", urlRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
