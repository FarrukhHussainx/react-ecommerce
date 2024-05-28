import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = () => {
  const [showImg, setShowImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const img = [
    "https://images.pexels.com/photos/1068209/pexels-photo-1068209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1648535/pexels-photo-1648535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  useEffect(() => {
    // Retrieve the item from local storage on component mount
    const storedItem = localStorage.getItem("cart");
    if (storedItem) {
      setSavedItem(storedItem);
    }
  }, []);

  const handleSave = () => {
    // Save the item to local storage
    localStorage.setItem("cart", { name: "ali" });
  };
  return (
    <div className="flex">
      <div className="flex w-6/12">
        <div>
          <img
            className="w-10 h-10"
            src={img[0]}
            alt=""
            onClick={() => {
              setShowImg(0);
            }}
          />
          <img
            className="w-10 h-10"
            src={img[1]}
            alt=""
            onClick={() => {
              setShowImg(1);
            }}
          />
        </div>
        <div>
          <img className="w-20 h-20" src={img[showImg]} alt="" />
        </div>
      </div>
      <div className="w-6/12">
        <h1>Title</h1>
        <h2>$323</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus,
          suscipit facilis eaque quod ad minima quasi, vero esse sequi autem
          dicta tenetur adipisci similique? Fuga voluptatum aperiam dolorum
          eveniet!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div>
          <button onClick={handleSave}>
            <AddShoppingCartIcon /> ADD TO CART
          </button>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
