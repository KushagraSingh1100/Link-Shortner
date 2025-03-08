require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./routes/urls");

const app = express();
const PORT = process.env.PORT;

app.UseCors((x) =>
  x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed((origin) => true)
    .AllowCredentials()
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
