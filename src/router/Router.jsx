import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import ForgotPassword from "../Pages/AuthPages/ForgotPassword";
import DashBoardLayout from "../Layouts/DashBoardLayout/DashBoardLayout";
import MainDashboard from "../Pages/Dashboard/MainDashboard/MainDashboard";
import AddRequest from "../Pages/Dashboard/AddRequest/AddRequest";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import MyRequest from "../Pages/Dashboard/MyRequest/MyRequest";
import Donate from "../Pages/Donate/Donate";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import SearchRequest from "../Pages/SearchRequest/SearchRequest";
import DonationRequests from "../Pages/DonationRequests/DonationRequests";
import UpdateRequest from "../Pages/Dashboard/UpdateRequest/UpdateRequest";
import AllRequest from "../Pages/AllRequest/AllRequest";
import Profile from "../Pages/Dashboard/Profile/Profile";
import RequestDetails from "../Pages/Dashboard/RequestDetails/RequestDetails";


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
            {
                path: "/donate",
                element: <PrivateRoute><Donate /></PrivateRoute>
            },
            {
                path: "/payment-success",
                element: <PaymentSuccess />
            },
            {
                path: "/search-request",
                element: <SearchRequest />
            },
            {
                path: "/donation-requests",
                element: <DonationRequests />
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashBoardLayout /></PrivateRoute>,
        children: [
            {
                path: "main",
                element: <MainDashboard />
            },
            {
                path: "add-request",
                element: <AddRequest />
            },
            {
                path: "all-users",
                element: <AllUsers />
            },
            {
                path: "all-request",
                element: <AllRequest />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "request-details/:id",
                element: <RequestDetails />
            },
            {
                path: "update-request/:id",
                element: <UpdateRequest />
            },
        ]
    }
]);

export default router;