import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div className='border border-gray-700'>
            <div className="rounded flex justify-between items-center mx-auto w-4/5">
                <div className='mr-20'>Menu</div>
                <ul className='nav. flex gap-5 pr-20 py-3'>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Profile">Profile</a></li>
                    <li><a href="/Service">Service</a></li> */}
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/About'>About</NavLink>
                    <NavLink to='/Profile'>Profile</NavLink>
                    <NavLink to='/Contact'>Contact</NavLink>
                    <NavLink to='/Users'>Users</NavLink>
                    <NavLink to='/Users2'>Users2</NavLink>
                    <NavLink to='/Post'>Post</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;