import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Loader1 from '../Loader/Loader1';


const Root = () => { 
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location); 

    return (
        <div>
           <Header></Header> 
           <div className="">
            {
                isNavigating && <Loader1></Loader1>
            }
           </div>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;