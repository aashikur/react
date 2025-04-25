import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    const link =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/readList">ReadList</Link></li>
        </> 

    return (
        <div className="navbar justify-between bg-base-100 shadow-md">
            {/* Logo */}
            <div className="">
                <a className="btn btn-ghost normal-case text-xl text-pink-500 font-bold underline">BOIPUKA</a>
            </div>

            {/* Menu (hidden on small screens, visible on larger screens) */}
            <div className="hidden lg:flex flex-none">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>

            {/* Login Button */}
            <div className="flex-none">
                <button className="btn btn-primary">Login</button>
            </div>

            {/* Mobile Menu (hamburger icon) */}
            <div className="lg:hidden flex-none">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;