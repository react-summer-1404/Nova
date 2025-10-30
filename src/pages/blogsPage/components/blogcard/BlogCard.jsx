import React from "react";
import { BlogcardMainContent, BlogCardFooter } from "./blogcardItems/index";

const BlogCard = ({ blogData }) => {
  return (
    <div className="flex-center px-0 py-5 sm:px-6 sm:py-5 border border-amber-700 rounded-[10px] text-right">
      <div className=" flex-center flex-col gap-2">
        <BlogcardMainContent
          title={blogData.keyword}
          miniDescribe={blogData.miniDescribe}
          img={blogData.addUserProfileImage}
          label={blogData.title}
          date={blogData.updateDate}

        />
        <div
          style={{ background: "var(--color-text2-fot)" }}
          className=" sm:w-full h-0.5"
        ></div>
        <BlogCardFooter
          currentLikeCount={blogData.currentLikeCount}
          currentDissLikeCount={blogData.currentDissLikeCount}
          currentView={blogData.currentView}
        />
      </div>
    </div>
  );
};

export default BlogCard;
