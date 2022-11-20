import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const {user} = useContext(AuthContext);
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");

const handleBooking =event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    

    const booking = {
      appointmentDate: date,
      treatment: treatmentName, 
      patient: name,
      slot, 
      email,
      phone,
      price
    }


    fetch(`${process.env.REACT_APP_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        setTreatment(null)
        toast.success('appointment booked successfully')
        refetch()
      }
      else {
        toast.error(data.message);
        setTreatment(null);
      }
    })

    form.reset();
}




  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
          onSubmit={handleBooking}
          className="mt-7 flex flex-col gap-4">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name='slot' className="select select-bordered w-full">
              {
                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
              }
            </select>
            <input
            required
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="name"
              placeholder="full name"
              className="input input-bordered w-full"
            />
            <input
            required
              type="number"
              name= "phone"
              placeholder="phone number"
              className="input input-bordered w-full"
            />
            <input
            required
              type="email"
              defaultValue={user?.email}
              disabled
              name= "email"
              placeholder="email address"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full btn btn-accent"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
