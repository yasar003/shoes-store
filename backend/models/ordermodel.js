const mongoose = require("mongoose");

const orderschema = new mongoose.Schema({
  cartitems: Array,
  amount: String,
  status: String,
});

const ordermodel = mongoose.model("order", orderschema);
module.exports = ordermodel;
