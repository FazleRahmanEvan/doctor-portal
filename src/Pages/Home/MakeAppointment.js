import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style ={{
            background:`url(${appointment})`
        }}className='flex justify-center items-center p-8'>
            <div className='flex-1 w-32 hidden  lg:block' >
                <img src={doctor} className='mt-[-200px]' alt="" />  
            </div>
            <div className='flex-1 w-32'>
                <h3 className='text-xl text-white '>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white mt-5 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa perferendis quia asperiores ducimus perspiciatis, pariatur dolorem laboriosam facilis exercitationem odit illo sequi dolor laudantium cupiditate. Veniam, obcaecati perspiciatis officia praesentium numquam totam, eos quo cumque optio voluptate quos distinctio.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;