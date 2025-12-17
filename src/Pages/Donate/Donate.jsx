import React, { useContext } from 'react';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../provider/AuthProvider';


const Donate = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();

    const handleCheckout = (e) => {
        e.preventDefault();

        const donateAmount = e.target.donateAmount.value;
        const userDonorEmail = user?.email;
        const donorName = user?.displayName;

        const formData = {
            donateAmount,
            userDonorEmail,
            donorName,
        }

        axiosInstance.post('/create-payment-checkout', formData)
            .then(res => {
                console.log(res.data)
                window.location.href = res.data.url
            })
    }

    return (
        <div>
            <form onSubmit={handleCheckout} className='flex justify-center pt-20 gap-4'>
                <input name='donateAmount' type="text" placeholder="Type here" className="input" />
                <button type='submit' className="btn btn-primary">Donate</button>
            </form>
        </div>
    );
};

export default Donate;