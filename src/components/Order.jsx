import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

const Order = ({ typeFood }) => {
  // const [] = props;
  const [order, setOrder] = useState(0);
  let orderOne = () => {
    setOrder(order + 1);
  };

  return (
    <li className="food-list">
      {typeFood}: {order} <RestaurantButton click={orderOne} />
    </li>
  );
};

export default Order;
