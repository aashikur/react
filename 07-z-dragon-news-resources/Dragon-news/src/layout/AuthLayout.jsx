import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/pages/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Navbar/>

            <div className="container">
            <h1>Authentication</h1>
            <p>Please choose an option below:</p>  
            <hr className='border-gray-300 py-5 mt-5'/> 
             <Outlet/>

            </div>
        </div>
    );
};

export default AuthLayout;