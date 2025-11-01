import React, { useState } from "react";
import { getBlogs } from "../../servises/api/news/getNews";
import { useQuery } from "@tanstack/react-query";
import {
  NavigationSection,
  Header,
  SideContent,
} from "./components/index";
import CustomPagination from "../../components/ui/pagination/CustomPagination";
import QueryState from './components/QueryState';
import {BlogCard} from "./components/index";

const BlogsPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfthePage] = useState(10);
  const [sortingCol] = useState("InsertDate");
  const [sortType ] = useState("InsertDate");
  const apiParams = {
    RowsOfPage: rowsOfthePage,
    PageNumber: pageNumber,
    // SortingCol: sortingCol,
    // SortType: sortType,
  };
  
  const { data, isError, isLoading } = useQuery({
    queryKey: ["blogs", pageNumber, rowsOfthePage, sortingCol, sortType],
    queryFn: () => getBlogs(apiParams),
  });

  return (
    <div className="flex flex-col gap-28 items-center">
      <NavigationSection />
      <div className="w-[80%] flex justify-between gap-6">
        {/* main content */}
        <div className="w-[75%] flex flex-col items-center pb-16">
          <Header />
          <div className="w-full flex flex-col md:flex-row justify-end items-center flex-wrap gap-3 px-3 py-16">
            <QueryState
              isError={isError}
              isLoading={isLoading}
              errorText={"خطای سرور"}
              loadingText={"در حال بارگیری اخبار"}
            />
            {data?.news?.map((blog) => {
              return <BlogCard key={blog.id} blogData={blog} />;
            })}
          </div>
          <CustomPagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            RowsOfPage={rowsOfthePage}
            totalCount={data?.totalCount}
          />
        </div>

        {/* side content */}
        <div className="w-[24%]">
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
