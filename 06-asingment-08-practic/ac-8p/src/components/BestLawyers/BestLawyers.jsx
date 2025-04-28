import React, { useState } from 'react';
import { MdDownloadDone, MdDownloading} from 'react-icons/md';
import SingleLawer from './SingleLawer';

const BestLawyers = ({LawData}) => { 
    const [loadMore, setLoadMore] = useState(false)

    const displayedLawyers = loadMore ? LawData : LawData.slice(0, LawData.length / 2); 

    if(!displayedLawyers || displayedLawyers.length === 0)
        return <h1 className='h-[300px] text-center flex items-center justify-center'>No Lawyers Available</h1>;
    return ( 

        <div className='py-20'> 
            <div className='container flex flex-col gap-10 items-center text-center pb-15'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Our Best Lawyers</h1>
                <p>Our best lawyers are highly skilled professionals dedicated to providing exceptional legal services, ensuring justice, and delivering outstanding results for our clients with integrity and expertise.</p>
            </div>
            <div className="container grid md:grid-cols-2 gap-5">
              {
                displayedLawyers.map(item =>  <SingleLawer key={item.id} item={item}></SingleLawer>)
              }
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