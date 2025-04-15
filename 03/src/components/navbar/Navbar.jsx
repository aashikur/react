import React from 'react';
import Link from './Link';

const Navbar = () => {

    const navbarItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Portfolio", path: "/portfolio" },
        { id: 5, name: "Contact", path: "/contact" },
    ];



    return (
        <div>
            <ul className='flex gap-3 justify-center text-2xl'>
                {
                    navbarItems.map(route => <Link route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;