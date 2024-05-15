const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

const server = app.get("/", (req, res) => {
  res.json({
    message: "Good morning, Maria",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    server.listen(3000, () => {
      console.log("listening on port 3000...");
    });
  })
  .catch((err) => console.log(err));
