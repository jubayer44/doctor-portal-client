import bgImg from "../../assets/images/bg.png";
import img from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ setSelected, selected }) => {
  return (
    <div>
      <div className="hero mt-52" style={{ background: `url(${bgImg})` }}>
        <div className="hero-content flex-col md:flex-row-reverse">
          <img src={img} className="md:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div className="md:mr-16">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
