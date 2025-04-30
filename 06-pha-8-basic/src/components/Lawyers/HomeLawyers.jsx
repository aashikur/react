import React from 'react';
import { Link, useLoaderData } from 'react-router';

const HomeLawyers = () => {
    const LawyersData = useLoaderData();

    return (
        <div className='container'>
            <div className="grid grid-cols-2 gap-1 py-3">
                {
                    LawyersData.map(item => (
                        <div className="border p-3">
                            <h1 className="font-bold">
                                {item.name}
                            </h1>
                            <p>{item.fee}Taka</p>
                            <Link to={`/viewDetails/${item.id}`}>
                                <button className='btn'>View Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeLawyers;