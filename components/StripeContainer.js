import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Subscribe from "pages/pages/subscribe";
import BillingInformation from "./eCommerce/Checkout/BillingInformation";

// const PUBLIC_KEY = process.env.REACT_APP_STRIPE;
const PUBLIC_KEY = `${process.env.REACT_APP_STRIPE}`;

const stripePromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <BillingInformation />
    </Elements>
  );
};

export default StripeContainer;
