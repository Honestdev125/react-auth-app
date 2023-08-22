const e = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const OrganizationSchema = new Schema({
  organId: {
    type: String,
    required: true
  },
  organName: {
    type: String,
    required: true
  },
  personalName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
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

module.exports = User = mongoose.model("organization", OrganizationSchema);