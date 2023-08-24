const e = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const GoogleUserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
   avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = GoogleUser = mongoose.model("googleuser", GoogleUserSchema);