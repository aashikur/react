import React, { useEffect, useState } from 'react';
import Banner from '../../component/Banner/Banner';
import Books from '../Books/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [allBooksData, setAllBooksData] = useState([])
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setAllBooksData(data))
    }, [])


    return (

        <div>
            <Helmet>
                <title>বইপোকা | Home</title>
            </Helmet>
            <Banner />
            <Books allBooksData={allBooksData}></Books>
        </div>
    );
};

export default Home;