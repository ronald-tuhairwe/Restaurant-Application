"use strict";
/*eslint-disable */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const foodRouter = require("./routes/foodRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRouter);
app.use("/foods", foodRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, data: err.message });
});

mongoose.connect("mongodb://127.0.0.1:27017/FinalYearProject").then(() => {
  app.listen(3000, () => {
    console.log("Connected !");
  });
});