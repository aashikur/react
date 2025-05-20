import React from 'react';
import Headeer from '../components/Headeer';
import LatestNews from '../components/LatestNews';
import RIghtAside from '../components/HomeLayout/RIghtAside';
import { Outlet } from 'react-router';
import LeftAside from '../components/HomeLayout/LeftAside';
import HomeSlider from '../components/HomeLayout/HomeSlider';
import ChorkiPromoBanner from '../Ui/ChorkiBanner';

const HomeLayout = () => {
    return (
        <div> 
            <Headeer/>  
            <LatestNews/> 
            <HomeSlider/> 
           <div className=" max-w-[800px] mx-auto">
                <ChorkiPromoBanner
                    bannerUrl="https://i.ibb.co.com/JgJvnCW/b3.png"
                    thumbnailUrl="https://i.ibb.co.com/Kjsw7VnF/2.webp"
                />
           </div>
            
            <div className="container">
                <img src="https://i.ibb.co.com/84mFRWQV/10.webp" alt="" />
            </div>
        <main className='border-2 border-gray-300 rounded-md'>
            <div className="container flex gap-5">
                <div className="w-3/12 bg-gray-200 p-2">  
                <LeftAside/>
                </div>
                <div className="w-6/12 bg-gray-300 p-2"> 
                   <Outlet/>
                </div>
                <div className="w-3/12 bg-gray-200 p-2"> 
                <RIghtAside/>

                </div>
            </div>

        </main>

        </div>
    );
};

export default HomeLayout;