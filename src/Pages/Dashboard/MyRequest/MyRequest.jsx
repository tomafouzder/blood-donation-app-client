import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyRequest = () => {
    const axiosSecure = useAxiosSecure();
    const [totalRequest, setTotalRequest] = useState(0);
    const [myRequest, setMyRequest] = useState([]);
    const [requestPerPage, setRequestPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axiosSecure.get(`/my-request?size=${requestPerPage}&page=${currentPage - 1}`)
            .then(res => {
                setMyRequest(res.data.request)
                setTotalRequest(res.data.totalRequest)
            })
    }, [axiosSecure, currentPage, requestPerPage])

    const numberOfPage = Math.ceil(totalRequest / requestPerPage)
    const pages = [...Array(numberOfPage).keys()].map(e => e + 1)


    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }



    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SQ No</th>
                            <th>Recipient Name</th>
                            <th>Hospital Name</th>
                            <th>BloodGroup</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRequest.map((request, index) =>
                                <tr key={request._id}>
                                    <th>{(currentPage * 10) + (index + 1) - 10}</th>
                                    <td>{request.recipientName}</td>
                                    <td>{request.hospitalName}</td>
                                    <td>{request.bloodGroup}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

            {/* button */}
            <div className='flex justify-center mt-12 gap-4'>
                <button onClick={handlePrev} className="btn">Prev</button>
                {
                    pages.map((page, index) =>
                        <button key={index} onClick={() => setCurrentPage(page)}
                            className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}>
                            {page}
                        </button>
                    )
                }
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    );
};

export default MyRequest;