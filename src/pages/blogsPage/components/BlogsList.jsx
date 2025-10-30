import React from "react";
import { BlogCard, QueryState } from "./index";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../servises/api/news/getNews";

const BlogsList = ({ pageNumber, rowsOfthePage, sortingCol, sortType }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["blogs", pageNumber, rowsOfthePage, sortingCol, sortType],
    queryFn: getBlogs,
  });
  return (
    <div className="w-full flex flex-col md:flex-row justify-end items-center flex-wrap gap-3 px-3 py-16">
      <QueryState
        isError={isError}
        isLoading={isLoading}
        errorText={"خطای سرور"}
        loadingText={"در حال بارگیری اخبار"}
      />
      {
        data?.news?.map(blog => {
         return <BlogCard key={blog.id} blogData={blog} />
        })
      }
    </div>
  );
};

export default BlogsList;
