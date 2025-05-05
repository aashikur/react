import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Roots = () => {
    return (
        <div>
            
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Roots;