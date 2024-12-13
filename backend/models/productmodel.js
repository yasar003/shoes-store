const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  image: String,
  category: String,
  company: String,
  color: String,
});

const productmodel = mongoose.model("Product", productschema);
module.exports = productmodel;
