import React from "react";
import Tag from "../../../components/ui/Tag/Tag";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from 'react-hot-toast';
import {
  deleteNewsLike,
  postNewsDisLike,
  postNewsLike,
} from "../../../servises/api/news/newsLikeAndDislike";
import toast from "react-hot-toast";
import StarRate from "../../ui/StarRate/StarRate";
import { postNewsRate } from "../../../servises/api/news/rateNews";

const LikeAndDislike = ({ newsId, isLiked, isDisliked, newsRate }) => {
  const queryClient = useQueryClient();
  const newsLikeMutation = useMutation({
    mutationFn: postNewsLike,
    onError: (error) => {
      console.log("error", error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
    },
  });
  const newsDislikeMutation = useMutation({
    mutationFn: postNewsDisLike,
    onError: (error) => {
      console.log("error", error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["newsDetail"]);
    },
  });
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

  return (
    <>
      <div className="flex gap-7 border-b-1 border-border-gray justify-between py-[25px]">
        <StarRate
          initialRateNumber={newsRate}
          onRate={(star) => {
            newsRateMutation.mutate({ newsId, rateNumber: star });
          }}
        />

        <div className="flex gap-4 items-center">
          <div className="flex gap-3 ">
            <Tag
              icon={
                isLiked ? (
                  <AiFillLike size={20} className="text-base-gray" />
                ) : (
                  <AiOutlineLike size={"20px"} />
                )
              }
              bgColor={"var(--color-soft-gray)"}
              textColor={"#5F5F66"}
              width={"37px"}
              height={"34px"}
              onClick={() => {
                newsLikeMutation.mutate(newsId);
              }}
            />
            <Tag
              icon={
                isDisliked ? (
                  <AiFillDislike size={20} className="text-base-gray" />
                ) : (
                  <AiOutlineDislike size={"20px"} />
                )
              }
              bgColor={"var(--color-soft-gray)"}
              textColor={"#5F5F66"}
              width={"37px"}
              height={"34px"}
              onClick={() => {
                newsDislikeMutation.mutate(newsId);
              }}
            />
          </div>
          <h2 className="font-semibold sm:text-lg">
            ایا از این مقاله راضی بودید؟
          </h2>
        </div>
      </div>
    </>
  );
};

export default LikeAndDislike;
