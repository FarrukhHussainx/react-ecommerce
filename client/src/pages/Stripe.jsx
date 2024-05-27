import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const Stripe = () => {
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
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51MTj5ELpSKrpHwNC9BfN99eVtDdfeRLnRns5fjdKv2ceyZ6pZB1hNQPmNANykEfHCBwmn9KOsqAs0iAGJlx2tcLu00PvWP1g8j"
    );
    const body = {
      products: data,
    };
    const header = {
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    });
    const session = await response.json();
    const result = stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <button className="" onClick={makePayment}>
      pay ypur bill
    </button>
  );
};

export default Stripe;
