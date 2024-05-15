const express = require("express");
const mongoose = require("mongoose");

const productRouter = require("./routes/product")

const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/products/:id", productRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("listening on port 3000...");
    });
  })
  .catch((err) => console.log(err));
