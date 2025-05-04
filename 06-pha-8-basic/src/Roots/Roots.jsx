import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useBooking from '../hooks/useBooking';

const Roots = () => {
    const {booked} = useBooking();
    console.log('Update ? :=> ', booked)
    return (
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>
            
        </div>
    );
};

export default Roots;