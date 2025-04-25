import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import BestLawyers from '../../components/BestLawyers/BestLawyers';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>  
            <Banner></Banner> 
            <BestLawyers></BestLawyers>
            <Footer></Footer> 
            
            
        </div>
    );
};

export default Home;