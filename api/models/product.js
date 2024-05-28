const mongoose = require("mongoose");
const { Schema } = mongoose;

const products = new Schema({
  title: String,
  isnew: Boolean,
  sale: Boolean,
  date: { type: Date, default: Date.now },
  price: Number,
  oldprice: Number,
  image: [],
  //   quantity: Number,
  category: String,
});
const pdt = mongoose.model("products", products);
module.exports = pdt;
