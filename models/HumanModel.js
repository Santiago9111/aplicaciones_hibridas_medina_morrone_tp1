const mongoose = require("mongoose");

const humanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  status: { type: String },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Human", humanSchema);