const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: String,
    orders:[ {
        name: String,
        category: String,
        price: Number,
        information: String,
      }]
  },
  {
    versionKey: false,
  }
);

const Model = mongoose.model("User", userSchema);
module.exports = Model;
