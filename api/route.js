const express = require("express");

const stripe = require("stripe")(
  "sk_test_51MTj5ELpSKrpHwNCDX4wO8wv88gyFhLaFEFFArYUCaXtiFKFXgfaEXScklsZECKTYQMKMqHRVdm5zEYbNcTC84QD00qKeKz4Rv"
);
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get Response from");
  res.json({ message: "it works" });
});

router.post("/", (req, res, next) => {
  console.log(req.body.token);
  const { token, amount } = req.body;
  const idemtencyKey = uuidv4();

  return stripe.cuctomers
    .create({
      email: token.email,
      source: token,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: amount * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
        },
        { idemtencyKey }
      );
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
