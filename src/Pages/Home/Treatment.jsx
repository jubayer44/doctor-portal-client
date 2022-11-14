import React from "react";
import treatmentImg from '../../assets/images/treatment.png';
import PrimaryBtn from "../../components/PrimaryBtn";

const Treatment = () => {
  return (
    <div className="card lg:card-side shadow-xl md:h-[576px] mb-40 w-4/5 mx-auto">
      <figure className="lg:w-1/2">
        <img src={treatmentImg} alt="Album" />
      </figure>
      <div className="md:ml-24 p-4 flex flex-col justify-center w-1/2">
        <h2 className="text-5xl font-bold mb-7">Exceptional Dental Care, on Your Terms</h2>
        <p className="mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <PrimaryBtn>Get Start</PrimaryBtn>
      </div>
    </div>
  );
};

export default Treatment;
