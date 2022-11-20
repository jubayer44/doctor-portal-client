import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
  const data = useLoaderData();
  const payment = data[0]
  const { treatment, price, appointmentDate } = payment;

  return (
    <div>
      <h3 className="text-3xl font-bold text-center">
        Payment for {treatment}
      </h3>
      <p className="text-center my-5">
        Please pay <strong>{price}</strong> for your appointment on{" "}
        {appointmentDate}
      </p>
      <Elements stripe={stripePromise}>
        <CheckOut
        payment={payment}
        />
      </Elements>
    </div>
  );
};

export default Payment;
