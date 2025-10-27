import React from "react";
import BlogCard from "./blogcard/BlogCard";

const BlogsList = () => {
    const apiParams = {
        
    }
    return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center flex-wrap gap-3 py-16">
      <BlogCard />
    </div>
  );
};

export default BlogsList;
