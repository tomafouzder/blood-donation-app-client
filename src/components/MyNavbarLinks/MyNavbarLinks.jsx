import React from 'react';
import { NavLink } from 'react-router';

const MyNavbarLinks = ({ to, className, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive ? " text-red-600 text-base underline shadow-2xl bg-red-50 hover font-bold" : `${className} hover:underline  font-medium text-gray-950`)}>
            {children}
        </NavLink>
    );
};

export default MyNavbarLinks;