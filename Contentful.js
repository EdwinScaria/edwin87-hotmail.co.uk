const mongoose = require("mongoose");

const ContentfulSchema = new mongoose.Schema({
  space: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Contentful", ContentfulSchema);
