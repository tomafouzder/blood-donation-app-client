import React from 'react';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { IoCallOutline, IoLogoYoutube } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { BiDonateBlood } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" bg-gray-600 p-10">
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row justify-around gap-10  text-base-center pt-5 items-center">
                    '>
                    <div className=' lg:flex lg:justify-center lg:items-center'>
                        {/* <h6 className="footer-title">Services</h6> */}
                        <div className=" flex justify-center items-center ">
                            <div className='flex text-4xl md:text-4xl '>
                                <BiDonateBlood className="text-white rotate-180" />
                                <BiDonateBlood className="text-white" />
                            </div>
                            <p className=" text-white font-bold text-5xl">
                               Blood
                                <span className="text-4xl text-red-500 font-semibold"> Vessel.</span>
                            </p>
                        </div>

                    </div>
                    <div>
                        <p className=" text-white font-bold justify-center flex text-xl border-b">Company</p>
                        <p className="link text-white py-2 justify-center flex text-lg font-medium link-hover">About us </p>

                        <p className=" text-white text-lg justify-center flex  font-medium"> Contact us</p>
                        <a className="link text-white  justify-center flex gap-1 items-center text-lg font-medium py-2 link-hover"><IoCallOutline />+880 (000)(000)(0000)</a>

                        <a className="link text-white justify-center flex gap-1 items-center text-lg font-medium link-hover"><MdOutlineAttachEmail />Email:ecotrack@web.com</a>

                    </div>
                    <div>
                        <p className="text-white border-b font-bold justify-center flex text-lg">Social</p>
                        <div className=" text-white mt-2">
                            <a className=' flex items-center justify-center text-lg font-semibold gap-2'>
                                <FaSquareXTwitter /> Twitter
                            </a>
                            <a className='flex items-center justify-center text-lg font-semibold gap-2'>
                                
                                <IoLogoYoutube /> YouTube
                            </a>
                            <a className='flex items-center justify-center text-lg font-semibold gap-2'>
                                <FaFacebook /> Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* copy rights */}
            <div className='text-center border-t border-gray-700 mt-8 py-4 text-gray-100 text-sm'>
                <p>&copy; {new Date().getFullYear()}
                    <span className='text-red-500 font-semibold'>BloodVessel</span>
                    All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;