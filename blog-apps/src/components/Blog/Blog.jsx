import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({ blog, handleBookMarks,handleReadTime }) => {

    const { title, country, hashtag } = blog
    // console.log(blog)
    return (
        <>
            <div className="card bg-base-100 border border-gray-700 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{country}</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions flex justify-end items-center">
                        <div className='grow'>
                            <div onClick={()=>handleReadTime(blog)} className="btn btn-success">Mark As Read</div>
                        </div>

                        {
                            hashtag.map((tag,index) => <div key={index} className="badge badge-outline border border-gray-600">{tag}</div>)
                        }
                        <button onClick={()=>handleBookMarks(blog)} className='px-2 btn'>
                            <IoBookmarkSharp size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;