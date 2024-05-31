import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className=" grid grid-cols-4 gap-2 mr-2 ml-2 ">
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full object-cover"
          src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/sale"
        >
          Sale
        </Link>
      </div>
      <div className="bg-green-200 row-span-2 h-[392px]  flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full object-cover"
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/women"
        >
          Women
        </Link>
      </div>
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full object-cover"
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/isnew"
        >
          New Season
        </Link>
      </div>
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full object-cover"
          src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/men"
        >
          Men
        </Link>
      </div>
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full object-cover"
          src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10 bg-white rounded-md p-2 border border-gray-500"
          to="/products/children"
        >
          Children
        </Link>
      </div>
      <div className="bg-green-200 col-span-2 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0  h-full w-full object-cover"
          src="https://images.pexels.com/photos/1117256/pexels-photo-1117256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <Link
          className="z-10  bg-white rounded-md p-2 border border-gray-500"
          to="/products/All"
        >
          All Clothes
        </Link>
      </div>
    </div>
  );
};

export default Categories;
