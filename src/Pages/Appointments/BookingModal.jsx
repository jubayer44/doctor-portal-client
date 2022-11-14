import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

const handleBooking =event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    setTreatment(null)

    form.reset();
    console.log(slot, name, phone, email);
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
          <h3 className="text-lg font-bold">{name}</h3>
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
                slots.map(slot => <option value={slot} key={slot._id}>{slot}</option>)
              }
            </select>
            <input
            required
              type="text"
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
