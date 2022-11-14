import React from "react";

const Testimonial = ({ review }) => {
  const { img, name, description, location } = review;
  return (
    <div className="p-8 shadow-xl">
      <p>{description}</p>
      <div className="flex mt-9">
        <div className="avatar">
          <div className="w-[75px] mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
