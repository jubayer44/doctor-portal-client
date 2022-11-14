import React from "react";

const AppointmentOption = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-center text-xl font-semibold text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal"
          disabled={!slots.length}
          className="btn btn-primary"
          onClick={()=>setTreatment(appointment)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
