import React, { useEffect, useState } from 'react';
import Banner from '../../component/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    const [allBooksData, setAllBooksData] = useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data => setAllBooksData(data))
    },[]) 


    return (

        <div>
            <Banner/>
            <Books allBooksData={allBooksData}></Books>
        </div>
    );
};

export default Home;