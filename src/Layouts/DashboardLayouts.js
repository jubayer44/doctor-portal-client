import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import NavBar from "../Pages/Shared/Navbar";

const DashboardLayouts = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  

  return (
    <div>
      <NavBar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />

        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {
              isAdmin && <li>
              <Link to="/dashboard/users">All User</Link>
              <Link to="/dashboard/add_doctor">Add Doctor</Link>
              <Link to="/dashboard/managedoctors">Manage Doctors</Link>
            </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
