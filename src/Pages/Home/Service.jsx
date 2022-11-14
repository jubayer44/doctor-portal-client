import React from "react";

const Service = ({service}) => {
    const {img, title, description} = service;
  return (
    <div className="card card-compact max-w-[440px] rounded-lg mt-16  shadow-xl">
      <figure>
        <img src={img} alt="Shoes"  
        className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold text-center">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
