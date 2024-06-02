import React from "react";
import { Link } from "react-router-dom";

const GetTouch = () => {
  return (
    <div className="w-full bg-blue-500 flex items-center p-4 justify-center gap-6">
      <div className="text-white text-lg">BE IN TOUCH WITH US!</div>
      <div className="flex items-center justify-center">
        <input
          className="rounded-s-sm  p-2 border-none outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <Link className="rounded-e-sm bg-black text-white p-2" to="/">
          Join us
        </Link>
      </div>
    </div>
  );
};

export default GetTouch;
