import React from "react";

const TurisInfoCard = props => {
  const { img, cityName, description, href, btn } = props;
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cityName}</h5>
        <p className="card-text">{description}</p>
        <a href={href} target="_blank" className="btn btn-primary">
          {btn}
        </a>
      </div>
    </div>
  );
};

export default TurisInfoCard;
