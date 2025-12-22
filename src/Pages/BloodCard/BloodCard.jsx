import React from 'react';
import { Link } from 'react-router';

const BloodCard = ({ info }) => {
    return (
        <div className="card bg-base-100  border-t-8 border-b-2 border-indigo-900 rounded-2xl  shadow-sm">
            <div className="card-body  ">
                <span className="badge badge-lg bg-red-600 text-white ">{info.status}</span>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Blood Need For : {info.bloodGroup}</h2>
                </div>
                <ul className="mt-6 flex font-semibold text-gray-600  flex-col gap-1 text-base">
                    <li>
                        <p> <span className=' text-gray-950 font-bold'>RecipientName :</span> {info.recipientName}</p>
                    </li>

                    <li>
                        <p> <span className=' text-gray-950 font-bold'>Address :</span> {info.address}, Bangladesh </p>
                    </li>

                    <li>
                        <p> <span className=' text-gray-950 font-bold'> HospitalName :</span> {info.hospitalName}</p>
                    </li>

                    <li>
                        <p><span className=' text-gray-950 font-bold'>DonationDate :</span> {info.donationDate}</p>

                    </li>

                    <li >
                        <p><span className=' text-gray-950 font-bold'>DonationTime :</span> {info.donationTime}</p>
                    </li>

                </ul>
                <div className="mt-6">
                    <Link to={`/search-details/${info._id}`}
                        className={`btn btn-block btn-sm hidden 
                          ${info?.status !== "pending"
                                ? "btn-disabled"
                                : "bg-red-600 text-white hover:bg-white hover:text-red-600"
                            }`}
                        >View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default BloodCard;