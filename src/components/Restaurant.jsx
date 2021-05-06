import React from "react";

import Order from "./Order";

const Restaurant = () => {
  // const pizzas = 0;
  let food = ["Pizza", "Salad", "Chocolate Cake"];
  let renderFood = food => {
    return <Order typeFood={food} />;
  };

  return (
    <div className="food-master">
      <h3>Restaurant Orders</h3>
      <div className="food-div">
        <ul className="food-ul">{food.map(renderFood)}</ul>
      </div>
    </div>
  );
};

export default Restaurant;
