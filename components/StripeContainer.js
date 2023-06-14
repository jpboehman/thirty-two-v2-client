import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import BillingInformation from "./eCommerce/Checkout/BillingInformation";

// Determine which key to use based on the environment
const PUBLIC_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
    : process.env.NEXT_PUBLIC_STRIPE_TEST_KEY;

const stripePromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <BillingInformation />
    </Elements>
  );
};

export default StripeContainer;
