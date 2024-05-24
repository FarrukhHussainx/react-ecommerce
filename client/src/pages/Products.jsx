import React, { useState } from "react";
import Card from "../components/Card";

const Products = () => {
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState(null);

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
    <div className="flex w-full ">
      <div className="w-3/12 ml-5">
        <div>
          <h1>Product Categories</h1>
          <div>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Skart</label>
          </div>
          <div>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div>
          <h1>Filter by price</h1>
          <div>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span>{price}</span>
          </div>
          <div className="">
            <h2>Sort by</h2>
            <div className="">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12 mr-5">
        <img
          className=""
          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg"
          alt=""
        />
        <div className="flex gap-8 flex-wrap">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
