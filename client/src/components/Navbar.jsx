import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import Cart from "./Cart";
import userContext from "../context/UserContext";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";

const Navbar = () => {
  const context = useContext(userContext);
  const { user, cart } = context;
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="h-20 mr-7 ml-7 flex justify-between  items-center text-gray-700">
        <Link to="/" className="flex justify-center items-center ">
          <ShoppingBagTwoToneIcon className="text-blue-500 " />
          <div className="text-lg font-bold">Smart Shoping</div>
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
