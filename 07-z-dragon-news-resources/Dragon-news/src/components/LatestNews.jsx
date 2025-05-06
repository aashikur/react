import React from 'react';
import Marquee from 'react-fast-marquee';
import Navbar from './Navbar';

const LatestNews = () => {
    return (
        <div className='container '>
            <div className="flex gap-5 bg-gray-300 p-2">
                <div className='bg-secondary p-1'>Latest</div>
             <Marquee className='bg-gray-300' speed={50} gradient={false} pauseOnHover={true}>
             <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ipsam velit reiciendis recusandae deleniti molestiae nihil nemo odio voluptate rem cum delectus similique modi dolor a, fuga fugiat explicabo! Cum!</div>

             </Marquee> 

            </div> 


            <Navbar/>

        </div>
    );
};

export default LatestNews;