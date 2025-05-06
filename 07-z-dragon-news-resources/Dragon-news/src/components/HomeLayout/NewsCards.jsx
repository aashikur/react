import React from 'react';
import { CiBookmark } from 'react-icons/ci';

const NewsCards = ({ news }) => {
  const {
    title,
    author,
    total_view,
    image_url,
    details,
    rating,
    tags,
    published_date
  } = news;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mb-6 border border-gray-200">
      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        {/* Author Info */}
       <div className='flex items-center justify-between'>
       <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{author?.name}</p>
            <p className="text-xs">{new Date(author?.published_date).toDateString()}</p>
          </div>
        </div> 
        <div><CiBookmark className='cursor-pointer' size={24} />
        </div>
       </div>

        {/* Details */}
        <p className="text-gray-700 mb-4">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-sm text-blue-700 mb-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-500">
          <p>👁️ {total_view.toLocaleString()} views</p>
          <p>⭐ {rating.number} — {rating.badge}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
