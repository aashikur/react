import React from 'react';
import { useLoaderData } from 'react-router';

const SinglePost = () => {
    const SinglePost = useLoaderData();
    console.log(SinglePost)
    return (
        <div className="bg-gray-800 text-left text-white p-5 rounded-lg max-w-xl mx-auto my-5 shadow-lg">
            <div className="flex items-center mb-4">
                <img 
                    src="https://via.placeholder.com/50" 
                    alt="Profile" 
                    className="rounded-full mr-4 border border-gray-700 p-2"
                />
                <h3 className="m-0 text-lg font-semibold">Facebook user.</h3>
            </div>
            <h2 className="my-2 text-xl font-bold uppercase border-b text-pink-500">{SinglePost.title}</h2>
            <p className="my-2 leading-relaxed">
                {
                    SinglePost.body
                }
             </p>
            <span  className="mt-4 p-3 rounded font-bold border border-gray-700 py-1 text-pink-300">Post No. {SinglePost.id}</span>
        </div>
    );
};

export default SinglePost;