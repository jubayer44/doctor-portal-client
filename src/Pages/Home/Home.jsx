import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import Contact from './Contact';
import InfoCards from './InfoCards';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <InfoCards/>
            <Services/>
            <Treatment/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Home;