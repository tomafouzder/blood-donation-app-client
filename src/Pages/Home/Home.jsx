import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import 'animate.css';
import Feature from './Feature/Feature';
import WhatWeDo from './Feature/WhatWeDo';
import HowItWork from './Feature/HowItWork';
import WhyYouDonate from './Contact/WhyYouDonate';
import Contact from './Contact/Contact';





const Home = () => {
    return (
        <div className=''>
            <HeroSlider></HeroSlider>

           <div>
            <Feature></Feature>
           </div>

           <div className=' bg-red-50  mt-24'>
            <WhatWeDo></WhatWeDo>
           </div>

           <div>
            <HowItWork></HowItWork>
           </div>

           <div className='my-24  '>
            <WhyYouDonate></WhyYouDonate>
           </div>

           <div className='mt-24'>
            <Contact></Contact>
           </div>
        </div>
    );
};

export default Home;