import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import DonorDashboard from "./DonorDashboard/DonorDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import VolunteerDashboard from "./VolunteerDashboard/VolunteerDashboard";

const MainDashboard = () => {
    const { user, role } = useContext(AuthContext);


    return (
        <div className=" bg-red-50 min-h-screen">

            <div className=" p-6  text-white text-center rounded-t-2xl  border-t-8 border-red-600 shadow mb-8">
                <h1 className="text-2xl md:text-5xl text-red-600 font-bold">
                    <span className="text-blue-950">Welcome,</span>{user?.displayName || "Donor"}
                </h1>
                <p className="mt-2 text-blue-950 font-semibold text-sm md:text-base">
                    Thank you for being a life saver
                </p>
            </div>
            <div>
                {
                    role == "donor" && (
                        <DonorDashboard />

                    )
                }
                {
                    role == "admin" && (
                        <AdminDashboard />

                    )
                }
                {
                    role == "volunteer" && (
                        <VolunteerDashboard />

                    )
                }
            </div>

        </div>
    );
};

export default MainDashboard;
