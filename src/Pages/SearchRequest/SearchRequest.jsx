import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import BloodCard from '../BloodCard/BloodCard';

const SearchRequest = () => {
    const axiosInstance = useAxios();
    const [upazilas, setUpazilas] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState('');
    const [upazila, setUpazila] = useState('');
    const [bloodInfo, setBloodInfo] = useState([]);
    const [isSearched, setIsSearched] = useState(false);


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
                setBloodInfo(res.data)
                setIsSearched(true);
                
            })
    }

  


    return (
        <div className='min-h-screen bg-red-50'>
            <div className='pt-24 container mx-auto '>

                <div className='text-center pb-6 '>
                    <h1 className="text-red-600 font-semibold badge badge-outline badge-secondary mt-12 bg-white">Search blood ?</h1>

                    <h2 className='text-5xl text-blue-950 font-bold py-6'> Search For  The Blood You Need</h2>
                    <p className='font-medium text-gray-500 '>Blood is the vital liquid connective tissue that flows through the heart, arteries, veins, and capillaries, supplying oxygen and nutrients to the body’s cells and carrying away carbon dioxide and waste products. It is made up of plasma (the fluid portion) and blood cells — red blood cells, white blood cells, and platelets. Blood also helps fight infection and stops bleeding by clotting when you get injured</p>
                </div>

                <div className='bg-white p-6 shadow rounded-2xl  border-b-4 border-t-4 border-red-600'>
                    <form onSubmit={handleSearch}
                        className='flex flex-col lg:flex-row gap-2 justify-center items-center'
                    >
                        <select name='bloodGroup' defaultValue="Select Blood Group" className="select ">
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

                        <select value={district} onChange={(e) => setDistrict(e.target.value)} className="select  ">
                            <option value="">Select Your District</option>
                            {
                                districts?.map(d => <option key={d.id} value={d?.name}>{d?.name}</option>)
                            }
                        </select>

                        {/* upazila */}

                        <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className="select ">
                            <option value="">Select Your Upazila</option>
                            {
                                upazilas?.map(u => <option key={u.id} value={u?.name}>{u?.name}</option>)
                            }
                        </select>

                        <button className="btn bg-red-500 text-white hover:bg-red-600">Search</button>
                    </form>
                </div>


                <div className='pb-12 pt-8'>

                    {
                        isSearched && bloodInfo.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {bloodInfo.map(info => (
                                    <BloodCard key={info._id} info={info} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center shadow bg-white   text-gray-500 text-lg py-10">
                                ❌ No blood requests found for your search.
                            </p>
                        )
                    }


                </div>



            </div>
        </div>
    );
};

export default SearchRequest;