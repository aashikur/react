import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-[1200px] mx-auto'> 
            <Header/> 
            <Outlet/>
            <Footer/> 
        </div>
    );
};

export default Root;