import React from "react";
import SocialButton from "./SocialButton";
import BlogcardView from "./BlogcardView";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const BlogCardFooter = ({
  currentLikeCount,
  currentDissLikeCount,
  currentView,
}) => {
  return (
    <div className="w-[64%] sm:w-full flex justify-between items-center text-[10px] sm:text-[16px] py-2">
      <div className=" flex justify-between items-center gap-1">
        <SocialButton icon={<AiOutlineLike />} number={currentLikeCount} />
        <SocialButton
          icon={<AiOutlineDislike />}
          number={currentDissLikeCount}
        />
      </div>
      <div style={{ color: "var(--color-dark-gray)" }}>
        <BlogcardView viewNumber={currentView} />
      </div>
    </div>
  );
};

export default BlogCardFooter;
