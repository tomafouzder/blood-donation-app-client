import React from 'react';
import { NavLink } from "react-router";
import {
    FaTachometerAlt,
    FaUsers,
    FaHandHoldingHeart,
    FaUserShield,
    FaSignOutAlt,
} from "react-icons/fa";

const Aside = () => {
    const menuItem =
        "flex items-center gap-3 px-4 py-3 rounded-lg transition text-gray-300 hover:bg-gray-700 hover:text-white";

    const activeItem =
        "bg-gray-700 text-white font-semibold";

    return (
        <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-800">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-gray-800">
                <h1 className="text-xl font-bold text-red-500">
                    Blood<span className="text-white">Admin</span>
                </h1>
                <p className="text-xs text-gray-400 mt-1">Admin Dashboard</p>
            </div>

            {/* Admin Info */}
            <div className="px-6 py-4 flex items-center gap-3 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    A
                </div>
                <div>
                    <p className="text-sm text-white font-semibold">Admin</p>
                    <p className="text-xs text-gray-400">Super Admin</p>
                </div>
            </div>

            {/* Menu */}
            <nav className="px-3 py-4 space-y-1">
                <NavLink
                    to="/dashboard/main"
                    end
                    className={({ isActive }) =>
                        `${menuItem} ${isActive ? activeItem : ""}`
                    }
                >
                    <FaTachometerAlt />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/dashboard/add-request"
                    className={({ isActive }) =>
                        `${menuItem} ${isActive ? activeItem : ""}`
                    }
                >
                    <FaUsers />
                   Add-Request
                </NavLink>

                <NavLink
                    to="/dashboard/donations"
                    className={({ isActive }) =>
                        `${menuItem} ${isActive ? activeItem : ""}`
                    }
                >
                    <FaHandHoldingHeart />
                    Donations
                </NavLink>

                <NavLink
                    to="/dashboard/admins"
                    className={({ isActive }) =>
                        `${menuItem} ${isActive ? activeItem : ""}`
                    }
                >
                    <FaUserShield />
                    Admins
                </NavLink>
            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-gray-800">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg transition">
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Aside;
