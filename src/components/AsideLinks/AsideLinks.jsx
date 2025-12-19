import React from 'react';
import { NavLink } from 'react-router';

const menuItem =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition text-gray-300 hover:bg-gray-700 hover:text-white";

const activeItem =
    "bg-gray-700 text-white font-semibold";

const AsideLinks = ({ to, className, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => `${menuItem} ${isActive ? activeItem : `${className}`}`}>
            {children}
        </NavLink>
    );
};

export default AsideLinks;