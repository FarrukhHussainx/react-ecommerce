const express = require("express");

const {
  getAllProduct,
  postProduct,
  getProduct,
  getTopFiveItemsByPrice,
} = require("../controller/products");

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", postProduct);
router.get("/:id", getProduct);

module.exports = router;
