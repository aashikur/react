import React from 'react';
import Header from '../Header/Header';

const About = () => {
    return (
        <div> 
           <Header></Header>
            <h1 className="text-6xl py-30 border border-gray-700 rounded">
                This is <b className='text-pink-500'>About</b>
            </h1>
        </div>
    );
};

export default About;