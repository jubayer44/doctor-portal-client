import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selected }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <div>
      <h3 className="text-center mt-16 text-primary text-xl">
        Available Appointments on {format(selected, "PP")}
      </h3>
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointment={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal
       treatment={treatment}
       setTreatment={setTreatment}
       selectedDate={selected}
       />}
    </div>
  );
};

export default AvailableAppointment;
