import React, { useEffect, useState } from 'react';
import Headeer from '../Headeer';
import RIghtAside from '../HomeLayout/RIghtAside';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../HomeLayout/NewsCards';
import NewsDetailsCard from '../HomeLayout/NewsDetailsCard';

const NewsDetails = () => {
    const [news, setNews] = useState([]);
    const newsDetails = useLoaderData();
    const parms = useParams();

    useEffect(()=> { 

        const FilterNews = newsDetails.find(data => data.id == parms.id);
        setNews(FilterNews);

    }, [newsDetails, parms, news])

    // console.log(newsDetails[0].id, parms, news);

    if(!news) return <h1>Loading...</h1>;

    
    return (
        <div>
            <div className="container">
                <header>
                    <Headeer/>
                </header> 
                <main className='flex gap-5 text-left'>
                    <div className="w-9/12 border border-gray-200 rounded-2xl p-3">
                         <h1>This is News Detils</h1>
                        { 

                           news && <NewsDetailsCard news={news}/>
                        }
                    </div> 
                    <div className='border rounded-2xl border-gray-200 flex-1 p-3'>
                        <RIghtAside/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default NewsDetails;