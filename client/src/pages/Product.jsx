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
    <div className="flex m-5 ">
      <div className="flex w-6/12">
        <div className="w-3/12">
          <img
            className="w-32 h-32 object-cover"
            src={data?.image[0]}
            alt=""
            onClick={() => {
              setShowImg(0);
            }}
          />
          <img
            className="w-32 h-32 object-cover"
            src={data?.image[1]}
            alt=""
            onClick={() => {
              setShowImg(1);
            }}
          />
        </div>
        <div className="w-9/12">
          <img
            className="w-96 h-96 object-cover"
            src={data?.image[showImg]}
            alt=""
          />
        </div>
      </div>
      <div className="w-6/12">
        <h1 className="text-xl">{data?.title}</h1>
        <h2 className="text-lg">
          $<span className="text-blue-500">{data?.price}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Elevate your wardrobe with our Classic Fit Cotton Shirt, the epitome
          of timeless style and comfort. Crafted from 100% premium cotton, this
          shirt offers a soft, breathable feel that ensures all-day comfort.
        </p>
        <div className="flex mt-5 mb-5">
          <button
            className="mr-2 text-xl"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <div className="pt-2 pb-2 pr-3 pl-3 bg-slate-200 border border-gray-600 rounded-md">
            {quantity}
          </div>

          <button
            className="ml-2 text-xl"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="bg-blue-500 p-2  rounded-md text-white">
          {user ? (
            <button onClick={handleSave}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
          ) : (
            <Link to="/login">
              <button>PLEASE LOGIN FIRST!</button>
            </Link>
          )}
        </div>
        <div>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div>
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
