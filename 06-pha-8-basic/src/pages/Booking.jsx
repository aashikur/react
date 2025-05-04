import React from 'react';
import BookingChart from '../components/BookingChart';
import BookingData from '../components/BookingData';

const Booking = () => {
    return (
        <div className='container'>
            <BookingChart/>
            <BookingData/>
        </div>
    );
};

export default Booking;