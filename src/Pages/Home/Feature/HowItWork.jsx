import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Register & Health Check',
        description: 'Register quickly, complete a brief health check, and get ready to safely donate blood, helping save lives in your community',
    },
    {
        number: '02',
        title: 'Blood Donation',
        description: 'Giving blood is simple, safe, and life-saving, helping patients in need every day.',
    },
    {
        number: '03',
        title: 'Rest & Save Lives',
        description: 'After donating blood, rest briefly to recover and help save lives, supporting those in need.',
    },
];

const HowItWork = () => {
    return (
        <section className="bg-gray-900 text-white  py-16 px-4">
            <div className="container mx-auto text-center">
                <p className="text-red-600 font-semibold badge badge-outline badge-secondary mb-2">How It Works</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Giving Blood Made Easy, Here's How
                </h2>
                <p className="text-gray-300 mb-12">
                    Donating blood is simple, safe, and life-saving. By giving just a small amount, you can help patients in need, support hospitals, and contribute to your community’s health. With easy registration, professional staff, and quick procedures, blood donation is a meaningful way to make a real difference every day
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {steps.map((step , index) => (
                        <div
                            key={step.number}
                            //   className="flex items-start bg-gray-800 p-6 rounded-lg border border-gray-700"
                            className={`flex items-center flex-col lg:flex-row  bg-gray-800 p-6 rounded-lg border border-gray-700  animate__animated animate__fadeInLeft animate__delay-${index + 3}s`}
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white font-bold rounded-lg flex items-center justify-center mr-4 text-lg">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWork;
