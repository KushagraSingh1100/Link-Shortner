require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./routes/urls");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use("/", urlRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
