import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import userContext from "../context/UserContext";

const FeaturdProducts = (props) => {
  // const context = useContext(userContext);
  // const { data } = context;
  // console.log(data);

  return (
    <div className="m-[100px] ">
      <div className="flex items-center mb-12">
        <div className="flex-[2_2_0%] text-xl font-bold capitalize">
          {props.type} Products
        </div>
        <p className="flex-[3_3_0%] text-gray-500 text-xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          excepturi a, aspernatur at illo eius beatae consequuntur quisquam
          sapiente sint illum quos, numquam voluptatum dolores nam accusantium
          pariatur, odit voluptate.
        </p>
      </div>
      <div className="flex gap-8 flex-wrap">
        {props.data?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturdProducts;
