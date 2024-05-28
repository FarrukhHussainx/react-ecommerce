import axios from "axios";
import Stripe from "react-stripe-checkout";

function Stripex() {
  const handelToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/api/stripe", {
        token: token.id,
        amount: totalAmount,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const tokenHandler = (token) => {
    handelToken(100, token);
  };
  return (
    <div>
      <Stripe
        stripeKey="pk_test_51MTj5ELpSKrpHwNC9BfN99eVtDdfeRLnRns5fjdKv2ceyZ6pZB1hNQPmNANykEfHCBwmn9KOsqAs0iAGJlx2tcLu00PvWP1g8j"
        token={tokenHandler}
      />
    </div>
  );
}

export default Stripex;
