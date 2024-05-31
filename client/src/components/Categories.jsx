import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className=" grid grid-cols-4 gap-2 mr-2 ml-2 ">
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full"
          src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/1"
        >
          Sale
        </Link>
      </div>
      <div className="bg-green-200 row-span-2 h-[392px]  flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0 object-fill h-full w-full"
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/2"
        >
          Women
        </Link>
      </div>
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full"
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/1"
        >
          New Season
        </Link>
      </div>
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full"
          src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/1"
        >
          Men
        </Link>
      </div>
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full"
          src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/1"
        >
          Accessories
        </Link>
      </div>
      <div className="bg-green-200 col-span-2 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full"
          src="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10  bg-white rounded-md p-2 border border-gray-500"
          to="/products/1"
        >
          Shoes
        </Link>
      </div>
    </div>
  );
};

export default Categories;
