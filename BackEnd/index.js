require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./routes/urls");

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "https://link-shortner-frontend-opal.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
  })
);
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
