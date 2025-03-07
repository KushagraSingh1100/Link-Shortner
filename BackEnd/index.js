require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./routes/urls");

const app = express();
const PORT = process.env.PORT;

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
