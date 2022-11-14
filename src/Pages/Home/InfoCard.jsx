import React from "react";

const InfoCard = ({card}) => {
    const {title, icon, bgColor, description} = card;
  return (
    <div className={`card card-side shadow-xl text-white px-6 ${bgColor}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
