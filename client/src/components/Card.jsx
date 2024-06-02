import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    // div#id>img+p+hr
    <Link to={`/product/${item._id}`} className="relative">
      {item.isnew && (
        <h1 className=" mt-2 ml-2 text-center absolute bg-white p-1 pr-3 pl-3 rounded-md text-blue-500 z-30">
          New
        </h1>
      )}
      <div className="w-60 ">
        <div className="w-full h-[300px]  overflow-hidden shadow-md rounded-md hover:shadow-md hover:shadow-blue-400">
          <img
            className="w-full h-full z-10  object-cover "
            src={item.image[0]}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-lg mt-2">{item.title}</h1>
          <div className="flex gap-2">
            <h1 className="line-through text-gray-400">${item.oldprice}</h1>
            <h1 className="text-blue-500">${item.price}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
