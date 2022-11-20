import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Main from "../Layouts/Main";
import Appointment from "../Pages/Appointments/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import ManageDoctors from "../Pages/DashBoard/DashBoard/ManageDoctors";
import MyAppointment from "../Pages/DashBoard/MyAppointment";
import Payment from "../Pages/DashBoard/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Shared/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayouts/></PrivateRoutes>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><AllUsers/></AdminRoutes>
            },
            {
                path: '/dashboard/add_doctor',
                element: <AdminRoutes><AddDoctor/></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors/></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment/></AdminRoutes>,
                loader: ({params}) => fetch(`${process.env.REACT_APP_URL}/dashboard/payment/${params.id}`)
            },
        ]
    }
])
export default router;