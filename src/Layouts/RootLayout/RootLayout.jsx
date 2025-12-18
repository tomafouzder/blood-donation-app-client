import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
;


const RootLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);

    }, [location])

    return (
        <div className=''>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Navbar></Navbar>
            </header>

            {loading ? (<p>Loading......</p>) :
                (<main className=''>
                    <Outlet></Outlet>
                </main>)
            }

          

        </div>
    );
};

export default RootLayout;