import React, { useContext, useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useParams } from "react-router-dom";
import userContext from "../context/UserContext";

const Product = () => {
  //const catId = parseInt(useParams().id);
  const context = useContext(userContext);
  const { addToCart, user } = context;

  const catId = useParams().id;
  const [showImg, setShowImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `http://localhost:5000/api/products/${catId}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleSave = () => {
    addToCart({ ...data, quantity });
  };

  return (
    <div className="flex">
      <div className="flex w-6/12">
        <div>
          <img
            className="w-10 h-10"
            src={data?.image[0]}
            alt=""
            onClick={() => {
              setShowImg(0);
            }}
          />
          <img
            className="w-10 h-10"
            src={data?.image[1]}
            alt=""
            onClick={() => {
              setShowImg(1);
            }}
          />
        </div>
        <div>
          <img className="w-20 h-20" src={data?.image[showImg]} alt="" />
        </div>
      </div>
      <div className="w-6/12">
        <h1>{data?.title}</h1>
        <h2>${data?.price}</h2>
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
          {user ? (
            <button onClick={handleSave}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
          ) : (
            <Link to="login">
              <button>PLEASE LOGIN FIRST!</button>
            </Link>
          )}
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
