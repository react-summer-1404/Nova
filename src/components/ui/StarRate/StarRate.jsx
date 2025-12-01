import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { postNewsRate } from "../../../servises/api/news/rateNews";
import toast from "react-hot-toast";

export default function StarRate({ newsId }) {
  const [rating, setRating] = useState(0);

  const newsRateMutation = useMutation({
    mutationFn: ({ newsId, rateNumber }) => postNewsRate(newsId, rateNumber),
    onError: (error) => {
      console.log("error", error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: () => {
      toast.success("امتیاز شما ثبت شد");
    },
  });

  const handleClick = (star) => {
    setRating(star); // اول state رو آپدیت می‌کنیم
    newsRateMutation.mutate({ newsId, rateNumber: star }); // بعد API call
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
          onClick={() => handleClick(star)} // پارامتر ستاره
        />
      ))}
    </div>
  );
}
