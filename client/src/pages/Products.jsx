import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Products = () => {
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [data, setData] = useState();
  useEffect(() => {
    // Define the async function inside useEffect
    const fetchProducts = async () => {
      try {
        const url = "http://localhost:5000/api/products";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className=" w-full ">
      <div className=" mr-5">
        <img
          className=""
          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg"
          alt=""
        />
        <div className="flex gap-8 flex-wrap">
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
