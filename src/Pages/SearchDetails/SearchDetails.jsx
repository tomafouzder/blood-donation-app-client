import React, { useContext, useEffect, useState } from 'react';
import { BiDonateBlood } from 'react-icons/bi';
import { FaArrowLeft, FaUser, FaHospital, FaMapMarkerAlt, FaTint, FaClock, FaEnvelope } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
import { AiOutlineClose } from 'react-icons/ai';



const SearchDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [requestDetails, setRequestDetails] = useState(null)
    const [isOpen, setIsOpen] = useState(null);

    const fetchRequest = () => {
        if (!id) return;
        axiosSecure.get(`/all-requests/${id}`)
            .then(res => {
                setRequestDetails(res.data.result)
            })
    }

    useEffect(() => {
        fetchRequest();
    }, [axiosSecure])

    console.log(requestDetails);

    const handleConfirmDonation = () => {
        axiosSecure.patch("/update/request/status", {
            id: requestDetails?._id,
            status: "inprogress",
            donorName: user?.displayName,
            donorEmail: user?.email
        })
            .then(() => {
                setIsOpen(false);
                fetchRequest(); 
            });
    };



    const statusColors = {
        pending: "bg-yellow-100 text-yellow-700",
        inprogress: "bg-blue-100 text-blue-700",
        done: "bg-green-100 text-green-700",
        canceled: "bg-red-100 text-red-700",
        fulfilled: "bg-purple-100 text-purple-700"
    };

    return (
        <div className="min-h-screen bg-blue-50 pt-28 p-6">
            <div className="max-w-4xl mx-auto bg-white border-b-4 border-t-8 border-blue-950 shadow-lg rounded-xl overflow-hidden">
                {/* Header */}
                <div className="bg-red-600 text-white p-6 flex items-center justify-between">
                    <div className='flex text-2xl md:text-4xl '>
                        <BiDonateBlood className="text-white rotate-180" />
                        <BiDonateBlood className="text-white" />
                    </div>
                    <h1 className="md:text-2xl text-lg font-bold">Donation Request Details</h1>


                    <Link to="/search-request" className="btn btn-sm hidden btn-outline text-white border-white hover:bg-white hover:text-red-600 md:flex items-center gap-2">
                        <FaArrowLeft /> Back
                    </Link>




                </div>

                {/* Content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaUser className="text-red-500" />
                            <div>
                                <h3 className="font-semibold text-gray-700">Recipient Name</h3>
                                <p className="text-gray-500">{requestDetails?.recipientName}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaHospital className="text-red-500" />
                            <div>
                                <h3 className="font-semibold text-gray-700">Hospital</h3>
                                <p className="text-gray-500">{requestDetails?.hospitalName}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-red-500" />
                            <div>
                                <h3 className="font-semibold text-gray-700">Location</h3>
                                <p className="text-gray-500">{requestDetails?.address} ({requestDetails?.district}, {requestDetails?.upazila})</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaTint className="text-red-500" />
                            <div>
                                <h3 className="font-semibold text-gray-700">Blood Group</h3>
                                <p className="text-gray-500">{requestDetails?.bloodGroup}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaClock className="text-red-500" />
                            <div>
                                <h3 className="font-semibold text-gray-700">Donation Date & Time</h3>
                                <p className="text-gray-500">{requestDetails?.donationDate} at {requestDetails?.donationTime}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaUser className="text-red-500" />
                            <div>
                                <h3 className="font-semibold text-gray-700">Requester Name</h3>
                                <p className="text-gray-500">{requestDetails?.requesterName}</p>
                                <p className="text-gray-400 text-sm">{requestDetails?.requesterEmail}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-gray-700">Message</h3>
                            <p className="text-gray-500 bg-gray-100 p-3 rounded-lg">{requestDetails?.message}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-700">Status</h3>
                            <span className={`inline-block px-4 py-2 rounded-full font-semibold ${statusColors[requestDetails?.status]}`}>
                                {requestDetails?.status}
                            </span>
                        </div>

                        {requestDetails?.status === "pending" && (
                            <button
                                onClick={() => setIsOpen(true)}
                                className="btn btn-sm bg-red-600 text-white"
                            >
                                Donate
                            </button>
                        )}
                        {/* Optional Actions */}
                        <div className=" flex flex-col-reverse md:flex-row items-center justify-between">
                            <div className="text-xl md:text-2xl font-semibold md:font-bold text-blue-950 ">
                                <span className='text-red-600  md:text-3xl md:font-bold'><span className='text-blue-950'>Bl</span>ood</span>Vessel<span className='text-2xl text-red-600'>.</span>
                            </div>
                            <div className='flex text-2xl md:text-4xl '>
                                <BiDonateBlood className="text-red-500 rotate-180" />
                                <BiDonateBlood className="text-blue-800" />
                            </div>
                        </div>


                        {isOpen && (
                            <div className="modal modal-open">
                                <div className="modal-box relative">

                                    <button
                                        className="absolute top-3 right-3"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <AiOutlineClose size={22} />
                                    </button>

                                    <h2 className="text-2xl font-bold text-center mb-4">
                                        Donor Information
                                    </h2>

                                    {/* Donor Name */}
                                    <div className="mb-3">
                                        <label className="block font-medium">Donor Name</label>
                                        <input
                                            value={user?.displayName || ""}
                                            readOnly
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    {/* Donor Email */}
                                    <div className="mb-4">
                                        <label className="block font-medium">Donor Email</label>
                                        <input
                                            value={user?.email || ""}
                                            readOnly
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <button
                                        onClick={handleConfirmDonation}
                                        className="btn btn-success w-full text-white"
                                    >
                                        Confirm
                                    </button>

                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchDetails;
