import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
      <div className='shadow-md bg-gray-700'>
          <nav className='container flex justify-between items-center h-[50px] px-5  text-white'>
            <h3 className='font-bold'>FireBase</h3>
            <span>
                <NavLink to='/' className='mr-2'>Home</NavLink>
                <NavLink to='/login' className='mr-2'>Login</NavLink>
            </span>
        </nav>
      </div>
    );
};

export default Navbar;