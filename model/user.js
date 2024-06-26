const mongoose = require("mongoose");
const { type } = require("os");
const { PassThrough } = require("stream");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },

  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
