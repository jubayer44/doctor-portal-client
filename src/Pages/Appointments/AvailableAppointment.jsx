import React, {  useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, 'PP');

const {data: appointmentOptions = [], refetch, isLoading,} = useQuery({
  queryKey: ['appointmentOptions', date],
  queryFn: async()=> {
    const res = await fetch(`${process.env.REACT_APP_URL}/appointmentOptions?date=${date}`)
    const data = res.json();
    return data;
  }
});


if(isLoading){
  return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto"></div>
}

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
       refetch= {refetch}
       />}
    </div>
  );
};

export default AvailableAppointment;
