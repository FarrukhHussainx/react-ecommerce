import React from "react";
import { Link } from "react-router-dom";

const GetTouch = () => {
  return (
    <div className="w-full bg-blue-500 flex items-center p-4 justify-center gap-6">
      <div>BE IN TOUCH WITH US!</div>
      <div className="">
        <input
          className="rounded-s-sm  p-2"
          type="email"
          placeholder="Enter your email"
        />
        <Link className="rounded-e-sm bg-black text-white p-2" to="/">
          Join us
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default GetTouch;
