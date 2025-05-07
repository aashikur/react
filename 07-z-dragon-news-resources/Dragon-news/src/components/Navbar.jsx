import React from 'react';
import { Link, NavLink } from 'react-router';
import userlogo from '/user.png';

const Navbar = () => {
    return (
        <div className='container border border-gray-300 rounded-md p-2 mt-5'>
            <div className="flex justify-between">
                <div></div>
                <div>
                    <NavLink to="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                    <NavLink to="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
                    <NavLink to="/career" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Career</NavLink>
                </div>
                <div>
                    <Link to="/auth/login" className=" btn btn-accent text-shadow-indigo-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        Login</Link>
                    <Link to="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        <img className='inline-block' src={userlogo} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;