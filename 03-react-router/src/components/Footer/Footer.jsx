import React from 'react';

const Footer = () => {
    return (
        <footer className='border py-8 border-gray-700 rounded opacity-75'>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;