import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Roots = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>
            
        </div>
    );
};

export default Roots;