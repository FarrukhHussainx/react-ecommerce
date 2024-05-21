import React from "react";
import Slider from "../components/Slider";
import FeaturdProducts from "../components/FeaturdProducts";
import Categories from "../components/Categories";
import GetTouch from "../components/GetTouch";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturdProducts type="featured" />
      <Categories />
      <FeaturdProducts type="trending" />
      <GetTouch />
    </div>
  );
};

export default Home;
