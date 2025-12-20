import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router";
import {
    FaTachometerAlt,
    FaUsers,
    FaHandHoldingHeart,
    FaUserShield,
    FaSignOutAlt,
    FaSignInAlt,
    FaHome,
} from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import AsideLinks from '../AsideLinks/AsideLinks';
import { BiDonateBlood } from 'react-icons/bi';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Aside = () => {
    const { role, userSignOut } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axiosSecure.get(`/users/profile`)
            .then(res => {
                setProfile(res.data)
            })
    }, [axiosSecure])


    const handleLogOut = () => {
        userSignOut()

            .then(() => {
                Swal.fire("Sign-out successful!")
            }).catch((error) => {
                console.log(error);
            });
    }




    return (
        <aside className="w-64 min-h-screen  bg-indigo-950 border-r border-gray-800">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-gray-600">
                <div className='flex text-2xl '>
                    <BiDonateBlood className="text-white rotate-180" />
                    <BiDonateBlood className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-red-500">
                    Blood<span className="text-white text-xl mt-2">Vessel.</span>
                </h1>
                <p className="text-sm text-gray-400 mt-1">My Dashboard</p>
            </div>

            {/* Admin Info */}
            <div className="px-6 py-4 flex items-center gap-3 border-b border-gray-600">
                <div className="w-10 h-10 text-lg rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    {profile?.name?.charAt(0) || "U"}
                </div>
                <div>
                    <p className=" text-lg text-white font-semibold">{profile?.name || "Unknown User"}</p>
                    <p className="text-xs text-gray-400">{profile?.email || ""}</p>
                </div>
            </div>

            {/* Menu */}
            <nav className="px-3   py-4 space-y-1">

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
            <div className="px-3 grid grid-cols-1 gap-4 pt-10 border-t border-gray-600">

                <Link to={"/"} className=" btn btn-outline text-white hover:bg-gray-700 rounded-lg ">
                    <FaHome />
                    Home
                </Link>

                <button onClick={handleLogOut} className="btn btn-outline  text-white hover:bg-red-700 bg-red-600 rounded-lg">
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>


        </aside>
    );
};

export default Aside;
