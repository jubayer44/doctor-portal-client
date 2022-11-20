import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const closeModal = () => {
    setDeleteDoctor(null);
  };

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_URL}/doctors`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (doctor) => {
    fetch(`${process.env.REACT_APP_URL}/doctors/${doctor._id}`, {
    method: "DELETE",    
    headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            refetch()
            toast.success(`${doctor.name} has been deleted successfully`)
        }

    })
}
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">Manage Doctors</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{doctor.name}</div>
                  </div>
                </td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <th>
                  <label
                    onClick={() => setDeleteDoctor(doctor)}
                    htmlFor="delete-modal"
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`if you delete ${deleteDoctor.name} it cannot be undone.`}
          closeModal={closeModal}
          successAction={handleDelete}
          modalData={deleteDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
