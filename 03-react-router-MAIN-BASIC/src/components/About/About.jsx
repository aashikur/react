import React from 'react';
import { useLoaderData } from 'react-router';

const About = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    return (
        <div> 
           
            <h1 className="text-6xl py-30 border border-gray-700 rounded">
                This is <b className='text-pink-500'>About</b>
            </h1>
        </div>
    );
};

export default About;