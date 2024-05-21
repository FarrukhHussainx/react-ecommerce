import React from "react";
import Card from "./Card";

const FeaturdProducts = (props) => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1553859943-a02c5418b798?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long Sleve T-Shert",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "",
      title: "Sleve T-Shert",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "",
      title: "Hat and Gee",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="m-[100px]">
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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturdProducts;
