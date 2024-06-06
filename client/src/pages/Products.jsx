import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useLocation, useParams } from "react-router-dom";

const Products = () => {
  let { id } = useParams();
  console.log(id);
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [datax, setData] = useState();
  let data;

  if (id == "women" || id == "men" || id == "children") {
    data = datax?.filter((user) => user.category == id);
  } else if (id == "sale") {
    data = datax?.filter((user) => user.sale);
  } else if (id == "isnew") {
    data = datax?.filter((user) => user.isnew);
  } else {
    data = datax;
  }

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchProducts = async () => {
      try {
        const url = "https://react-ecommerce-five-puce.vercel.app/api/products";
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
    <div className="">
      <div className=" ">
        <img
          className="h-96 w-full object-cover"
          src="https://img.freepik.com/free-photo/shocked-frightened-insecure-panicking-woman-blond-hairstyle-silver-dress-touch-head-pop-eyes_1258-229347.jpg?w=1060&t=st=1717131251~exp=1717131851~hmac=be96095713457996afb77a4239836a0aecfe117eb06e9b219a24830f8af39e8e"
          alt=""
        />
        <div className="flex gap-8 flex-wrap mt-10 m-[100px]">
          {data?.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
