import React from "react";

const IdButton = prop => {
  const { logic, name, id } = prop;

  return (
    <>
      <button onClick={() => logic(id)} className="btn btn-primary">
        {name}
      </button>
    </>
  );
};

export default IdButton;
