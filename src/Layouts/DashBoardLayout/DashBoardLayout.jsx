import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../../components/Aside/Aside';

const DashBoardLayout = () => {
    return (
        <div className='flex'>
            <Aside />
            <div className='flex-1 gap-5'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoardLayout;