import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_URL}/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = id => {
    fetch(`${process.env.REACT_APP_URL}/users/admin/${id}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Make admin successful.')
        refetch();
    }
    })
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'Admin' && <button onClick={()=> handleMakeAdmin(user._id)} className="btn btn-xs btn-success">Make Admin</button>}</td>
                <td><button className="btn btn-xs ">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
