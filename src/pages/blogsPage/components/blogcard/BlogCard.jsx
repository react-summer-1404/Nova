import React from "react";
import { BlogcardMainContent, BlogCardFooter } from "./blogcardItems/index";
import blogimg from "../../../../assets/images/blog_post03.jpg.png"

const BlogCard = () => {
  return (
    <div className="w-[80%] md:w-[32%] flex-center px-0 py-5 sm:px-6 sm:py-5 border border-amber-700 rounded-[10px] text-right">
      <div className="flex-center flex-col gap-2">
        <BlogcardMainContent
          title={"توسعه خود را بسازید و به عنوان م "}
          description={
            "این خبر برای این است که توسعه خود را بسازید و عنوان محتوای خود میتوانیذ قرار دهید این خبر برای....  "
          }
          img={blogimg}
        />
        <div
          style={{ background: "var(--color-text2-fot)" }}
          className="w-[60%] sm:w-full h-0.5"
        ></div>
        <BlogCardFooter />
      </div>
    </div>
  );
};

export default BlogCard;
