import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const Post = () => { 
    let navigate = useNavigate(); 
    const navigateHandle = () => {
        navigate('/')
    }
    
    const postData = useLoaderData();
    return (
        <div className="bg-black text-white p-4 rounded shadow-md">
            <h1 className="text-center text-4xl mb-4">Post </h1>
            {
                postData.map(singlePost => (
                    <div key={singlePost.id} className="border border-gray-700 p-4 rounded flex items-center">
                    <p className="text-sm font-bold mr-2 border rounded p-1">No. {singlePost.id}</p>
                    <h2 className="text-2xl font-semibold flex-1 text-left">{singlePost.title}</h2> 
                    <Link to={`/post/${singlePost.id}`}>see link </Link>
                    <button onClick={navigateHandle} className='ml-2'>view</button>
                </div>
                ))
            }
        </div>
    );
};

export default Post;