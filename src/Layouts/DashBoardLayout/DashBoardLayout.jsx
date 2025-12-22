import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Aside from '../../components/Aside/Aside';
import Loading from '../../components/Loading/Loading';

const DashBoardLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);

    }, [location])
    return (
        <div className='flex  h-screen'>
            <aside className="w-64 h-screen  sticky top-0 shrink-0">
                <Aside />
            </aside>

            {loading ? (<Loading></Loading>) :
                (<div className='flex-1 gap-5 overflow-y-auto'>
                    <Outlet></Outlet>
                </div>)
            }


        </div>
    );
};

export default DashBoardLayout;