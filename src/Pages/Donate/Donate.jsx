import React, { useContext } from 'react';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../provider/AuthProvider';
import { FaHeart, FaUserCheck } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';
import { BiDonateBlood } from 'react-icons/bi';


const Donate = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();

    const handleCheckout = (e) => {
        e.preventDefault();

        const donateAmount = e.target.donateAmount.value;
        const userDonorEmail = user?.email;
        const donorName = user?.displayName;

        const formData = {
            donateAmount,
            userDonorEmail,
            donorName,
        }

        axiosInstance.post('/create-payment-checkout', formData)
            .then(res => {
                window.location.href = res.data.url
            })
    }

    return (
        <div className='bg-red-50 min-h-screen'>
            <div className='pt-32 pb-16 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                <div className='bg-white shadow border-t-8 p-4 border-red-600 rounded-2xl'>
                    <p className='text-4xl font-bold text-center text-blue-950 py-6'>Donate A Little Amount For BloodVessel.</p>
                    <p className='font-medium text-gray-500 text-center pb-6'>
                        Your donation, no matter the amount, helps save lives. Every contribution supports blood collection, testing, and distribution to patients in need. By donating, you are directly helping hospitals provide life-saving transfusions and giving hope to those in critical condition.
                    </p>

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


                <div>
                    <div className='py-8 rounded-2xl border-y-8 border-red-600 bg-indigo-950'>
                        <div className='flex justify-center mb-4 text-2xl md:text-4xl '>
                            <BiDonateBlood className="text-red-500 rotate-180" />
                            <BiDonateBlood className="text-red-500" />
                        </div>
                        <div className='flex justify-center'>
                            <p className="text-red-600 font-semibold badge badge-outline badge-secondary  mb-3 ">Donate a little amount : </p>
                        </div>

                        <form onSubmit={handleCheckout} className='flex  justify-center   gap-4'>
                            <input name='donateAmount' type="text" placeholder="Donate (amount) $  " className="input" />
                            <button type='submit' className="btn bg-white hover:bg-red-600 hover:text-white text-red-600 btn-primary">Donate</button>
                        </form>
                    </div>

                    <div className=" rounded-2xl p-4 border-y-8 border-red-600 bg-indigo-950 flex justify-center overflow-hidden">
                        <video
                            src="https://media.istockphoto.com/id/1335090013/video/donate-button-on-charity-website-number-of-donations-rising-call-to-action.mp4?s=mp4-640x640-is&k=20&c=Gkz9DOlk5gvaUB5GpvsL-aw_grGnpFtIJIfpvbyBvwk="
                            autoPlay
                            loop
                            muted
                            className="w-96 h-64 rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;