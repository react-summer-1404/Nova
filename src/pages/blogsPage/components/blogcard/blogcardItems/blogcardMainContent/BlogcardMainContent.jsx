import React from "react";
import LabelAndDate from "./LabelAndDate";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import useNewsFavorite from "../../../../../../core/store/newsFavoriteStore";
import { useMutation } from "@tanstack/react-query";
import { postAddToFavoriteNews } from "../../../../../../servises/api/news/addToFavorite";
import toast from "react-hot-toast";

const BlogcardMainContent = ({ img, title, label, date, miniDescribe, id }) => {
  const { addedNewsToFavorite, addFavorite } = useNewsFavorite();
  const isFav = addedNewsToFavorite.includes(id);

  const mutationFavoriteNews = useMutation({
    mutationFn: () => postAddToFavoriteNews(id),
    onSuccess: () => toast.success("به علاقه مندی ها افزوده شد"),
    onError: (error) => {
      console.log("error", error);
      toast.error("مشکلی رخ داد");
    },
  });
  const handleFave = () => {
    addFavorite(id);
    mutationFavoriteNews.mutate(id);
  };

  return (
    <div className="flex items-center flex-col gap-4 text-[10px] sm:text-[16px] relative">
      <img
        src={img}
        alt="blog image"
        className="w-[295px] h-[224px] rounded-[15px] shadow-[0px_5px_20px_0px_#00000040]"
      />
      <div
        className="w-[36px] h-[36px]  flex flex-center rounded-[6px] bg-white absolute top-3 right-3 cursor-pointer"
        onClick={handleFave}
      >
        <FaHeart
          color={isFav ? "red" : "var(--color-disable-heart)"}
          size={28}
        />
      </div>
      <Link to={`/blogDetail/${id}`}>
        <h2 className="w-[250px] overflow-hidden font-semibold text-[18px] whitespace-nowrap">
          {title}
        </h2>
      </Link>
      <LabelAndDate label={label} date={date} />

      <p className="text-responsive"> {miniDescribe} </p>
    </div>
  );
};

export default BlogcardMainContent;
