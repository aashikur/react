import React from 'react';
import Headeer from '../components/Headeer';

const HomeLayout = () => {
    return (
        <div> 
            <Headeer/> 
            <button className="btn btn-primary">click me</button>
            <div className="test">home Layout </div>
        </div>
    );
};

export default HomeLayout;