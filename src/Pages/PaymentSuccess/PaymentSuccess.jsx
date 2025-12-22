import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance.post(`/success-payment?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data)
            })
    }, [axiosInstance, sessionId])

    return (

        <div className="min-h-screen flex items-center justify-center bg-green-50 pt-12">
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                
                <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your donation. Your contribution helps save lives and supports our blood donation initiatives.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="btn bg-green-500 text-white hover:bg-green-600"
                    >
                        Go to Home
                    </Link>
                    <Link
                        to="/donate"
                        className="btn btn-outline border-green-500 text-green-500 hover:bg-green-100"
                    >
                        Donate Again
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default PaymentSuccess;