import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEye, FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const DonorDashboard = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [request, setRequest] = useState([])
    const [refetch, setRefetch] = useState();



    useEffect(() => {
        if (!user?.email) return;

        axiosSecure.get('/resent-request')
            .then(res => {
                setRequest(res.data || [])

            });
    }, [axiosSecure, user?.email, refetch]);

    const handleRequestDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/delete-request/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your blood request has been deleted.",
                                icon: "success"
                            });

                            const remainingData = request.filter(req => req._id !== id);
                            setRequest(remainingData)
                        }
                    })



            }
        });
    }

    const handleStatusChange = (id, status) => {
        axiosSecure.patch(`/update/request/status?id=${id}&status=${status}`)
            .then(res => {
                setRefetch(res.data)
            })
    }



    return (
        <div className="">

            {request?.length > 0 && (
                <div className="bg-red-50   shadow">
                    <div className="px-4 pt-6 ">
                        <h2 className="text-xl font-bold ">
                            My Recent Donation Requests :
                        </h2>
                    </div>

                    <div className="overflow-x-auto  ">
                        <table className="table table-zebra text-sm">
                            <thead className="bg-red-100 text-blue-950">
                                <tr>
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

                            <tbody >
                                {request?.map((req) => (
                                    <tr key={req?._id} className="text-gray-800  " >
                                        <td>{req?.recipientName}</td>
                                        <td>{req?.district}, {req?.upazila}</td>
                                        <td>{req?.donationDate}</td>
                                        <td>{req?.donationTime}</td>
                                        <td>
                                            <span className="badge badge-error badge-outline">
                                                {req?.bloodGroup}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td>
                                            <span className={`badge
                        ${req?.status === "pending" && "badge-warning"}
                        ${req?.status === "inprogress" && "badge-info"}
                        ${req?.status === "done" && "badge-success"}
                        ${req?.status === "canceled" && "badge-error"}
                      `}>
                                                {req?.status}
                                            </span>
                                        </td>

                                        {/* Donor Info */}
                                        <td>
                                            {req?.status === "inprogress" ? (
                                                <div className="text-xs">
                                                    <p>{req?.requesterName}</p>
                                                    <p className="text-gray-400">{req?.requesterEmail}</p>
                                                </div>
                                            ) : (
                                                <span className="text-gray-500 text-xs">—</span>
                                            )}
                                        </td>

                                        {/* done/cancel */}
                                        <td className="">
                                            {/* Status Buttons */}
                                            {req?.status === "inprogress" ? (
                                                <div>
                                                    <button
                                                        onClick={() => handleStatusChange(req?._id, "done")}
                                                        className="btn btn-xs btn-success mr-2"
                                                    >
                                                        <FaCheck />
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusChange(req?._id, "canceled")}
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
                                                to={`/dashboard/update-request/${req?._id}`}
                                                className="btn btn-xs btn-warning"
                                            >
                                                <FaEdit />
                                            </Link>

                                            <button
                                                onClick={() => handleRequestDelete(req?._id)}
                                                className="btn btn-xs btn-error"
                                            >
                                                <FaTrash />
                                            </button>


                                        </td>

                                        {/* view */}
                                        <td>
                                            <Link
                                                to={`/dashboard/request-details/${req?._id}`}
                                                className="btn btn-xs btn-info"
                                            >
                                                <FaEye />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* View All */}
                    <div className="p-4 text-center  ">
                        <Link
                            to={"/dashboard/all-request"}
                            className="btn btn-sm btn-outline bg-red-100 text-sm font-bold  text-blue-950 "
                        >
                            View my all request
                        </Link>
                    </div>
                </div>
            )}

            {/* table */}
            {request?.length === 0 && (
                <div className="bg-red-50  shadow rounded-xl flex justify-center items-center text-center">
                    <p className="text-blue-950 ">
                        You haven’t created any donation request yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default DonorDashboard;


