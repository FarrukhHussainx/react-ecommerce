const mongoose = require("mongoose");
const { Schema } = mongoose;

const cart = new Schema({
  title: String,
  isnew: Boolean,
  sale: Boolean,
  date: { type: Date, default: Date.now },
  price: Number,
  oldprice: Number,
  image: [],
  user: String,
  quantity: Number,
  category: String,
});
const Cart = mongoose.model("cart", cart);
module.exports = Cart;
