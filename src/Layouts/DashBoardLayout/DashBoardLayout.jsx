import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../../components/Aside/Aside';

const DashBoardLayout = () => {
    return (
        <div className='flex gap-2 '>
            <Aside/>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;