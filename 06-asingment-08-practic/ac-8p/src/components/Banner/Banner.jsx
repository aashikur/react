import React from 'react';

const Banner = () => {     
    return (
        <div className='md:mt-20'>
            <div className="rounded-2xl my-2 container h-[400px] md:h-[620px] px-10 lg:px-70 text-center text-white/95  bg-gradient-to-b from-gray-950 to-gray-800 flex flex-col gap-10 justify-center items-center">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Get Your Justice In Time</h1>
                <p className='text-base lg:text-xl'>Law ensures fairness, protects rights, resolves disputes, and maintains order in society for justice and equality.</p>
            </div> 

        </div>
    );
};

export default Banner;