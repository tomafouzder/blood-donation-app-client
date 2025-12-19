import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [

    {
        image: "https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?_gl=1*1oc8vxf*_ga*MTc4NDEwNjg0MC4xNzUxNjQ0Njc5*_ga_8JE65Q40S6*czE3NjYwNzg2MTAkbzkkZzEkdDE3NjYwNzg3MTgkajU4JGwwJGgw",
        title: "Donate Blood, Save Lives",
        subtitle: "Your one donation can give someone a second chance at life ",
    },
    {
        image: "https://images.pexels.com/photos/12193105/pexels-photo-12193105.jpeg?_gl=1*uye4tq*_ga*MTc4NDEwNjg0MC4xNzUxNjQ0Njc5*_ga_8JE65Q40S6*czE3NjYwNzg2MTAkbzkkZzEkdDE3NjYwNzg3MTgkajU4JGwwJGgw",
        title: "Be a Hero Today",
        subtitle: "A few minutes of your time can save a precious life",
    },
    {
        image: "https://images.pexels.com/photos/11181870/pexels-photo-11181870.jpeg?_gl=1*1m8po9h*_ga*MTc4NDEwNjg0MC4xNzUxNjQ0Njc5*_ga_8JE65Q40S6*czE3NjYwNzg2MTAkbzkkZzAkdDE3NjYwNzg2MTAkajYwJGwwJGgw",
        title: "Blood Donation Is Life Donation",
        subtitle: "Step forward and become someone’s lifeline ",
    },

]


const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className="">
            <Swiper
                spaceBetween={5}
                centeredSlides={false}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className='mySwiper shadow-2xl'

            >

                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[500px] overflow-hidden ">
                            {/* Image full cover */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-red-100/30 bg-opacity-70"></div>
                            {/* Text Overlay with Animation */}
                            <div className={`absolute top-1/2 left-1/4 transform -translate-y-1/2   inset-0 bg-red-100/40  flex flex-col justify-center items-center   text-center p-5
                                
                                ${activeIndex === index ? 'animate__animated animate__fadeInLeft  animate__delay-2s' : ''}
                                `}>

                                <div className="badge badge-outline text-blue-950 font-bold uppercase hidden md:block md:mb-4 mb-2">Every drop counts</div>

                                <h2 className="text-2xl md:text-5xl md:font-extrabold text-blue-950 font-bold md:mb-4 mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-lg  md:text-xl text-red-500 font-semibold mb-2 md:mb-4" >
                                    {slide.subtitle}
                                </p>
                                <div className='flex gap-4 flex-col md:flex-row'>
                                    <button className='btn bg-red-600 text-white  rounded-l-2xl font-bold border-none '>Join as a Donor</button>
                                    <button className='btn text-blue-950   rounded-r-2xl font-bold border-none'>Search Donor</button>
                                </div>
                                <div className='md:flex gap-6 hidden  md:mt-8 mt-6'>
                                    <div className="badge badge-outline text-blue-950 font-bold ">50/8 Available</div>
                                    <div className="badge badge-outline text-blue-950 font-bold ">Secure Process</div>
                                    <div className="badge badge-outline text-blue-950 font-bold ">Verified Donors</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default HeroSlider;


