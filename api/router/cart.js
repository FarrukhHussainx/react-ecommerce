const express = require("express");

const {
  getAllCart,
  postCartItem,
  deleteSingleCart,
  getSingleCart,
  deleteMany,
} = require("../controller/cartItem");

const router = express.Router();

router.get("/", getAllCart);
router.post("/", postCartItem);
router.get("/:id", getSingleCart);
router.delete("/:id", deleteSingleCart);
router.delete("/", deleteMany);

module.exports = router;
