import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <MakeAppointment></MakeAppointment>
         <Testimonial></Testimonial>
         <ContactUs></ContactUs>
         <Footer></Footer>
        </div>
    );
};

export default Home;