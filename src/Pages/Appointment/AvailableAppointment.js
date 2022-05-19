import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const[treatment, setTreatment]= useState(null);

    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data=> setServices(data));
    }, [])
    return (
        <div>
          <h4 className='text-xl text-primary text-center mb-10'>  Available Appointments On {format(date, 'PP')}</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 mb-12'>
              {
                  services.map(service =><Service
                  key={service._id}
                  service={service}
                  setTreatment={setTreatment}>

                  </Service>)
              }
          </div>
          {treatment && <BookingModal 
          date={date} 
          treatment={treatment}
          setTreatment={setTreatment}
          ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;