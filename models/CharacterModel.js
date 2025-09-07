const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  role: { type: String },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Character", characterSchema);