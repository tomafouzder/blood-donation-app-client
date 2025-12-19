import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import MyContainer from '../MyContainer/MyContainer';
import MyNavbarLinks from '../MyNavbarLinks/MyNavbarLinks';
import profileIcon from "../../assets/icons8-profile-50.png"
import icon from "../../assets/icons8-blood-donation-50.png"
import { FaSignInAlt, FaSignOutAlt, FaUserShield } from 'react-icons/fa';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleLogOut = () => {
        userSignOut()

            .then(() => {
                Swal.fire("Sign-out successful!")
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div
            className={`navbar shadow-sm fixed top-0 left-0 w-full -z-50 transition-all duration-300  ${scrolled ? "bg-white " : "bg-transparent"}`}
        >
            <MyContainer className="navbar ">
                <div className=" navbar-start gap-16 md:gap-6">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><MyNavbarLinks to={'/'}>Home</MyNavbarLinks></li>
                            <li><MyNavbarLinks to={'/search'}>Search</MyNavbarLinks></li>
                            <li><MyNavbarLinks to={'/donation-requests'}>Donation requests</MyNavbarLinks></li>
                            <li><MyNavbarLinks to={'/dashboard/main'} >My Dashboard</MyNavbarLinks></li>

                            {
                                user && <>
                                    <li><MyNavbarLinks to={'/donate'}>Founding</MyNavbarLinks></li>
                                </>
                            }
                            <li className=''>
                                {
                                    user ?
                                        <button onClick={handleLogOut} className="hover:underline">
                                            LogOut</button>
                                        :
                                        <MyNavbarLinks to="/login">Login</MyNavbarLinks>
                                }
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-1 md:gap-2'>
                        <figure >
                            <img src={icon} alt="Icon"  />
                        </figure>
                        
                        <p className="text-xl md:text-2xl font-semibold md:font-bold text-blue-950 ">
                            <span className='text-red-600  md:text-3xl md:font-bold'><span className='text-blue-950'>Bl</span>ood</span>Vessel<span className='text-2xl text-red-600'>.</span></p>
                    </div>
                  
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><MyNavbarLinks to={'/'}>Home</MyNavbarLinks></li>
                        <li><MyNavbarLinks to={'/search-request'}>Search Request</MyNavbarLinks></li>
                        <li><MyNavbarLinks to={'/donation-requests'}>Donation requests</MyNavbarLinks></li>
                        {
                            user && <>
                                <li><MyNavbarLinks to={'/donate'}>Founding</MyNavbarLinks></li>
                            </>
                        }
                    </ul>
                </div>


                <div className="navbar-end">


                    {/* only for sm screen */}
                    <div className='block md:hidden'>
                        {
                            !user ? (<Link to="/login" className="btn text-red-600 font-bold text-lg bg-red-50"><FaSignInAlt />Login</Link>)
                                :
                                (<div className='relative group'>
                                    <img className='w-12 rounded-full'
                                        src={user?.photoURL || profileIcon}
                                        alt="User Avatar" />

                                    {
                                        user && (
                                            <div className='absolute -left-40 hidden group-hover:block border-t-4 border-b-1 border-red-300 text-red-600 bg-white text-sm rounded-md whitespace-nowrap  shadow-md text-center p-3'>
                                                <p className='font-semibold text-base'>{user?.displayName || "No Name"}</p>
                                                <p className='py-2 font-semibold text-base'>{user?.email || "No Name"}</p>
                                                <Link to={'/dashboard/main'} className='w-full flex  items-center gap-1  py-2 btn text-red-600 bg-red-50 '> <FaUserShield />My Dashboard</Link>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="w-full mt-1 flex  items-center gap-1  py-2 btn text-red-600 bg-red-50  ">
                                                    <FaSignOutAlt />
                                                    Logout</button>
                                            </div>
                                        )
                                    }
                                </div>)
                        }
                    </div>

                    {/* md and lg screen */}
                    <div className='  hidden md:flex '>
                        <div

                            className=" menu-sm gap-1  bg-base-100 rounded-box z-1 p-1 shadow w-52  flex items-center   "
                        >
                            <div>
                                {user ? (<Link to={'/dashboard/main'} className='btn text-red-600 bg-red-50 '> <FaUserShield />My Dashboard</Link>) : (<Link to="/login" className="btn text-red-600 font-bold text-lg bg-red-50"><FaSignInAlt />Login</Link>)}

                            </div>

                            <div className='relative group'>

                                <img className='rounded-full w-12 h-12'
                                    src={`${user ? user.photoURL : profileIcon}`} alt="profileIcon" />


                                {user && (
                                    <div className='absolute -left-40 hidden group-hover:block border-t-4 border-b-1 border-red-300  text-red-600 bg-white text-sm rounded-md whitespace-nowrap shadow-md text-center p-3'>
                                        <p className='font-semibold text-base'>{user?.displayName || "No Name"}</p>
                                        <p className='py-2 font-semibold text-base'>{user?.email || "No Name"}</p>
                                        <button
                                            onClick={handleLogOut}
                                            className="w-full flex  items-center gap-1  py-2 btn text-red-600 bg-red-50  ">
                                            <FaSignOutAlt />
                                            Logout</button>
                                    </div>)


                                }

                            </div>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Navbar;