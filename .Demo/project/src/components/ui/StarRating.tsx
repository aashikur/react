import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  initialRating?: number;
  onChange: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
}

function StarRating({ 
  initialRating = 0, 
  onChange, 
  size = 'md',
  readOnly = false 
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  
  const handleClick = (value: number) => {
    if (readOnly) return;
    setRating(value);
    onChange(value);
  };
  
  const getStarSize = () => {
    switch (size) {
      case 'sm': return 'h-4 w-4';
      case 'lg': return 'h-6 w-6';
      default: return 'h-5 w-5';
    }
  };
  
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => handleClick(value)}
          onMouseEnter={() => !readOnly && setHover(value)}
          onMouseLeave={() => !readOnly && setHover(0)}
          className={`${readOnly ? 'cursor-default' : 'cursor-pointer'} p-1 focus:outline-none`}
          disabled={readOnly}
          aria-label={`Rate ${value} out of 5 stars`}
        >
          <Star
            className={`
              ${getStarSize()}
              ${
                (hover || rating) >= value
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'
              }
              transition-colors
            `}
          />
        </button>
      ))}
    </div>
  );
}

export default StarRating;