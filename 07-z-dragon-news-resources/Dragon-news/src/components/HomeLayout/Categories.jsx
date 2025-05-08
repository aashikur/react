import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => { 
        fetch('/categories.json').then((res) => res.json())
            .then(data => setCategories(data))

    }, []);
    if (!categories) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    return (
        <div>

            <h2 className='text-xl font-bold text-center my-5'>
                All Catagories ({categories.length})
                <div className='catMenu'>
                    <br />
                    {
                        categories.map((category) => (
                            <div key={category.id} className="flex justify-between items-center">
                                <NavLink to={`/catnews/${category.id}`} className='text-md font-semibold btn w-full'>{category.name}</NavLink>

                            </div>
                        ))
                    }
                </div>
            </h2>
        </div>
    );
};

export default Categories;