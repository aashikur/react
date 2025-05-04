import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='border py-5 flex justify-between container'>
            <div>Menu</div>
            <ul className='flex gap-5 cursor-pointer'>
                <NavLink to={'/'}><li>Home</li></NavLink>
               <NavLink to={'/booking'}> <li>Booking</li></NavLink>
               <NavLink to={'/blog'}> <li>Blog</li></NavLink>
               <NavLink to={'/contact'}> <li>Contact</li></NavLink>

            </ul>
        </div>
    );
};

export default Navbar;