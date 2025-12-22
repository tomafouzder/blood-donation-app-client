import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEdit, FaSave } from "react-icons/fa";
import Swal from 'sweetalert2';
import { BiDonateBlood } from 'react-icons/bi';


const Profile = () => {
    const axiosSecure = useAxiosSecure();

    const [profile, setProfile] = useState({});
    const [editable, setEditable] = useState(false);

    // load profile by id
    useEffect(() => {
        axiosSecure.get(`/users/profile`)
            .then(res => {
                setProfile(res.data)
            })
    }, [axiosSecure])
   


    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    const handleSave = async () => {
        const updateData = {
            name: profile.name,
            mainPhotoUrl: profile.mainPhotoUrl,
            bloodGroup: profile.bloodGroup,
            district: profile.district,
            upazila: profile.upazila,
        };

        try {
            const res = await axiosSecure.put('/users/profile', updateData);

            if (res.data.success) {
                Swal.fire("Updated!", "Profile updated successfully", "success");
                setEditable(false);

                const updated = await axiosSecure.get('/users/profile');
                setProfile(updated.data);
            }
        } catch (error) {
            console.log(error)
            Swal.fire("Error", "Profile update failed", "error");
        }
    };


    return (
        <div className="min-h-screen bg-blue-50 p-6">


            {/* Main Content */}
            <div className="max-w-4xl flex-1 pb-16 mx-auto bg-white border-b-4 border-t-8 border-blue-950 shadow-lg rounded-xl overflow-hidden">

                <div className='flex justify-center mb-4 bg-indigo-950 '>
                    <img src={profile?.mainPhotoUrl} className='w-44 h-44 rounded-full' alt="" />
                </div>

                <div className="max-w-2xl mx-auto bg-white border-b-8 border-red-600  shadow-md rounded-lg pb-6 ">
                    <div className="flex bg-red-600 px-2 py-2 justify-between items-center mb-4">
                        <div className='flex text-2xl md:text-4xl '>
                            <BiDonateBlood className="text-white rotate-180" />
                            <BiDonateBlood className="text-white" />
                        </div>
                        <h2 className="text-2xl text-white font-bold">My Profile</h2>
                        {!editable ? (
                            <button
                                onClick={() => setEditable(true)}
                                className="btn btn-sm hidden btn-outline text-white border-white hover:bg-white hover:text-red-600 md:flex items-center gap-2"
                            >
                                <FaEdit /> Edit
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="btn btn-sm hidden btn-outline text-red-600 border-white bg-white hover:bg-white hover:text-red-600 md:flex items-center gap-2"
                            >
                                <FaSave /> Save
                            </button>
                        )}
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 px-6 gap-4">

                        {/* Name */}
                        <div>
                            <label className="label font-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={profile?.name || ''}
                                onChange={handleChange}
                                disabled={!editable}
                                className={`input  input-bordered w-full ${!editable && 'bg-gray-100'}`}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profile?.email || ''}
                                disabled
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>

                        {/* Avatar URL */}
                        <div>
                            <label className="label font-semibold">Avatar URL</label>
                            <input
                                type="text"
                                name="mainPhotoUrl"
                                value={profile?.mainPhotoUrl || ''}
                                onChange={handleChange}
                                disabled={!editable}
                                className={`input input-bordered w-full ${!editable && 'bg-gray-100'}`}
                            />
                        </div>

                        {/* Blood Group */}
                        <div>
                            <label className="label font-semibold">Blood Group</label>
                            <select
                                name="bloodGroup"
                                value={profile?.bloodGroup || ''}
                                onChange={handleChange}
                                disabled={!editable}
                                className={`select select-bordered w-full ${!editable && 'bg-gray-100'}`}
                            >
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
                            <label className="label font-semibold">District</label>
                            <input
                                type="text"
                                name="district"
                                value={profile?.district || ''}
                                onChange={handleChange}
                                disabled={!editable}
                                className={`input input-bordered w-full ${!editable && 'bg-gray-100'}`}
                            />
                        </div>

                        {/* Upazila */}
                        <div>
                            <label className="label font-semibold">Upazila</label>
                            <input
                                type="text"
                                name="upazila"
                                value={profile?.upazila || ''}
                                onChange={handleChange}
                                disabled={!editable}
                                className={`input input-bordered w-full ${!editable && 'bg-gray-100'}`}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
