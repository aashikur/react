import { useState } from 'react';
import { useAppData } from '../../hooks/useAppData';
import StarRating from './StarRating';

interface ReviewFormProps {
  appId: string;
  onReviewSubmitted?: () => void;
}

function ReviewForm({ appId, onReviewSubmitted }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const { addReview, isAppInstalled } = useAppData();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    
    if (comment.trim() === '') {
      setError('Please enter a comment');
      return;
    }
    
    if (!isAppInstalled(appId)) {
      setError('You must install this app before leaving a review');
      return;
    }
    
    addReview(appId, rating, comment);
    setRating(0);
    setComment('');
    setError('');
    
    if (onReviewSubmitted) {
      onReviewSubmitted();
    }
  };
  
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    if (error) setError('');
  };
  
  if (!isAppInstalled(appId)) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-gray-600">
          Please install this app to leave a review
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-medium mb-4">Write a Review</h3>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Rating
        </label>
        <StarRating onChange={handleRatingChange} initialRating={rating} />
      </div>
      
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-700">
          Your Review
        </label>
        <textarea
          id="comment"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this app..."
          className="input resize-none"
          required
        />
      </div>
      
      {error && (
        <div className="mb-4 p-2 bg-error-50 text-error-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;