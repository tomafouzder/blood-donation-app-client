import React from 'react';
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import BloodCard from '../BloodCard/BloodCard';

const DonationRequests = () => {
    const axiosInstance = useAxios();
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axiosInstance.get('/donation-requests')
            .then(res => setRequests(res.data))
            .catch(err => console.error(err));
    }, [axiosInstance]);

   

    return (
        <div className='py-24 bg-amber-50'>
            <div className='container mx-auto '>
                <h2 className='text-4xl font-bold text-center py-6'>Pending Donation Requests</h2>
                {requests.length === 0 ? (
                    <p className="text-center shadow bg-white   text-gray-500 text-lg py-10">No pending donation requests available.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {requests.map(info => (
                            <BloodCard key={info._id} info={info} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DonationRequests;