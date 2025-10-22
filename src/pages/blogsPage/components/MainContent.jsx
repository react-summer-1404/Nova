import React from "react";
import { BlogCard } from "./index";

const MainContent = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center flex-wrap gap-3 py-16">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default MainContent;
