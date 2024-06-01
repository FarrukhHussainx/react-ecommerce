import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    // div#id>img+p+hr
    <Link to={`/product/${item._id}`}>
      <div className="w-60">
        <div className="w-full h-[300px]  overflow-hidden">
          <img
            className="w-full h-full z-10  object-cover shadow-md"
            src={item.image[0]}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-lg">{item.title}</h1>
          <div className="flex gap-2">
            <h1 className="line-through text-gray-400">${item.oldprice}</h1>
            <h1>${item.price}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
