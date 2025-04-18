import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="p-4 gap-5 border border-gray-700 rounded flex justify-between mx-auto w-4/5">
                <div>Menu</div>
                <ul className='nav. flex gap-5 px-10'>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Profile">Profile</a></li>
                    <li><a href="/Service">Service</a></li> */}
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/About'>About</NavLink>
                    <NavLink to='/Profile'>Profile</NavLink>
                    <NavLink to='/Service'>Service</NavLink>
                    <NavLink to='/Users'>Users</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;