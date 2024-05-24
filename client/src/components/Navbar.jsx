import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div
        div
        className="h-20 mr-7 ml-7 flex justify-between  items-center text-gray-700"
      >
        <Link to="/" className="flex items-center ">
          <img
            className="w-16 h-16"
            src="https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?t=st=1716012918~exp=1716016518~hmac=d43a7cc611161eb320a572b5a818d9eafce4e554bcdb3363570c04a2513ff898&w=740"
          />
          <div className="text-xl font-bold">Smart Shoping</div>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="products/1" className="hover:text-gray-900 hover:underline">
            Men
          </Link>
          <Link to="products/2" className="hover:text-gray-900 hover:underline">
            Women
          </Link>
          <Link to="products/3" className="hover:text-gray-900 hover:underline">
            Children
          </Link>
          <div
            className="flex relative cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ShoppingCartOutlinedIcon className=" w-7 h-7" />
            <span className="absolute flex items-center justify-center text-xs  w-5 h-5 -right-3 -top-3 bg-blue-400 rounded-full">
              13
            </span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
