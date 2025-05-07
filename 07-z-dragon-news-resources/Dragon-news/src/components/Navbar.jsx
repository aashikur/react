import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userlogo from '/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, LogOutUser } = use(AuthContext); 

    const handleLogout = () => {
        console.log("Logout clicked");
        LogOutUser().then(() => {alert('Logout Success.')}).catch(error => console.log(error.message))
    }

    return (
        <div className='container border border-gray-300 rounded-md p-2 mt-5'>

            <div className="flex justify-between">
                <div> 
                User : {user && user.email} {!user && <span className='text-red-500'>Guest Account</span>}
                </div>
                <div>
                    <NavLink to="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                    <NavLink to="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
                    <NavLink to="/career" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Career</NavLink>
                </div>
                <div>
                    {
                        user ? <Link onClick={handleLogout} className="btn btn-accent text-shadow-indigo-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Logout</Link> : <Link to="/auth/login" className="btn btn-accent text-shadow-indigo-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                    }

                    <Link to="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        <img className='inline-block' src={userlogo} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;