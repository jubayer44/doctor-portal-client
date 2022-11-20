import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from "../../components/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section>
      <div className="hero text-white h-[533px]"
      style={{background: `url(${appointment})`}}
      >
        <div className="hero-content flex-col md:flex-row pb-0">
          <div className="hidden md:block md:w-1/2">
            <img src={doctor} alt="" className="-mt-52 h-[636px]"/>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-primary text-xl">Appointment</h4>
            <h2 className="text-4xl font-semibold">
              Make an appointment Today
            </h2>
            <p className='mb-4'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryBtn>Appointment</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
