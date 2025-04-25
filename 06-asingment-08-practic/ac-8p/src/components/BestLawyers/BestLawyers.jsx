import React, { useState } from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { IoAddCircle} from 'react-icons/io5';
import { MdDownloadDone, MdDownloading} from 'react-icons/md';
import { useData,data } from '../hooks/useLocalData';

const BestLawyers = () => {
    const [loadMore, setLoadMore] = useState(false)
    const [booked, setBooked] = useState(false)

    const {printf} = useData(); 

    printf(data)

    return ( 
        
        <div className='py-20'>
            <div className='container flex flex-col gap-10 items-center text-center pb-15'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Our Best Lawyers</h1>
                <p>Our best lawyers are highly skilled professionals dedicated to providing exceptional legal services, ensuring justice, and delivering outstanding results for our clients with integrity and expertise.</p>
            </div>
            <div className="container md:flex justify-between gap-5">
                <div className="flex flex-col text-center md:text-left md:flex-row flex-1 border border-gray-300 rounded-lg p-5 gap-5 items-center">
                    <div className="w-50 h-50 rounded-md bg-gray-400">
                        image error
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                            <span className="badge badge-success ">Available</span>
                            <span className="badge badge-info ">5+ years Experience</span>
                            <span className="badge badge-neutral ">phd</span>
                            <span className="badge badge-warning">88+ case solve</span>
                        </div>
                        <h1 onClick={() => setBooked(!booked)} className='text-3xl font-bold flex items-center'>
                            Awlad Hossain
                            <button className='cursor-pointer px-2 text-[1.5rem] rounded p-1 border-green-500 text-green-800 inline-flex'>
                                {!booked ?
                                    <IoAddCircle />
                                    :
                                    <BsBookmarkCheckFill />
                                }
                            </button>
                        </h1>
                        <p className="opacity-70">Criminal Expert</p>
                        <p className="opacity-70 text-sm">License No: Bd 45854462</p>
                        <button className='btn bg-transparent border cursor-pointer border-blue-200 text-blue-500 hover:bg-blue-600 hover:text-white rounded-2xl py-2 text-lg'>
                            view details
                        </button>
                    </div>
                </div>
                <div className="flex-1 border border-gray-300 rounded-lg py-10"></div>
            </div>

            <div className='text-center pt-10'>
                <button onClick={() => setLoadMore(!loadMore)} className='btn bg-gray-700 text-white border cursor-pointer border-blue-200 hover:bg-blue-600 hover:text-white rounded-2xl py-3 px-10 text-lg'>
                    Load More
                    {loadMore ? <MdDownloadDone /> : <MdDownloading />}


                </button>
            </div>
        </div>
    );
};

export default BestLawyers;