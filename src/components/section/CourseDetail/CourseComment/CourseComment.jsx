import React from "react";
import CommentForm from "./Form/CommentForm";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCourseDetailComment } from "../../../../servises/api/coursesDetail/getComment";
import UserComment from "./UserComment/UserComment";
import {
  PostCommentLike,
  PostDeleteCommentLike,
} from "../../../../servises/api/coursesDetail/PostCommentLike";
import toast from "react-hot-toast";
import { PostCommentDisLike } from "../../../../servises/api/coursesDetail/PostCommentDisLike";
const CourseComment = ({ teacherName, imageAddress }) => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => getCourseDetailComment(id),
  });
  const queryClient = useQueryClient();
  const likeMutation = useMutation({
    mutationFn: (commentId) => PostCommentLike(commentId),
    onError: (error) => {
      const msg = error?.response?.data?.message;
      toast.error(msg);
      console.error(error);
    },
    onSuccess: () => {
      toast.success("کامنت لایک شد");
      queryClient.invalidateQueries(["comment", id]);
    },
  });
  const deleteLikeMutation = useMutation({
    mutationFn: (commentId) => PostDeleteCommentLike(commentId),
    onError: (error) => {
      const msg = error?.response?.data?.message;
      toast.error(msg);
      console.error(error);
    },
    onSuccess: () => {
      toast.success("لایک کامنت حذف شد");
      queryClient.invalidateQueries(["comment", id]);
    },
  });
  const disLikeMutation = useMutation({
    mutationFn: (commentId) => PostCommentDisLike(commentId),
    onError: (error) => {
      console.error(error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", id]);
      toast.success("کامنت دیسلایک شد");
    },
  });

  return (
    <div className=" border-[#DFDFDF] flex justify-center items-center">
      <div className=" flex flex-col items-end gap-5">
        <div className="w-full h-[140px] flex items-center lg:gap-4 bg-[#F7F7FA] rounded-[10px]">
          <div className="flex flex-col items-end mr-[10px]">
            <h3 className="font-[400] text-[9px] sm:text-[12px] lg:text-[16px] text-[#1C1A4A]">
              نویسنده
            </h3>
            <h4 className="font-[500] text-[14px] sm:text-[18px] lg:text-[22px] text-[#1C1A4A]">
              {teacherName}
            </h4>
            <h2 className=" text-right font-[400] w-[70%] text-[6px] sm:text-[9px] lg:text-[14px]">
              مهندس حسین نوری کادیجانی دارای مدرک کارشناسی مهندسی کامپیوتر –
              نرم‌افزار از دانشگاه تربیت دبیر شهید رجایی هستند. ایشان شش سال
              سابقه برنامه‌نویسی اندروید دارند و تاکنون برنامه‌های موفق و
              باکیفیتی را در مارکت‌های مطرح ایرانی منتشر کرده‌اند و پیوسته به
              دنبال یادگیری و کسب دانش بیشتر در این زمینه هستند.
            </h2>
          </div>
          <img
            src={imageAddress || "/default.png"}
            className="lg:w-[20%] sm:w-[75%] w-[70%] mr-[25px]"
          />
        </div>
        <p className="font-[600] text-[14px] sm:text-[18px] lg:text-[22px] mr-5">
          نظر{" "}
        </p>
        {data?.map((item) => {
          console.log("idddddd", item.id);
          return (
            <UserComment
              key={item.id}
              insertDate={item.insertDate.slice(0, 10)}
              author={item.author}
              disslikeCount={item.disslikeCount}
              likeCount={item.likeCount}
              describe={item.describe}
              title={item.title}
              pictureAddress={item.pictureAddress}
              id={item.id}
              currentUserIsLike={item.currentUserIsLike}
              currentUserIsDissLike={item.currentUserIsDissLike}
              onLike={() => {
                item.currentUserIsLike
                  ? deleteLikeMutation.mutate(item.id)
                  : likeMutation.mutate(item.id);
              }}
              onDislike={() => {
                disLikeMutation.mutate(item.id);
              }}
            />
          );
        })}

        <div className=" w-full h-[270px] md:h-[390px] bg-[#F7F7FA] rounded-[10px] flex justify-center items-center">
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default CourseComment;
