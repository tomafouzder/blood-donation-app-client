import React, { useContext, useEffect, useState } from 'react';

import { FaTint, FaPaperPlane } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';

const AddRequest = () => {
    const { user } = useContext(AuthContext)
    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState('');
    const [upazila, setUpazila] = useState('');

    const axiosInstance = useAxios();

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

    const handleRequestSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const requesterName = form.requesterName.value
        const requesterEmail = form.requesterEmail.value
        const recipientName = form.recipientName.value
        const district = form.district.value
        const upazila = form.upazila.value
        const hospitalName = form.hospitalName.value
        const address = form.address.value
        const bloodGroup = form.bloodGroup.value
        const donationDate = form.donationDate.value
        const donationTime = form.donationTime.value
        const message = form.message.value

        const formData = {
            requesterName,
            requesterEmail,
            recipientName,
            district,
            upazila,
            hospitalName,
            address,
            bloodGroup,
            donationDate,
            donationTime,
            message,
            status: 'pending'
        }

        axiosInstance.post('/requests', formData)
            .then(res => {
                alert(res.data.insertedId)
            })
            .catch(error => {
                console.log(error)
            })

    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold flex items-center gap-2 text-error">
                        <FaTint /> Blood Donation Request
                    </h2>

                    <form onSubmit={handleRequestSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                        {/* Requester Name */}
                        <div>
                            <label className="label">Requester Name</label>
                            <input
                                name='requesterName'
                                type="text"
                                value={user?.displayName}
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
                                value={user?.email}
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
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Blood Group */}
                        <div>
                            <label className="label">Blood Group</label>
                            <select name="bloodGroup" required className="select select-bordered w-full">
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
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Request Message */}
                        <div className="md:col-span-2">
                            <label className="label">Request Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="textarea textarea-bordered w-full"
                                placeholder="Explain why blood is needed..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2">
                            <button className="btn btn-error w-full flex gap-2">
                                <FaPaperPlane /> Send Request
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRequest;
