import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className=" grid grid-cols-4 gap-2 mr-2 ml-2 ">
      <div className="bg-green-200 h-48 flex justify-center items-center relative overflow-hidden">
        <img
          className="absolute top-0 object-contain"
          src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          className="absolute top-0 object-cover"
          src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          className="absolute top-0 "
          src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          className="absolute top-0 "
          src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          className="absolute top-0 "
          src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          className="absolute top-0 object-contain"
          src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
