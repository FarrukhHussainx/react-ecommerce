import React from "react";

const Footer = () => {
  return (
    <div className="m-[100px]">
      <div className=" grid grid-cols-4 gap-6">
        <div className="">
          <h1 className="text-lg font-bold">Categories</h1>
          <ul className="text-xs">Men</ul>
          <ul className="text-xs">Women</ul>
          <ul className="text-xs">Children</ul>
          <ul className="text-xs">Shoes</ul>
          <ul className="text-xs">Accessories</ul>
          <ul className="text-xs">New Arrivals</ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">Links</h1>
          <ul className="text-xs">FAQ</ul>
          <ul className="text-xs">Pages</ul>
          <ul className="text-xs">Stores</ul>
          <ul className="text-xs">Compare</ul>
          <ul className="text-xs">Cookies</ul>
        </div>
        <div>
          <h1 className="text-lg font-bold">About</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            temporibus expedita aperiam quod voluptatem quia voluptates autem
            omnis placeat doloribus rem facilis doloremque iusto, ea obcaecati
            sit quaerat maxime nisi.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Contact</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            temporibus expedita aperiam quod voluptatem quia voluptates.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-gray-500 flex gap-3 items-center">
          <h2 className="text-xl font-bold text-blue-500">Smart Shoping</h2>
          <h3 className="text-sm">@Copyright 2024, All Rights Reserved</h3>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
