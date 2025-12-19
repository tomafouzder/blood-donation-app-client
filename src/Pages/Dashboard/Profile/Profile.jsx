import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEdit, FaSave } from "react-icons/fa";
import Swal from 'sweetalert2';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [profile, setProfile] = useState({});
    const [editable, setEditable] = useState(false);

    // // Load user profile
    // useEffect(() => {
    //     if (user?.email) {
    //         axiosSecure.get(`/users/profile/${user.email}`)
    //             .then(res => setProfile(res.data))
    //             .catch(err => console.error(err));
    //     }
    // }, [user, axiosSecure]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosSecure.put(`/users/update-profile/${user.email}`, profile);
            if (res.data.success) {
                Swal.fire("Updated!", "Profile updated successfully", "success");
                setEditable(false);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to update profile.");
        }
    };

    return (
        <div className="">


            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">My Profile</h2>
                        {!editable ? (
                            <button
                                onClick={() => setEditable(true)}
                                className="btn btn-outline btn-warning flex items-center gap-2"
                            >
                                <FaEdit /> Edit
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="btn btn-outline btn-success flex items-center gap-2"
                            >
                                <FaSave /> Save
                            </button>
                        )}
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Name */}
                        <div>
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={profile?.name || user?.displayName || ''}
                                onChange={handleChange}
                                disabled={!editable}
                                className={`input input-bordered w-full ${!editable && 'bg-gray-100'}`}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profile?.email || user?.email || ''}
                                disabled
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>

                        {/* Avatar URL */}
                        <div>
                            <label className="label">Avatar URL</label>
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
                            <label className="label">Blood Group</label>
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
                            <label className="label">District</label>
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
                            <label className="label">Upazila</label>
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
