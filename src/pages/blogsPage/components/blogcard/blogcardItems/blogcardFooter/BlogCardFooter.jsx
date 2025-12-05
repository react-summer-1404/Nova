import React from "react";
import SocialButton from "./SocialButton";
import BlogcardView from "./BlogcardView";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteNewsLike, postNewsDisLike, postNewsLike } from "../../../../../../servises/api/news/newsLikeAndDislike";
const BlogCardFooter = ({
  currentLikeCount,
  currentDissLikeCount,
  currentView,
  id,
  isLiked,
  isDisLiked,
  likeId
}) => {
  const queryClient = useQueryClient();
  const newsLikeMutation = useMutation({
    mutationFn: postNewsLike,
    onError: (error) => {
      console.log("error", error);
      toast.error("لایک نشد");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
      toast.success("لایک شد");
    },
  });
  const newsDislikeMutation = useMutation({
    mutationFn: postNewsDisLike,
    onError: (error) => {
      console.log("error", error);
      const msg = error?.response?.data?.message
      toast.error(msg)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
      toast.success("دیسلایک شد");
    },
  });
  const newsDeleteLikeMutation = useMutation({
    mutationFn:(likeId)=>deleteNewsLike(likeId),
    onError: (error) => {
      console.log("error", error);
      const msg= error?.response?.data?.message
      toast.error(msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
      toast.success("لایک حذف شد");
    },
  });
  return (
    <div className="w-[64%] sm:w-full flex justify-between items-center text-[10px] sm:text-[16px] py-2">
      <div className=" flex justify-between items-center gap-1">
        <SocialButton
          icon={
            isLiked ? (
              <AiFillLike className="text-base-gray" />
            ) : (
              <AiOutlineLike />
            )
          }
          number={currentLikeCount}
          onclick={() => {
            isLiked? newsDeleteLikeMutation.mutate(likeId):newsLikeMutation.mutate(id)
          }}
        />
        <SocialButton
          icon={
            isDisLiked ? (
              <AiFillDislike className="text-base-gray" />
            ) : (
              <AiOutlineDislike />
            )
          }
          number={currentDissLikeCount}
          onclick={() => {
            newsDislikeMutation.mutate(id);
          }}
        />
      </div>
      <div style={{ color: "var(--color-dark-gray)" }}>
        <BlogcardView viewNumber={currentView} />
      </div>
    </div>
  );
};

export default BlogCardFooter;
