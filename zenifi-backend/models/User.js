const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  accountTier: {
    type: String,
    required: true,
    default: "pending",
  },
  time: {
    type: Number,
    required: true,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
