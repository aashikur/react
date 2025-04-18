import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="p-4 gap-5 min-w-96 border border-gray-700 rounded flex justify-between mx-auto w-4/5">
                <div>Menu</div>
                <ul className='flex gap-5'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Profile">Profile</a></li>
                    <li><a href="/Service">Service</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;