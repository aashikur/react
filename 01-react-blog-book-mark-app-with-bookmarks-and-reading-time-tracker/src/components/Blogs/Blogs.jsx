import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = ({handleBookMarks,handleReadTime}) => {

    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(Blogs)
    return (
        <>
            <h1 className='border rounded-md bg-gradient-to-r from-green-600 to-green-400 font-bold text-2xl px-10 py-5 mb-2'>Total Blogs: {Blogs.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    Blogs.map((blog,index) => <Blog key={index} handleReadTime={handleReadTime} handleBookMarks={handleBookMarks} blog={blog}></Blog>)
                }
            </div>
        </>
    );
};

export default Blogs;