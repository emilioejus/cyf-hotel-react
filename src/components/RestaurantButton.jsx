import React from "react";

const RestaurantButton = ({ click }) => {
  return (
    <button onClick={click} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
