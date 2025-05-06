import React from 'react';
import logo from "/logo.png"
import { format, compareAsc } from "date-fns";

const Headeer = () => {
    return (
        <div>
            <div className="container">
                <img className='text-center inline-block' src={logo} alt="" />
                <p>{format(new Date(), "EEEE do MMMM yyyy")}</p>
            </div>
        </div>
    );
};

export default Headeer;