// index.js
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MTj5ELpSKrpHwNCDX4wO8wv88gyFhLaFEFFArYUCaXtiFKFXgfaEXScklsZECKTYQMKMqHRVdm5zEYbNcTC84QD00qKeKz4Rv"
);
const app = express();
app.use(cors());
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint
app.post("/data", async (req, res) => {
  const { products } = req.body;

  const lineItem = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        images: [product.img],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.price,
  }));
  console.log(lineItem.price_data.product_data);
  const seesion = await stripe.checkout.sessions.create({
    payment_method_type: ["card"],
    line_items: lineItem,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ id: seesion.id });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
