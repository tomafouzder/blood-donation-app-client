import React from 'react';
import { FaHeart, FaUserCheck } from 'react-icons/fa';
import { MdBloodtype, } from 'react-icons/md';

const WhyYouDonate = () => {
    return (
        <div className='container mx-auto '>
            <div className='mb-24'>
                <div className='grid grid-cols-1 rounded-2xl lg:grid-cols-2 bg-base-100 justify-center gap-4 p-4 pb-8 md:gap-6'>

                    <div>
                        <div className=''>
                            <img src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bloodDonation" className='rounded-2xl ' />
                        </div>

                        <div className="flex-1 text-gray-900 mt-8 space-y-4">
                            <div className="flex items-center shadow p-4 gap-4">
                                <p className='bg-red-50 p-2'>
                                    <MdBloodtype className='text-red-600 text-4xl' />
                                </p>

                                <div>
                                    <h3 className='text-lg font-bold'>Urgent Need, Every Day</h3>
                                    <p className='text-gray-500 font-medium'>Blood donation is a safe, quick, and life-saving process.</p>
                                </div>
                            </div>

                            <div className="flex items-center shadow p-4 gap-4">
                                <p className='bg-red-50 p-2'>
                                    <FaHeart className='text-red-600 text-4xl' />
                                </p>
                                <div>
                                    <h3 className='text-lg font-bold'>Urgent Need, Every Day</h3>
                                    <p className='text-gray-500 font-medium'>Donating blood is a true act of compassion and responsibility</p>
                                </div>
                            </div>

                            <div className="flex items-center shadow p-4 gap-4">
                                <p className='bg-red-50 p-2'>
                                    <FaUserCheck className='text-red-600 text-4xl' />
                                </p>
                                <div>
                                    <h3 className='text-lg font-bold'>Save Lives in Minutes</h3>
                                    <p className='text-gray-500 font-medium'>One blood donation can give someone a second chance at life</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pl-6  '>
                        <h1 className="text-red-600 font-semibold badge badge-outline badge-secondary mt-12 bg-white">why donate ?</h1>
                        <h2 className="text-5xl  font-bold my-6">
                            Dedicated to Life, The Story of Our Blood Vessel Initiative
                        </h2>
                        <p className="text-gray-500 text-lg border-t-2 border-red-600 py-6">Blood donation saves lives by providing essential blood for surgeries, accidents, cancer treatments, and emergencies. A single donation can help multiple patients. Donating blood also supports community health, ensures hospitals stay prepared, and gives donors the satisfaction of making a real, life-saving difference.
                        </p>

                        <div>
                            <figure className='lg:absolute'>
                                <img src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-4xl' />
                            </figure>

                            <div className='bg-white lg:-bottom-72 lg:right-72 rounded-2xl shadow border  border-b-8 border-t-8 border-red-600   flex justify-center items-center py-6 gap-6 lg:relative '>
                                <div className="avatar-group -space-x-6">
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-gray-700 '>Join</p>
                                    <p className='text-2xl font-bold '>14,000+ <span className='text-red-600'>heroes</span></p>
                                    <p className='text-gray-700 '>and be lifesavers for others</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyYouDonate;