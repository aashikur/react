import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center my-light">
            <div className="py-15 md:py-30 my-border">
                <div className="order-1 md:order-2 ">
                    <a className="text-2xl lg:text-4xl">
                        <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Auction</span>
                        <span className="font-extrabold text-yellow-300">Gallery</span>
                    </a>
                </div>
                <ul className='flex gap-5 mt-4 justify-center opacity-80 my-2 md:my-4 text-[1rem]'>
                    <li>Bid.</li>
                    <li>Win.</li>
                    <li>Own.</li>
                </ul>
                <ul className="inline-flex gap-5 md:gap-10 px-1 text-sm border-none text-white opacity-80">
                    <li>
                        <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">Home</a>
                    </li>
                    <li>
                        <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">Auctions</a>
                    </li>
                    <li>
                        <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">Categories</a>
                    </li>
                    <li>
                        <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">How to works</a>
                    </li>
                </ul>

                <p className='mt-4 md:mt-5 opacity-70 text-[.8rem]'>© 2025  <a href="#">Ashikur Rahaman</a>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;