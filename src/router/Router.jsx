import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import ForgotPassword from "../Pages/AuthPages/ForgotPassword";
import DashBoardLayout from "../Layouts/DashBoardLayout/DashBoardLayout";
import MainDashboard from "../Pages/Dashboard/MainDashboard/MainDashboard";
import AddRequest from "../Pages/Dashboard/AddRequest/AddRequest";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            },
        ]
    },
    {
        path: "dashboard",
        element: <DashBoardLayout />,
        children: [
            {
                path: "main",
                element: <MainDashboard />
            },
            {
                path:"add-request",
                element:<AddRequest/>
            }
        ]
    }
]);

export default router;