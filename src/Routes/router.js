import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Appointment from "../Pages/Appointments/Appointment";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
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
        element: <DashBoard/>
    }
])
export default router;