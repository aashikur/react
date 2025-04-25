import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';

const BooksDetails = () => { 
    const { id } = useParams();
    const data = useLoaderData();
    const newData = data.find(item => item.bookId === parseInt(id));
    const {
        author,
        bookName,
        image,
        totalPages,
        rating,
        category,
        tags,
        bookId,
        yearOfPublishing,
    } = newData;
    
    const handleMarkAsRead = id => {
        // store with Id 
        // where to store
        // array or collection
        // if book already exist the show a alert
        // if book not exist then push in the collection or array 

        addToStoreDB(id)
    }

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            {/* Left: Image */}
            <div className="md:w-1/2 flex items-center justify-center p-4">
                <img 
                    className="w-full max-h-96 object-contain border border-gray-300 rounded-lg" 
                    src={image} 
                    alt="Book Cover Details" 
                />
            </div>
            {/* Right: Details */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">{bookName}</h2>
                    <p className="text-gray-700 mb-3"><strong className="font-semibold">Author:</strong> {author}</p>
                    <p className="text-gray-700 mb-3"><strong className="font-semibold">Year of Publishing:</strong> {yearOfPublishing}</p>
                    <p className="text-gray-700 mb-3"><strong className="font-semibold">Total Pages:</strong> {totalPages}</p>
                    <p className="text-gray-700 mb-3"><strong className="font-semibold">Rating:</strong> {rating}</p>
                    <p className="text-gray-700 mb-3"><strong className="font-semibold">Category:</strong> {category}</p>
                    <p className="text-gray-700 mb-3"><strong className="font-semibold">Tags:</strong> {tags.join(', ')}</p>
                </div>
                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => addToStoreDB(id)}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                         Mark as Read
                    </button>
                    <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                    Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;