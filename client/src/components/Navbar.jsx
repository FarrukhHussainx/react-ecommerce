import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import Cart from "./Cart";
import userContext from "../context/UserContext";

const Navbar = () => {
  const context = useContext(userContext);
  const { user, cart } = context;
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="h-20 mr-7 ml-7 flex justify-between  items-center text-gray-700">
        <Link to="/" className="flex items-center ">
          <img
            className="w-16 h-16"
            src="https://img.freepik.com/free-vector/ecommerce-campaign-concept-illustration_114360-8432.jpg?t=st=1716012918~exp=1716016518~hmac=d43a7cc611161eb320a572b5a818d9eafce4e554bcdb3363570c04a2513ff898&w=740"
          />
          <div className="text-xl font-bold">Smart Shoping</div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="products/men"
            className="hover:text-gray-900 hover:underline"
          >
            Men
          </Link>
          <Link
            to="products/women"
            className="hover:text-gray-900 hover:underline"
          >
            Women
          </Link>
          <Link
            to="products/children"
            className="hover:text-gray-900 hover:underline"
          >
            Children
          </Link>
          <div>
            {user ? (
              <div className="mr-2 ml-2 flex gap-1 justify-center items-center">
                <PersonTwoToneIcon />
                <h1 className="text-blue-500">{user.username}</h1>
              </div>
            ) : (
              <Link
                to="login"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Login
              </Link>
            )}
          </div>
          <div
            className="flex relative cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ShoppingCartOutlinedIcon className=" w-7 h-7" />
            <span className="absolute flex items-center justify-center text-xs  w-5 h-5 -right-3 -top-3 bg-blue-400 rounded-full">
              {cart ? cart.length : 0}
            </span>
          </div>
        </div>
      </div>
      {open && <Cart cart={cart} />}
    </div>
  );
};

export default Navbar;
