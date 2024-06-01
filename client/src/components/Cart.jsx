import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = ({ cart }) => {
  let pr = 0;
  return (
    <div className="absolute top-[80px] z-30 right-5 bg-white p-3 border border-gray-500 rounded-md">
      <h1>Products in you cart</h1>
      {cart.item?.map((item) => (
        <div className="mt-2 mb-2" key={item._id}>
          <div className="hidden">{(pr += item.price)}</div>

          <div className="flex items-center justify-center gap-5">
            <img className="w-5 h-5" src={item.image[0]} alt="" />
            <div>
              <h1>{item.title}</h1>
              <p>Lorem ipsum dolor sit amet...</p>
              <div className="text-blue-500">
                {item.quantity} X {item.price}
              </div>
            </div>
            <DeleteOutlinedIcon className="text-red-900" />
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center">
        <h1>SUBTOTAL</h1>
        <h1>${pr}</h1>
      </div>
      <button className="mt-2 mb-2 text-white bg-blue-500 p-2">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
