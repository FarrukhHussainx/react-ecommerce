import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import FeaturdProducts from "../components/FeaturdProducts";
import Categories from "../components/Categories";
import GetTouch from "../components/GetTouch";

const Home = () => {
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
    <>
      {data && (
        <div>
          <Slider />
          <FeaturdProducts type="featured" data={data.slice(0, 4)} />
          <Categories />
          <FeaturdProducts
            type="trending"
            data={[...data].reverse().slice(0, 4)}
          />
          <GetTouch />
        </div>
      )}
    </>
  );
};

export default Home;
