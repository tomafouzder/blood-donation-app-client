import React, { useContext } from 'react';
import { Link, NavLink } from "react-router";
import {
    FaTachometerAlt,
    FaUsers,
    FaHandHoldingHeart,
    FaUserShield,
    FaSignOutAlt,
    FaSignInAlt,
} from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import AsideLinks from '../AsideLinks/AsideLinks';

const Aside = () => {
    const { role, user, userSignOut } = useContext(AuthContext)

    const handleLogOut = () => {
        userSignOut()

            .then(() => {
                Swal.fire("Sign-out successful!")
            }).catch((error) => {
                console.log(error);
            });
    }




    return (
        <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-800">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-gray-800">
                <h1 className="text-xl font-bold text-red-500">
                    Blood<span className="text-white">Vessel.</span>
                </h1>
                <p className="text-xs text-gray-400 mt-1">My Dashboard</p>
            </div>

            {/* Admin Info */}
            <div className="px-6 py-4 flex items-center gap-3 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    {user?.displayName?.charAt(0) || "U"}
                </div>
                <div>
                    <p className="text-sm text-white font-semibold">{user?.displayName || "Unknown User"}</p>
                    <p className="text-xs text-gray-400">{user?.email || ""}</p>
                </div>
            </div>

            {/* Menu */}
            <nav className="px-3 py-4 space-y-1">

                <AsideLinks
                    to="/dashboard/main"
                    end
                >
                    <FaTachometerAlt />
                    Dashboard
                </AsideLinks>

                <AsideLinks
                    to="/dashboard/profile"
                >
                    <FaUserShield />
                    My Profile
                </AsideLinks>



                {
                    role == "donor" && (
                        <AsideLinks
                            to="/dashboard/add-request"


                        >
                            <FaUsers />
                            Create Request
                        </AsideLinks>

                    )
                }


                {
                    role == "admin" && (<AsideLinks
                        to="/dashboard/all-users"
                    >
                        <FaUsers />
                        All Users
                    </AsideLinks>)
                }



                <AsideLinks
                    to="/dashboard/all-request"

                >
                    <FaHandHoldingHeart />
                   All Donation Requests
                </AsideLinks>

            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-gray-800">

                <Link to={"/"} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-700 rounded-lg transition">
                    <FaSignOutAlt />
                    Home
                </Link>

                <button onClick={handleLogOut} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg transition">
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>


        </aside>
    );
};

export default Aside;
