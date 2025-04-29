import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import BestLawyers from '../../components/BestLawyers/BestLawyers';


const Home = () => { 
    const LawData = useLoaderData(); 

    return (
        <div>
            <Banner></Banner> 
            <BestLawyers LawData={LawData}></BestLawyers>            
        </div>
    );
};

export default Home;