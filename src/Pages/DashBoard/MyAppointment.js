import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const url = `${process.env.REACT_APP_URL}/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-3">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking?.patient}</td>
                <td>{booking?.treatment}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  {
                    booking?.price && !booking?.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-primary btn-sm">Pay</button></Link>
                  }
                  {
                    booking?.price && booking?.paid && <button className="text-green-500 font-bold">Paid</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
