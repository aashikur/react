import React from 'react';
import Headeer from '../components/Headeer';
import LatestNews from '../components/LatestNews';
import RIghtAside from '../components/HomeLayout/RIghtAside';
import { Outlet } from 'react-router';
import LeftAside from '../components/HomeLayout/LeftAside';

const HomeLayout = () => {
    return (
        <div> 
            <Headeer/>  
            <LatestNews/>
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