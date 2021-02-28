const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
    },
    Fname: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Too short"],
      maxlength: [32, "Too long"],
    },
    Lname: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Too short"],
      maxlength: [32, "Too long"],
    },
    btcAddress: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
