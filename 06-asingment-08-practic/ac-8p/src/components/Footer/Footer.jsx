import React from 'react';
import NavLinks from '../Navbar/NavLinks';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 py-10 text-white flex flex-col items-center justify-center gap-5">
                <h1 className='text-4xl font-bold'>LawBook</h1>

                <ul className="flex gap-4">
                    <NavLinks></NavLinks>    
                </ul>

                <div className="border-b w-11/12 mx-auto border-dashed border-gray-700"></div> 

                <ul className="flex gap-4">
                    <li>
                        <FaFacebook></FaFacebook>
                    </li>
                    <li>
                        <FaInstagram></FaInstagram>
                    </li>
                    <li>
                        <FaYoutube></FaYoutube>
                    </li>
                    <li>
                        <FaGithub></FaGithub>
                    </li>

                </ul>
            </footer>                
        </div>
    );
};

export default Footer;