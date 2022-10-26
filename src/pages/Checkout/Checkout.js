import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  const { name } = course;
  return (
    <div>
      <h2>Checkout: {name}</h2>
    </div>
  );
};

export default Checkout;
