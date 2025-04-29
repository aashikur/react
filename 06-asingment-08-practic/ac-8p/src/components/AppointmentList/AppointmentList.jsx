import React from 'react';
import useBooking from '../../hooks/useBooking';

const AppointmentList = ({ bookings }) => {
        const {removeBooking, simpleBookings} = useBooking();

    const handleCancelAppointment = (id) => {
        removeBooking(id);
    }
    console.log('appointment test: simple', simpleBookings)

    
    return ( 

       <div>
        {
            bookings.map((item, index) =>
                <div key={index} className={`${index % 2 === 0? 'bg-black/5' : ''} flex flex-col gap-3 border border-gray-200 rounded-md p-5 my-2`}>
                <div className='flex items-center'>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>{item.name}</h1>
                        <p>{item.specialty}</p>
                    </div>
                    <p>Appointment Fee: {item.fee} Taka</p>
                </div>
                <button onClick={() => {handleCancelAppointment(item.id)}} className='bg-red-50 cursor-pointer border py-3 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full'>Cancel Appointment</button>
            </div>
            )
        }
       </div>
    );
};

export default AppointmentList;


