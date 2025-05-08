import React from "react";
import { Link } from "react-router"; // Note: use 'react-router-dom' if you're using React Router v6+

const NewsDetailsCard = ({ news }) => {
  // Destructure top-level fields
  const {
    category_id,
    title,
    rating,
    total_view,
    thumbnail_url,
    image_url,
    details,
    tags,
    author,
  } = news || {};

  // If author is undefined or news is not yet loaded
  if (!author) {
    return <div className="p-6 text-center text-gray-500">Loading...</div>;
  }

  // Destructure author safely
  const { name, published_date, img } = author;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <img
        src={image_url}
        alt={title}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6 text-gray-800">{title}</h1>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <img src={img} alt={name} className="w-10 h-10 rounded-full" />
          <div>
            <p>{name}</p>
            <p>{new Date(published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="text-right">
          <p>
            <span className="font-semibold">Views:</span> {total_view}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating.number} ⭐ (
            {rating.badge})
          </p>
        </div>
      </div>

      <div className="mt-6 text-gray-700 leading-relaxed">{details}</div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to={`/catnews/${category_id}`}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
