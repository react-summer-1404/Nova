import React from "react";
import BlogCard from "./blogcard/BlogCard";
import useFilter from './../../../store/filterStore';

const BlogsList = () => {
    const {} = useFilter()
    return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center flex-wrap gap-3 py-16">
      <BlogCard />
    </div>
  );
};

export default BlogsList;
