import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyRequest from '../Dashboard/MyRequest/MyRequest';
import AdminSeeAllRequest from '../Dashboard/MyRequest/AdminSeeAllRequest';
import VolunteerSeeAllRequest from '../Dashboard/MyRequest/VolunteerSeeAllRequest';

const AllRequest = () => {

    const { role } = useContext(AuthContext);


    return (
        <div>

            <div>
                {
                    role == "donor" && (
                        <MyRequest />

                    )
                }
                {
                    role == "admin" && (
                        <AdminSeeAllRequest />

                    )
                }
                {
                    role == "volunteer" && (
                        <VolunteerSeeAllRequest />

                    )
                }
            </div>

        </div>
    );
};

export default AllRequest;