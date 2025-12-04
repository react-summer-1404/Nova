import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRate({ initialRateNumber = 0, onRate }) {
  const [rating, setRating] = useState(initialRateNumber);

  const handleClick = (star) => {
    setRating(star);
    if (onRate) {
      onRate(star); 
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={28}
          className={
            star <= rating
              ? "text-yellow-400 cursor-pointer"
              : "text-gray-400 cursor-pointer"
          }
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
}
