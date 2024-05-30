const express = require("express");

const {
  getAllCart,
  postCartItem,
  deleteSingleCart,
  getSingleCart,
} = require("../controller/cartItem");

const router = express.Router();

router.get("/", getAllCart);
router.post("/", postCartItem);
router.get("/:id", getSingleCart);
router.delete("/:id", deleteSingleCart);

module.exports = router;
