import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import GetReply from "./GetReply";
import Tag from "../../../../ui/Tag/Tag";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import ModalSection from "../../../../ui/Modal/ModalSection";
import useToggle from "../../../../../hooks/useToggle";
import PostReply from "./PostReply";
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { PostCommentLike } from '../../../../../servises/api/coursesDetail/PostCommentLike';
// import { PostCommentDisLike } from '../../../../../servises/api/coursesDetail/PostCommentDisLike';
// import toast from 'react-hot-toast';

const UserComment = ({
  insertDate,
  disslikeCount,
  currentUserIsLike,
  currentUserIsDissLike,
  likeCount,
  describe,
  title,
  newsId,
  id,
}) => {
  const [showReplies, setShowReplies] = useState(false);

  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);

//   const queryClient = useQueryClient();
//   const likeMutation = useMutation({
//       mutationFn :()=> PostCommentLike(CourseCommandId),
//       onError : (error) => {
//           console.error(error)
//       },
//       onSuccess : () => {
//           queryClient.invalidateQueries(["comment"]);
//           toast.success("کامنت دیسلایک شد")
//       },
//   })
//   const disLikeMutation = useMutation({
//       mutationFn :()=> PostCommentDisLike(CourseCommandId),
//       onError : (error) => {
//           console.error(error)
//       },
//       onSuccess : () => {
//           queryClient.invalidateQueries(["comment"]);
//           toast.success("کامنت دیسلایک شد")
//       },
//   })

  const toggleReplies = async () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <>
      <div className="w-full border-t-1 border-[#E8E8E8] h-[120px] lg:h-[140px] flex gap-4">
        <div className="flex w-full flex-col items-end mt-[10px] lg:mt-[8px] gap-1 lg:gap-2">
          <div className="w-full flex justify-between">
            <h1 className=" text-right font-[400] text-[9px] md:text-[12px] text-[#6D6C80]">
              {insertDate}{" "}
            </h1>
          </div>

          <h3 className="font-[600] text-[14px] md:text-[16px] text-[#1C1A4A]">
            {" "}
            {title}
          </h3>
          <h4 className=" text-right font-[400] text-[10px] md:text-[14px] text-[#6D6C80]">
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
                  // onClick={()=>{likeMutation.mutate(CourseCommandId)
                  //     console.log("like CourseCommandId:", CourseCommandId)}}
                  title={likeCount}
                />
              </div>
              <div className="w-[45%] md:w-[55%] h-full rounded-[15px] bg-soft-gray font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]">
                <Tag
                  icon={
                    currentUserIsDissLike ? (
                      <BiDislike size={"20px"} className="text-gray-500" />
                    ) : (
                      <BiDislike size={"20px"} />
                    )
                  }
                  // onClick={()=>disLikeMutation.mutate(CourseCommandId)}

                  title={disslikeCount}
                />
              </div>
            </div>
            <div className=" h-[25px] flex flex-row gap-0.5">
              <button
                className="md:px-3 text-dark-purple text-[10px] md:text-[12px] bg-light-purple h-[30px] px-2 rounded-[10px] flex items-center"
                onClick={toggleReplies}
              >
                {showReplies ? " بستن  پاسخ ها" : " مشاهده پاسخ ها"}
              </button>
              <ModalSection
                StyleModal={
                  "md:px-3 px-2 h-[30px] rounded-[10px] flex items-center bg-light-purple"
                }
                isOpen={isModalOpen}
                onClose={toggleModal}
                onOpen={toggleModal}
                size="3xl"
                content={
                  <div className="flex flex-col justify-between items-center h-[300px] bg-[#F7F7FA] px-8">
                    <PostReply newsId={newsId} parentId={id} />
                  </div>
                }
                ButtonText={
                  <span className="font-[500] text-[10px] md:text-[12px] text-dark-purple">
                    پاسخ
                  </span>
                }
              ></ModalSection>
            </div>
          </div>
        </div>
      </div>
      {showReplies && <GetReply parentCommentId={id} newsId={newsId} />}
    </>
  );
};

export default UserComment;
