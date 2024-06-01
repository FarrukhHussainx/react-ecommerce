import axios from "axios";
import Stripe from "react-stripe-checkout";
import userContext from "../context/UserContext";
import { useContext } from "react";

function Stripex() {
  const context = useContext(userContext);
  const { deleteCart } = context;
  const handelToken = async (totalAmount, token) => {
    try {
      const response = await fetch("http://localhost:5000/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token.id,
          amount: totalAmount,
        }),
      });
      // axios.post("http://localhost:5000/api/stripe", {
      //   token: token.id,
      //   amount: totalAmount,
      // });
      deleteCart();
    } catch (error) {
      console.log(error);
    }
  };

  const tokenHandler = (token) => {
    handelToken(100, token);
  };
  return (
    <Stripe
      stripeKey="pk_test_51MTj5ELpSKrpHwNC9BfN99eVtDdfeRLnRns5fjdKv2ceyZ6pZB1hNQPmNANykEfHCBwmn9KOsqAs0iAGJlx2tcLu00PvWP1g8j"
      token={tokenHandler}
    />
  );
}

export default Stripex;
