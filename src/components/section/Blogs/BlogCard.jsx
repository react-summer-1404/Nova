import React from "react";
import { BlogcardMainContent, BlogCardFooter } from "./index";

const BlogCard = ({ blogData }) => {
  return (
    <div
      style={{
        border: "1px solid var(--color-border-gray)",
      }}
      className="w-[300px] h-[469px] p-5 text-right rounded-[10px] mt-5 bg-white"
    >
      <div className=" flex-center flex-col gap-2">
        <BlogcardMainContent
          title={blogData.title}
          miniDescribe={blogData.miniDescribe}
          img={blogData.addUserProfileImage}
          label={blogData.newsCatregoryName}
          date={blogData.updateDate}
          id={blogData.id}
        />
        <div
          style={{ background: "var(--color-text2-fot)" }}
          className=" sm:w-full h-0.5"
        ></div>
        <BlogCardFooter
          currentLikeCount={blogData.currentLikeCount}
          currentDissLikeCount={blogData.currentDissLikeCount}
          currentView={blogData.currentView}
          id={blogData.id}
          isLiked={blogData.currentUserIsLike}
          isDisLiked={blogData.currentUserIsDissLike}
        />
      </div>
    </div>
  );
};

export default BlogCard;
