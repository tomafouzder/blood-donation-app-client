import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosSecure])

    console.log(users)

    return (
        <div>
               all-users
        </div>
    );
};

export default AllUsers;