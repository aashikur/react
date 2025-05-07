import React from 'react';
import { Navigate } from 'react-router';


// this is main content section pert of the home page
// Ig. => left - Main - Right
const Home = () => {
    return <Navigate to="/catnews/:1" />; 
};

export default Home;