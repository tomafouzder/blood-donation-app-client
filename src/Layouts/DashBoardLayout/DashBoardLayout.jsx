import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../../components/Aside/Aside';

const DashBoardLayout = () => {
    return (
        <div className='flex h-screen'>
            <aside className="w-64 h-screen  sticky top-0 shrink-0">
                <Aside />
            </aside>
            <div className='flex-1 gap-5 overflow-y-auto'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoardLayout;