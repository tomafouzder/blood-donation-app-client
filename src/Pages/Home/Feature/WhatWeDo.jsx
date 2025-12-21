import React from 'react';
import { MdPlayArrow } from 'react-icons/md';


const WhatWeDo = () => {
    return (
        <section className='container mx-auto pb-24'>
            <h4 className="text-red-600 font-semibold badge badge-outline badge-secondary my-12">What We Do !</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 animate__animated animate__fadeInDown  animate__delay-1s items-center gap-4 md:gap-6'>
                <h1 className="text-5xl  font-bold ">The Life saving Work We Do for Communities in Need</h1>
                <p className="text-gray-500  ">Our mission is to provide life-saving support to communities in need through blood donation. By connecting donors with patients, we ensure timely help during emergencies, promote health awareness, and foster a compassionate, caring, and resilient community.</p>
            </div>

            {/* section 1 */}
            <div className='my-12'>
                <h1 className="text-red-600 font-semibold badge badge-outline badge-secondary mt-12 bg-white">Blood Donation</h1>

                <div className='grid grid-cols-1 rounded-2xl  shadow lg:grid-cols-2 bg-base-100 justify-center gap-4 p-4 pb-8 md:gap-6'>
                    <div className='animate__animated  animate__fadeInRight animate__delay-2s'>
                        <img src="https://zahrah.creedcreatives.net/donors/wp-content/uploads/sites/31/2025/02/young-woman-making-blood-donation-in-hospital-blo-2023-11-27-05-26-07-utc.jpg" alt="bloodDonation" className='rounded-2xl ' />
                    </div>
                    <div className='pl-6 animate__animated animate__fadeInLeftBig  animate__delay-2s '>
                        <h2 className='text-3xl font-semibold py-6'>Blood Donation_</h2>
                        <p className="text-gray-500 text-lg border-t-2 border-red-600 py-6">Blood donation is a voluntary and noble act that saves lives every day. It helps patients during emergencies, surgeries, and serious illnesses. Since blood cannot be manufactured, donors are essential. One donation can save multiple lives and promote humanity and community care.
                        </p>
                        <div className="flex-1 text-gray-500 space-y-1">
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                One blood donation can give someone a second chance at life.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Donating blood is a true act of compassion and responsibility.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Blood is essential during accidents, surgeries, and critical care.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Blood donation is a safe, quick, and life-saving process.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* section 2 */}
            <div className='mb-12'>
                <div className='flex justify-end pr-4'>
                    <h1 className="text-red-600 font-semibold badge  badge-outline badge-secondary mt-12 bg-white">Blood Bank</h1>
                </div>

                <div className='grid grid-cols-1 rounded-2xl  shadow lg:grid-cols-2 bg-base-100 justify-center gap-4 p-4 pb-8 md:gap-6'>

                    <div className='pl-6 animate__animated animate__fadeInLeftBig  animate__delay-3s'>
                        <h2 className='text-3xl font-semibold py-6'>Blood Bank_</h2>
                        <p className="text-gray-500 text-lg border-t-2 border-red-600 py-6">Our community Blood Bank connects donors and recipients to save lives every day. We provide safe, timely, and reliable blood supplies for emergencies, surgeries, and medical treatments. By encouraging voluntary donations, we strengthen community health, promote awareness, and build a culture of compassion and care.
                        </p>
                        <div className="flex-1 text-gray-500 space-y-1">
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Providing timely blood to patients in need across the community.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Ensuring every donation is screened and ready for emergencies.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Promoting awareness and encouraging voluntary blood donation.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Linking donors and recipients to save lives every day.
                            </p>
                        </div>
                    </div>

                    <div className='animate__animated animate__fadeInRight     animate__delay-3s'>
                        <img src="https://zahrah.creedcreatives.net/donors/wp-content/uploads/sites/31/2025/02/blood-donation-nurse-2023-11-27-05-04-42-utc.jpg" alt="bloodDonation" className='rounded-2xl ' />
                    </div>

                </div>
            </div>

            {/* section 3 */}
            <div className='mt-12'>
                <h1 className="text-red-600 font-semibold badge badge-outline badge-secondary mt-12 bg-white">Health Check</h1>

                <div className='grid grid-cols-1 rounded-2xl  shadow lg:grid-cols-2 bg-base-100 justify-center gap-4 p-4 pb-8 md:gap-6'>
                    <div className='animate__animated  animate__fadeInRight animate__delay-4s'>
                        <img src="https://zahrah.creedcreatives.net/donors/wp-content/uploads/sites/31/2025/02/young-girl-on-hemodialysis-in-hospital-dialysis-s-2025-01-08-03-02-12-utc.jpg" alt="bloodDonation" className='rounded-2xl ' />
                    </div>
                    <div className='pl-6 animate__animated animate__fadeInLeftBig  animate__delay-4s '>
                        <h2 className='text-3xl font-semibold py-6'>Health Check_</h2>
                        <p className="text-gray-500 text-lg border-t-2 border-red-600 py-6">Our healthcare services focus on providing comprehensive medical care to communities. We ensure access to preventive, curative, and emergency treatments while promoting health awareness. By combining skilled professionals, modern facilities, and compassionate care, we aim to improve overall well-being and create healthier, stronger communities.
                        </p>
                        <div className="flex-1 text-gray-500 space-y-1">
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Promoting healthy lifestyles and early detection of diseases.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Providing immediate care during accidents and critical situations.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Expert doctors, nurses, and staff ensuring quality treatment.
                            </p>
                            <p className="flex items-center gap-2">
                                <MdPlayArrow className="text-red-600" />
                                Programs and initiatives to raise awareness and improve wellness.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default WhatWeDo;