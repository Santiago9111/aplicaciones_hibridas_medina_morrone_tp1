const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String },
  description: { type: String },
  dangerLevel: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Location", locationSchema);