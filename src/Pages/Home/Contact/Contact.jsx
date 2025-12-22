import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { IoCallSharp, IoLocation } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';

const Contact = () => {
    return (
        <div className='pt-24 bg-gray-800'>
            <div className='container mx-auto'>
                <div className='text-center text-white'>
                    <h1 className="text-red-600 font-semibold badge badge-outline badge-secondary mt-12 bg-white">Contact Us ?</h1>

                    <h2 className='text-5xl text-white font-bold py-6'> Start Journey With Our Team   </h2>
                    <p>Begin a life-saving journey by donating blood. It’s simple, safe, and takes only a short time. Your single donation can help patients in emergencies, surgeries, and treatments. Step forward today—your kindness can give someone a second chance at life</p>

                    <div className='flex justify-center py-6   '>
                        <div className='p-4  rounded-2xl shadow-2xl'>
                            <p className='font-bold text-lg'>Opening Hours</p>
                            <div className='flex gap-12 pt-3 items-center'>
                                <h5 className='flex items-center gap-2 '> <LuCalendarDays className='text-white' />Sunday - Saturday</h5>
                                <p className='flex items-center gap-2 '><CiClock2 className='text-white' /> 09:00 AM - 18:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 pb-12 md:grid-cols-2 '>
                        <div className='flex justify-center    '>
                            <div className='p-4  rounded-2xl shadow-2xl'>
                                <p className='font-bold text-lg'>Mirpur, Dhaka</p>

                                <div className='pt-4'>
                                    <h5 className='flex items-center gap-2 '> <IoLocation className='text-white' />Road 12, Dhaka . Bangladesh-1216</h5>
                                    <p className='flex items-center gap-2 '><IoCallSharp className='text-white' /> (+880) 1234 567 890</p>
                                    <p className='flex items-center gap-2 '><IoCallSharp className='text-white' />mirpur@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center  '>
                            <div className='p-4  rounded-2xl shadow-2xl'>
                                <p className='font-bold text-lg'>Zero point, Khulna</p>

                                <div className='pt-4'>
                                    <h5 className='flex items-center gap-2 '> <IoLocation className='text-white' />Road 10, Khulna . Bangladesh-1216</h5>
                                    <p className='flex items-center gap-2 '><IoCallSharp className='text-white' /> (+880) 1234 567 890</p>
                                    <p className='flex items-center gap-2 '><IoCallSharp className='text-white' />zeropoit@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;