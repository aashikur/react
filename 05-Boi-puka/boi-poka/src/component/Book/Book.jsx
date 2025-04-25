import React from 'react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // console.log(singleBook);

    const {
        bookName: title,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        bookId,
        yearOfPublishing,
    } = singleBook; 

    return (
        <Link to={`/booksDetails/${bookId}`}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 w-full max-w-xs mx-auto">
            <img
                src={image}
                alt={title}
                className="h-52 w-full object-cover rounded-xl"
            />

            <div className="mt-4 space-y-2">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    {title}
                </h2>

                {/* Author */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    By: {author}
                </p>

                {/* Category and Pages */}
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Category: {category} | Pages: {totalPages}
                </p>

                {/* Rating and Year */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-yellow-500 dark:text-yellow-400">
                        ⭐ {rating}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                        {yearOfPublishing}
                    </span>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;
