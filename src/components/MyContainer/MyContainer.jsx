import React from 'react';

const MyContainer = ({ className, children }) => {
    return (
        <div className={`${className} max-w-6xl mx-auto `}>
            {children}
        </div>
    );
};

export default MyContainer;