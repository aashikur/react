import React, { useState } from 'react';
import Link from './Link';
import { AlignJustify, Menu, User, X } from 'lucide-react';

const navbarItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" },
];



const Navbar = () => {
    const myMenu = navbarItems.map((route,index) => <Link key={index} route={route}></Link>);

    const [MenuOpen, setMenuOpen] = useState(false)

    return (
        <div className='flex justify-between w-4/5 mx-auto py-3'>
            <div>
                <div onClick={() => { setMenuOpen(!MenuOpen) }} className='cursor-pointer flex gap-3'>
                    {MenuOpen ? <X /> : <AlignJustify />}  <h1>Menu</h1>
                </div>
                <ul className={`
                     ${MenuOpen? 'left-0':'left-100'}
                     absolute
                     top-12
                     left-0
                     -z-10
                     px-4
                     bg-white
                     w-full 
                     duration-100
                     transition-all
                     overflow-hidden
                     block
                     lg:hidden`}>
                    {myMenu}
                </ul> 
                <div className={`
                    ${!MenuOpen? 'opacity-0':'opacity-70 '}
                    bg-black absolute top-12 left-0 h-screen w-full backdrop-blur-2xl -z-20 duration-200 transition-opacity lg:hidden
                    `}>
df
                </div>
            </div>
            <ul className='hidden lg:flex gap-3 justify-center text-xl'>
                {
                    myMenu
                }
            </ul>
            <div className=''>
                <User></User>
            </div>
        </div>
    );
};

export default Navbar;