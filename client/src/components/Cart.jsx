import React from "react";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1553859943-a02c5418b798?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long Sleve T-Shert",
      decs: "lorem the shorem bla nla sjdh jsh hajhsd hjdg jdh kjsdh",
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
      decs: "lorem the shorem bla nla sjdh jsh hajhsd hjdg jdh kjsdh",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="absolute top-[80px] z-30 right-5 bg-white p-3 ">
      <h1>Products in you cart</h1>
      {data?.map((item) => (
        <div key={item.id}>
          <img className="w-5 h-5" src={item.img} alt="" />
          <div>
            <h1>{item.title}</h1>
            <p>{item.decs.substring(0, 1000)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
