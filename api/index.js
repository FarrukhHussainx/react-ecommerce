require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");

const striperoutes = require("./route");
const products = require("./router/products");
const users = require("./router/user");
const cart = require("./router/cart");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/stripe", striperoutes);
app.use("/api/products", products);
app.use("/api", users);
app.use("/api/cart", cart);

app.listen(5000, () => {
  console.log("listening at 5000");
});
