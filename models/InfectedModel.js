const mongoose = require("mongoose");

const infectedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String },
  stage: { type: String },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Infected", infectedSchema);