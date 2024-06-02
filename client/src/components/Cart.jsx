import React, { useContext } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import userContext from "../context/UserContext";
import { Link } from "react-router-dom";
import Stripex from "../pages/Stripe";

const Cart = ({ cart }) => {
  const context = useContext(userContext);
  const { user, deleteSingleCart } = context;
  let pr = 0;
  const handleDelete = (e) => {
    deleteSingleCart(e);
  };
  return (
    <div className="absolute top-[80px] z-30 right-5 bg-white p-3 border border-gray-500 rounded-md">
      {!user && (
        <Link to="login" className="text-red-600 ">
          Please Login First!
        </Link>
      )}
      {user && (
        <>
          <h1>Products in you cart</h1>
          {cart.item?.map((item) => (
            <div className="mt-2 mb-2" key={item._id}>
              <div className="hidden">{(pr += item.price)}</div>

              <div className="flex items-center justify-center gap-5">
                <img className="w-5 h-5 " src={item.image[0]} alt="" />
                <div>
                  <h1>{item.title}</h1>
                  <p>Lorem ipsum dolor sit amet...</p>
                  <div className="text-blue-500">
                    {item.quantity} X {item.price}
                  </div>
                </div>
                <button onClick={() => handleDelete(item._id)}>
                  <DeleteOutlinedIcon className="text-red-900" />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <h1>SUBTOTAL</h1>
            <h1>${pr}</h1>
          </div>
          <div>{cart.length == 0 ? <div></div> : <Stripex />}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
