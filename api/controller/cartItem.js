const Cart = require("../models/cart");

exports.getAllCart = async (req, res, next) => {
  try {
    const item = await Cart.find({ user: req.body.user });
    if (item == null) {
      return res.status(404).json({ message: "Item not found" });
    }
    const lg = item.length;
    res.status(200).json({ length: lg, item });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.postCartItem = async (req, res) => {
  const {
    title,
    isnew,
    sale,
    price,
    oldprice,
    image,
    category,
    user,
    quantity,
  } = req.body;
  const item = new Cart({
    title,
    isnew,
    sale,
    price,
    oldprice,
    image,
    user,
    quantity,
    category,
  });
  try {
    const newItem = await item.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSingleCart = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Delete
exports.deleteSingleCart = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Item not found" });
    }
    await Cart.findByIdAndDelete(item.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.getTopFiveItemsByPrice = async function getTopFiveItemsByPrice() {
//   try {
//     const topFiveItems = await pdt.aggregate([
//       { $sort: { price: -1 } }, // Sort items by price in descending order
//       { $limit: 4 }, // Limit the results to the top five
//     ]);

//     return topFiveItems;
//   } catch (err) {
//     console.error("Error retrieving top five items by price:", err);
//     throw err;
//   }
// };

// // Update
// app.put('/items/:id', async (req, res) => {
//     try {
//       const item = await Item.findById(req.params.id);
//       if (item == null) {
//         return res.status(404).json({ message: 'Item not found' });
//       }
//       if (req.body.name != null) {
//         item.name = req.body.name;
//       }
//       if (req.body.quantity != null) {
//         item.quantity = req.body.quantity;
//       }
//       const updatedItem = await item.save();
//       res.json(updatedItem);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // Delete
//   app.delete('/items/:id', async (req, res) => {
//     try {
//       const item = await Item.findById(req.params.id);
//       if (item == null) {
//         return res.status(404).json({ message: 'Item not found' });
//       }
//       await item.remove();
//       res.json({ message: 'Item deleted' });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
