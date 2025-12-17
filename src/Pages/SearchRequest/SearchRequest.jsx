import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';

const SearchRequest = () => {

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

    const handleSearch = (e) => {
        e.preventDefault();
        const bloodGroup = e.target.bloodGroup.value;
        axiosInstance.get(`/search-requests?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`)
            .then(res => {
                console.log(res.data)
            })
    }


    return (
        <div>
            <form onSubmit={handleSearch}>
                <select name='bloodGroup' defaultValue="Select Blood Group" className="select bg-gray-400">
                    <option value="">-- Select Blood Group --</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>


                {/* districts */}

                <select value={district} onChange={(e) => setDistrict(e.target.value)} className="select bg-gray-400">
                    <option value="">Select Your District</option>
                    {
                        districts?.map(d => <option key={d.id} value={d?.name}>{d?.name}</option>)
                    }
                </select>

                {/* upazila */}

                <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className="select bg-gray-400">
                    <option value="">Select Your Upazila</option>
                    {
                        upazilas?.map(u => <option key={u.id} value={u?.name}>{u?.name}</option>)
                    }
                </select>
                <button className="btn">Search</button>
            </form>
        </div>
    );
};

export default SearchRequest;