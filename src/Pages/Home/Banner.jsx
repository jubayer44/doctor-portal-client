import React from "react";
import banner from "../../assets/images/chair.png";
import PrimaryBtn from "../../components/PrimaryBtn";
import bgImg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero mt-52" style={{ background: `url(${bgImg})` }}>
      <div className="hero-content flex-col md:flex-row-reverse">
        <img src={banner} className="md:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl max-w-1/2 font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>Get Start</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
