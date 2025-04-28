import React from 'react';
import { Link } from 'react-router';

const NavLinks = () => {
    return (
        <>
            <Link to={'/'} className='text-white'>Home</Link>
            <Link to={'/booking'} className='text-white'>Booking List</Link>
            <Link to={'/map'} className='text-white'>Map</Link>
            <li className='text-white'>Blogs</li>
            <li className='text-white'>Contact</li>
        </>
    );
};

export default NavLinks