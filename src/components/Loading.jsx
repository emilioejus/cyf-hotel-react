import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <span className="visually-hidden">Loading...</span>
      <div className="spinner-border" role="status" />
    </div>
  );
};

export default Loading;
