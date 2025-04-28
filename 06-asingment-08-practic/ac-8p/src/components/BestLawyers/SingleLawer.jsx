import React, { useState } from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { IoAddCircle } from 'react-icons/io5';
import { Link } from 'react-router';

const SingleLawer = ({item}) => {
        const [booked, setBooked] = useState(false) 
    
    return (
        <div className="flex flex-col text-center md:text-left md:flex-row flex-1 border border-gray-300 rounded-lg p-5 gap-5 items-center">
        <div className="w-50 h-50 rounded-md bg-gray-400">
            image error
        </div>
        <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                <span className="badge badge-success ">Available</span>
                <span className="badge badge-info ">{item.experience} Experience</span>
                <span className="badge badge-neutral ">phd</span>
                <span className="badge badge-warning">88+ case solve</span>
            </div>
            <h1 onClick={() => setBooked(!booked)} className='text-3xl font-bold flex items-center justify-center md:justify-start'>
                {item.name}
                <button className='cursor-pointer px-2 text-[1.5rem] rounded p-1 border-green-500 text-green-800 inline-flex'>
                    {!booked ?
                        <IoAddCircle />
                        :
                        <BsBookmarkCheckFill />
                    }
                </button>
            </h1>
            <p className="opacity-70">📃 {item.specialty}</p>
            <p className="opacity-70 text-sm">License No: {item.license}</p>
           
           <Link to={`/viewdetails/${item.id}`} className=''>
           <button className='btn  w-full bg-transparent border cursor-pointer border-blue-200 text-blue-500 hover:bg-blue-600 hover:text-white rounded-2xl py-2 text-lg'>
                view details
            </button>
           </Link> 
            
        </div>
    </div>
    );
};

export default SingleLawer;