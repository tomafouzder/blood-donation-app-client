import React from 'react';


const ErrorPage = () => {
    return (
        <div className='bg-gray-800 flex justify-center items-center  text-center min-h-screen py-10 '>
            <div className=' bg-gray-800 shadow-2xl '>
               
                <h2 className='text-3xl font-bold pt-2 text-gray-300'>Oops! You're lost.</h2>
                <p className='text-xl font-semibold pt-2 text-gray-300'>The page you are looking for was not found.</p>

            </div>
        </div>
    );
};

export default ErrorPage;