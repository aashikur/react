import React from 'react';
import AppointmentList from '../../components/AppointmentList/AppointmentList';
import useBooking from '../../hooks/useBooking';

const BookingList = () => { 
    const {bookings, getBookingLocal} = useBooking();  
    const bookingData = getBookingLocal(); // Fetch booking data 
    console.log('bookingData USEEFFECT:', bookings)

    return (
        <div className='container'>
            <div className="border border-gray-300 rounded-md py-50 text-center my-3 bg-gray-900 text-white">
                The Chart ~ ReCharts
            </div>

        
          <AppointmentList bookings={bookings}></AppointmentList>

        </div>
    );
};

export default BookingList;