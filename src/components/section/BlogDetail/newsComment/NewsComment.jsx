import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UserComment from "./UserComment/UserComment";
import NewsForm from "./newsForm/NewsForm";
import { getNewsComment } from "../../../../servises/api/blogComments/comment";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
const PAGE_SIZE = 5;

const NewsComment = ({ newsId }) => {
  const { data, isPending } = useQuery({
    queryKey: ["newsComment", newsId],
    queryFn: () => getNewsComment(newsId),
  });

  const [page, setPage] = useState(PAGE_SIZE);

  const visibleComments = data?.slice(0, page);

  return (
    <div className="border-[#DFDFDF] flex justify-center items-center w-full">
      <div className="flex flex-col items-end gap-5 w-full">
        <p className="font-[600] text-[18px] md:text-[22px] ">نظرات</p>

        {isPending && <p>در حال بارگذاری...</p>}

        {visibleComments?.map((item) => {

          return (
            <UserComment
              key={item.id}
              insertDate={item.insertDate}
              dissLikeCount={item.dissLikeCount}
              likeCount={item.likeCount}
              describe={item.describe}
              title={item.title}
              id={item.id}
              currentUserIsDissLike={item.currentUserIsDissLike}
              currentUserIsLike={item.currentUserIsLike}
              userId={item.userId}
              newsId={newsId}
            />
          );
        })}

        <div className=" w-full flex-center gap-4 ">
          {page > PAGE_SIZE && (
            <div className="flex gap-1 items-center cursor-pointer">
              <GoChevronUp className="text-dark-purple" />
              <h2
                onClick={() =>
                  setPage((prev) => Math.max(PAGE_SIZE, prev - PAGE_SIZE))
                }
                className="text-dark-purple"
              >
                نمایش کمتر
              </h2>
            </div>
          )}
          {page < (data?.length || 0) && (
            <div className="flex gap-1 items-center cursor-pointer">
              <GoChevronDown className="text-dark-purple" />
              <h2
                onClick={() => setPage((prev) => prev + PAGE_SIZE)}
                className="text-dark-purple"
              >
                نمایش بیشتر
              </h2>
            </div>
          )}
        </div>

        <div className="w-full h-[270px] md:h-[390px] bg-[#F7F7FA] rounded-[10px] flex justify-center items-center">
          <NewsForm newsId={newsId} />
        </div>
      </div>
    </div>
  );
};

export default NewsComment;
