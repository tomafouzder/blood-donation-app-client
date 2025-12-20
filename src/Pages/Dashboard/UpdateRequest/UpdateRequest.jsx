import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import axios from 'axios';
import { useParams } from 'react-router';
import { FaPaperPlane, FaTint } from 'react-icons/fa';
import { BiDonateBlood } from 'react-icons/bi';
import Swal from 'sweetalert2';

const UpdateRequest = () => {
    const { id } = useParams();

    const axiosSecure = useAxiosSecure()
    const [requests, setRequests] = useState(null)

    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);

    const [upazila, setUpazila] = useState('');
    const [district, setDistrict] = useState('');

    // fetch district 
    useEffect(() => {
        axios.get('/upazila.json')
            .then(res => {
                setUpazilas(res.data.upazilas)
            })

        axios.get('/district.json')
            .then(res => {

                setDistricts(res.data.districts)
            })
    }, [])

    // load request by id
    useEffect(() => {
        if (!id) return;
        axiosSecure.get(`/all-requests/${id}`)
            .then(res => {
                setRequests(res.data.result)
            })
    }, [axiosSecure, id])




    const handleUpdateSubmit = async (e) => {

        e.preventDefault();

        const form = e.target;
        const recipientName = form.recipientName.value
        const district = form.district.value
        const upazila = form.upazila.value
        const hospitalName = form.hospitalName.value
        const address = form.address.value
        const bloodGroup = form.bloodGroup.value
        const status = form.status.value
        const donationDate = form.donationDate.value
        const donationTime = form.donationTime.value
        const message = form.message.value

        const formData = {
            recipientName,
            district,
            upazila,
            hospitalName,
            address,
            bloodGroup,
            status,
            donationDate,
            donationTime,
            message,
        }

        try {
            const res = await axiosSecure.put(`/all-requests/${id}`, formData);

            if (res.data.modifiedCount > 0) {
                Swal.fire("Updated!", "Donation request updated successfully", "success");
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Update failed", "error");
        }

    };




    return (
        <div className="max-w-4xl overflow-y-auto mx-auto p-6">
            <div className="card rounded-xl bg-base-100 shadow-xl border-b-4 border-t-8 border-blue-950">

                <div className="bg-red-600 text-white p-6 flex items-center ">
                    <div className='flex text-2xl md:text-4xl '>
                        <BiDonateBlood className="text-white rotate-180" />
                        <BiDonateBlood className="text-white" />
                    </div>
                    <h1 className="md:text-2xl text-lg font-bold">Update Donation Request </h1>
                </div>

                <div className="card-body">

                    <form onSubmit={handleUpdateSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                        {/* Requester Name */}
                        <div>
                            <label className="label">Requester Name</label>
                            <input
                                name='requesterName'
                                type="text"
                                defaultValue={requests?.requesterName}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>

                        {/* Requester Email */}
                        <div>
                            <label className="label">Requester Email</label>
                            <input
                                name="requesterEmail"
                                type="email"
                                defaultValue={requests?.requesterEmail}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>

                        {/* Recipient Name */}
                        <div>
                            <label className="label">Recipient Name</label>
                            <input
                                type="text"
                                name="recipientName"
                                defaultValue={requests?.recipientName}
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Blood Group */}
                        <div>
                            <label className="label">Blood Group</label>
                            <select name="bloodGroup" required
                                defaultValue={requests?.bloodGroup}
                                className="select select-bordered w-full">
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        {/* Blood Group */}
                        <div>
                            <label className="label">Donor Status</label>
                            <select name="status" required
                                defaultValue={requests?.donorStatus}
                                className="select select-bordered w-full">
                                <option value="">Select Donor Status</option>
                                <option value="pending">pending</option>
                                <option value="inprogress">inprogress</option>
                            </select>
                        </div>

                        {/* District */}
                        <div>
                            <label className="label">Recipient District</label>
                            <select
                                name="district"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                required className="select select-bordered w-full">
                                <option value="">Select District</option>
                                {
                                    districts?.map(d => <option key={d.id} value={d?.name}>{d?.name}</option>)
                                }
                            </select>
                        </div>

                        {/* Upazila */}
                        <div>
                            <label className="label">Recipient Upazila</label>
                            <select
                                name="upazila"
                                value={upazila}
                                onChange={(e) => setUpazila(e.target.value)}
                                required className="select select-bordered w-full">
                                <option value="">Select Upazila</option>
                                {
                                    upazilas?.map(u => <option key={u.id} value={u?.name}>{u?.name}</option>)
                                }
                            </select>
                        </div>

                        {/* Hospital Name */}
                        <div className="md:col-span-2">
                            <label className="label">Hospital Name</label>
                            <input
                                type="text"
                                name="hospitalName"
                                defaultValue={requests?.hospitalName}
                                placeholder="Dhaka Medical College Hospital"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Full Address */}
                        <div className="md:col-span-2">
                            <label className="label">Full Address</label>
                            <input
                                type="text"
                                name="address"
                                defaultValue={requests?.address}
                                placeholder="Zahir Raihan Rd, Dhaka"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Donation Date */}
                        <div>
                            <label className="label">Donation Date</label>
                            <input
                                type="date"
                                name="donationDate"
                                defaultValue={requests?.donationDate}
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Donation Time */}
                        <div>
                            <label className="label">Donation Time</label>
                            <input
                                type="time"
                                name="donationTime"
                                defaultValue={requests?.donationTime}
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Request Message */}
                        <div className="md:col-span-2">
                            <label className="label">Request Message</label>
                            <textarea
                                name="message"
                                defaultValue={requests?.message}
                                rows="4"
                                required
                                className="textarea textarea-bordered w-full"
                                placeholder="Explain why blood is needed..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2">
                            <button className="btn  text-white bg-red-600 w-full flex gap-2">
                                <FaPaperPlane /> Update Donation Request
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateRequest;