import { AppReview } from '../../data/appData';
import StarRating from './StarRating';

interface ReviewListProps {
  reviews: AppReview[];
}

function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No reviews yet. Be the first to review this app!</p>
      </div>
    );
  }

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <img
              src={review.userPhoto}
              alt={review.userName}
              className="w-10 h-10 rounded-full object-cover mr-4"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="font-medium">{review.userName}</h4>
                <span className="text-gray-500 text-sm">
                  {formatDate(review.date)}
                </span>
              </div>
              <div className="mb-3">
                <StarRating initialRating={review.rating} onChange={() => {}} readOnly size="sm" />
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;