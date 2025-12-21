import React from "react";
import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import 'animate.css';


const Feature = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            {/* Stats Section  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-base-200 rounded-xl p-8 mb-16 text-center">
                <div>
                    <h2 className="text-5xl font-bold">75+</h2>
                    <p className="text-red-600 mt-2  font-medium">Blood Cooperations</p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold">90+</h2>
                    <p className="text-red-600 mt-2  font-medium">Expert Staff</p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold">320+</h2>
                    <p className="text-red-600 mt-2  font-medium">Blood Donations</p>
                </div>
            </div>

            {/* ===== Main Content ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10   justify-center">
                {/* Why We Do It */}
                <div className="grid grid-cols-1 bg-base-100 shadow-md rounded-xl pt-12  gap-4 border-t-8 border-red-600 lg:grid-cols-2">
                    <div className="bg-red-500 text-white h-96 px-4 rounded-xl py-8">
                        <h3 className="text-2xl font-bold mb-4 ">Why We Do It ?</h3>
                        <p className="text-sm ">
                            Blood donation is a simple act that saves lives. Every day, patients need blood for surgeries, accidents, cancer treatment, childbirth, and serious illnesses. Blood cannot be made artificially, so the only source is healthy donors. By donating blood, we help hospitals stay prepared for emergencies and give patients a second chance at life.
                        </p>
                    </div>

                    <div className="rounded-xl h-96 overflow-hidden shadow-lg">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1723132610681-36b6254eaeb0?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Blood Donation"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>

                {/* Story Content */}
                <div>
                    <p className="text-red-600 font-semibold badge badge-outline badge-secondary ">Our Story</p>
                    <h2 className="text-5xl  font-bold my-6">
                        Dedicated to Life, The Story of Our Blood Vessel Initiative
                    </h2>
                    <p className="text-gray-500  mb-6">
                       Dedicated to Life reflects our Blood Vessel Initiative’s mission to save lives through voluntary blood donation. By connecting donors and patients, we ensure timely support during emergencies, promote awareness, and build a compassionate community committed to health, hope, and humanity.
                    </p>

                    {/* Questions Box */}
                    <div className="bg-base-100 shadow-md rounded-xl border-y-8 border-red-600 p-6 flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <h4 className="text-xl font-semibold mb-2">A Simple Act, A Life Saved</h4>
                            <p className="text-gray-500 text-sm mb-4">
                               Your blood donation can be the hope someone needs today.
                            </p>
                            <Link className="btn bg-red-600  btn-sm text-white">
                                <FaPhoneAlt className="mr-2 text-white " />
                                Call Us
                            </Link>
                        </div>

                        <div className="flex-1 space-y-3">
                            <p className="flex items-center gap-2">
                                <FaHeart className="text-red-600" />
                               Save Lives 
                            </p>
                            <p className="flex items-center gap-2">
                                <FaHeart className="text-red-600" />
                              Serve Humanity
                            </p>
                            <p className="flex items-center gap-2">
                                <FaHeart className="text-red-600" />
                              Emergency Support
                            </p>
                            <p className="flex items-center gap-2">
                                <FaHeart className="text-red-600" />
                              Safe and Simple
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
