const mongoose = require("mongoose");
const { Schema } = mongoose;

const infoSchema = new Schema(
  {
    contact: [
      {
        name: String,
        email: String,
        subject: String,
        information: String,
      },
    ],
    bookTable: [
      {
        name: String,
        email: String,
        phone: String,
        date: String,
        time: String,
        people: String,
        message: String,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Model = mongoose.model("Info", infoSchema);
module.exports = Model;
