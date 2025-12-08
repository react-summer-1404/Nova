import React, { useState } from "react";
import GetReply from "./GetReply";
import Tag from "../../../../ui/Tag/Tag";
import { AiFillLike, AiOutlineLike,AiFillDislike,AiOutlineDislike  } from "react-icons/ai";
import ModalSection from "../../../../ui/Modal/ModalSection";
import useToggle from "../../../../../hooks/useToggle";
import PostReply from "./PostReply";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  PostCommentLike,
  deleteCommentLike,
} from "../../../../../servises/api/coursesDetail/PostCommentLike";
import { PostCommentDisLike } from "../../../../../servises/api/coursesDetail/PostCommentDisLike";
import toast from "react-hot-toast";

const UserComment = ({
  insertDate,
  author,
  disslikeCount,
  currentUserIsLike,
  currentUserIsDissLike,
  likeCount,
  pictureAddress,
  describe,
  title,
  id,
  userLikedId,
  CourseId,
}) => {
  const [showReplies, setShowReplies] = useState(false);

  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);

  const queryClient = useQueryClient();
  const likeMutation = useMutation({
    mutationFn: (id) => PostCommentLike(id),
    onError: (error) => {
      console.error(error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", CourseId]);
      toast.success("کامنت لایک شد");
    },
  });
  const disLikeMutation = useMutation({
    mutationFn: (id) => PostCommentDisLike(id),
    onError: (error) => {
      console.error(error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", CourseId]);

      toast.success("کامنت دیسلایک شد");
    },
  });
  const deleteLikeMutation = useMutation({
    mutationFn: (id) => deleteCommentLike(id),
    onError: (error) => {
      console.error("Delete like error:", error.response || error);
      const msg = error?.response?.data?.message;
      toast.error(msg || "خطا در حذف لایک");
    },
    
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", CourseId]);
      toast.success("لایک کامنت حذف شد");
    },
  });

  const toggleReplies = async () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <>
      <div className="w-full border-t-1 border-[#E8E8E8] h-[120px] lg:h-[140px] flex gap-4">
        <div className="flex w-full flex-col items-end mt-[10px] lg:mt-[8px] gap-1 lg:gap-2">
          <div className="w-full flex justify-between">
            <h1 className=" text-right font-[400] text-[7px] sm:text-[9px] lg:text-[12px] text-[#6D6C80] ml-5">
              {insertDate}{" "}
            </h1>
            <h2 className="font-[600] text-[12px] text-[#1C1A4A]">{author}</h2>
          </div>

          <h3 className="font-[600] text-[11px] sm:text-[14px] lg:text-[16px] text-[#1C1A4A]">
            {" "}
            {title}
          </h3>
          <h4 className=" text-right font-[400] text-[8px] sm:text-[10px] lg:text-[14px] text-[#6D6C80]">
            {describe}
          </h4>
          <div className="flex w-full justify-between">
            <div className="w-[85px] h-[25px] flex flex-row gap-0.5">
              <div className="w-[45%] md:w-[55%] h-full rounded-[15px] bg-soft-gray font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]">
                <Tag
                  icon={
                    currentUserIsLike ? (
                      <AiFillLike size={"20px"} className="text-gray-500" />
                    ) : (
                      <AiOutlineLike size={"20px"} />
                    )
                  }
                  onClick={() => {
                    console.log("currentUserIsLike:", currentUserIsLike, "id:", id);
                    if (currentUserIsLike) {
                      deleteLikeMutation.mutate(id);
                      console.log("Delete like called");
                    } else {
                      likeMutation.mutate(id);
                      console.log("Like called");
                    }
                  }}
                  
                  title={likeCount}
                />
              </div>
              <div className="w-[45%] md:w-[55%] h-full rounded-[15px] bg-soft-gray font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]">
                <Tag
                  icon={
                    currentUserIsDissLike ? (
                      <AiFillDislike size={"20px"} className="text-gray-500" />
                    ) : (
                      <AiOutlineDislike  size={"20px"} />
                    )
                  }
                  onClick={() => {
                    disLikeMutation.mutate(id);
                  }}
                  title={disslikeCount}
                />
              </div>
            </div>
            <div className=" h-[25px] flex flex-row gap-0.5">
              <button
                className="lg:px-3 text-dark-purple h-[34px] text-[8px] sm:text-[10px] lg:text-[12px] bg-light-purple sm:h-[30px] sm:px-2 px-1.5 rounded-[10px] flex items-center"
                onClick={toggleReplies}
              >
                {showReplies ? " بستن  پاسخ ها" : " مشاهده پاسخ ها"}
              </button>
              <ModalSection
                StyleModal={
                  "lg:px-3 sm:px-2 h-[30px] rounded-[10px] flex items-center bg-light-purple"
                }
                isOpen={isModalOpen}
                onClose={toggleModal}
                onOpen={toggleModal}
                size="3xl"
                content={
                  <div className="flex flex-col justify-between items-center h-[300px] bg-[#F7F7FA] px-8">
                    <PostReply
                      CourseCommandId={id}
                      CourseId={CourseId}
                      onSuccess={toggleModal}
                    />
                  </div>
                }
                ButtonText={
                  <span className="font-[500] text-[8px] sm:text-[10px] lg:text-[12px] text-dark-purple">
                    پاسخ
                  </span>
                }
              ></ModalSection>
            </div>
          </div>
        </div>
        <img
          src={pictureAddress || "/default.png"}
          className="lg:w-[12%] lg:h-[55%] w-[17%] h-[40%] rounded-full mt-[20px]"
        />
      </div>
      {showReplies && <GetReply parentCommentId={id} />}
    </>
  );
};

export default UserComment;
