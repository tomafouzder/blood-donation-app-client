import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaCheck, FaEdit, FaEye, FaTimes, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';

const MyRequest = () => {
    const axiosSecure = useAxiosSecure();
    const [totalRequest, setTotalRequest] = useState(0);
    const [myRequest, setMyRequest] = useState([]);
    const [requestPerPage, setRequestPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axiosSecure.get(`/my-request?size=${requestPerPage}&page=${currentPage - 1}`)
            .then(res => {
                setMyRequest(res.data.request)
                setTotalRequest(res.data.totalRequest)
            })
    }, [axiosSecure, currentPage, requestPerPage])

    const numberOfPage = Math.ceil(totalRequest / requestPerPage)
    const pages = [...Array(numberOfPage).keys()].map(e => e + 1)


    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }



    return (
        <div className='bg-red-50 min-h-screen'>
            <div className="overflow-x-auto ">
                <table className="table table-zebra text-sm">
                    {/* head */}
                    <thead className='bg-red-100 text-blue-950'>
                        <tr>
                            <th>SQ</th>
                            <th>Recipient</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Blood </th>
                            <th>Status</th>
                            <th>Donor-Info</th>
                            <th>Done/Cancel</th>
                            <th>Actions</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRequest.map((request, index) =>
                                <tr key={request._id} className="text-gray-800  " >
                                    <th>{(currentPage * 10) + (index + 1) - 10}</th> 
                                    <td>{request.recipientName}</td>
                                    <td>{request.district}, {request.upazila}</td>
                                    <td>{request.donationDate}</td>
                                    <td>{request.donationTime}</td>
                                    <td>
                                        <span className="badge badge-error badge-outline">
                                            {request.bloodGroup}
                                        </span>
                                    </td>

                                    {/* Status */}
                                    <td>
                                        <span className={`badge
                                                        ${request.status === "pending" && "badge-warning"}
                                                        ${request.status === "inprogress" && "badge-info"}
                                                        ${request.status === "done" && "badge-success"}
                                                        ${request.status === "canceled" && "badge-error"}
                                                      `}>
                                            {request.status}
                                        </span>
                                    </td>

                                    {/* Donor Info */}
                                    <td>
                                        {request.status === "inprogress" ? (
                                            <div className="text-xs">
                                                <p>{request.requesterName}</p>
                                                <p className="text-gray-400">{request.requesterEmail}</p>
                                            </div>
                                        ) : (
                                            <span className="text-gray-500 text-xs">—</span>
                                        )}
                                    </td>

                                    {/* done/cancel */}
                                    <td className="">
                                        {/* Status Buttons */}
                                        {request.status === "inprogress" ? (
                                            <div>
                                                <button
                                                    // onClick={() => handleStatusChange(req._id, "done")}
                                                    className="btn btn-xs btn-success mr-2"
                                                >
                                                    <FaCheck />
                                                </button>
                                                <button
                                                    // onClick={() => handleStatusChange(req._id, "canceled")}
                                                    className="btn btn-xs btn-outline btn-error"
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-gray-500 text-xs">—</span>
                                        )}

                                    </td>

                                    {/* Actions */}
                                    <td className="flex gap-2">
                                        <Link
                                            to={`/dashboard/update-request/${request._id}`}
                                            className="btn btn-xs btn-warning"
                                        >
                                            <FaEdit />
                                        </Link>

                                        <button
                                            // onClick={() => handleDelete(req._id)}
                                            className="btn btn-xs btn-error"
                                        >
                                            <FaTrash />
                                        </button>


                                    </td>

                                    {/* view */}
                                    <td>
                                        <Link
                                            to={`/dashboard/request/${request._id}`}
                                            className="btn btn-xs btn-info"
                                        >
                                            <FaEye />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>



            {/* button */}
            <div className='flex justify-center mt-12 gap-4'>
                <button onClick={handlePrev} className="btn">Prev</button>
                {
                    pages.map((page, index) =>
                        <button key={index} onClick={() => setCurrentPage(page)}
                            className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}>
                            {page}
                        </button>
                    )
                }
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    );
};

export default MyRequest;