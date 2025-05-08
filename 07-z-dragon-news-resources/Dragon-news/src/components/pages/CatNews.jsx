import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../HomeLayout/NewsCards';

const CatNews = () => {
    const { id } = useParams();  // :4  
    // console.log('test id', id)
    const [filterNews, setFilterNews] = useState([]); // this is the data that we are going to show in this page

    const data =  useLoaderData(); 
    // console.log(data); // this is the data that we are going to show in this page 
    // console.log(data); // this is the data that we are going to show in this page
    useEffect(() => {
        // const filterNews = data.filter((news) => news.category_id == Number(id)); XXX ERROR :4 != 4
        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        if(id == ":0") {
            // console.log("ID IS 0");
            setFilterNews(data); // this is the data that we are going to show in this page
            return;
        } 



        if(id == ":1") {
            // console.log("ID IS 1"); 
            const filterNewss = data.filter( news => news.others.is_today_pick == true ); 
            // filterNewss.map(news => console.log(news.others)); // this is the data that we are going to show in this page
            setFilterNews(filterNewss); // this is the data that we are going to show in this page
            return;
        }
        
        const filterNewss = data.filter((news) => news.category_id == id);
        // console.log(filterNews , id , filterNews[0]?.category_id); 
        // console.log(filterNews); // this is the data that we are going to show in this page
        setFilterNews(filterNewss); // this is the data that we are going to show in this page
      }, [data, id]);



    // console.log(id); // this is the id of the news that we are going to show in this page

    




    return (
        <div>
            CAT NEWS PAGE  {filterNews.length} 
            {
                filterNews.map(news => <NewsCards news={news}></NewsCards>)
            }
        </div>
    );
};

export default CatNews;