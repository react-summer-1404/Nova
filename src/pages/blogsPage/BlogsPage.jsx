import React, { useState } from "react";
import { getBlogs } from "../../servises/api/news/getNews";
import { useQuery } from "@tanstack/react-query";
import { NavigationSection, Header, SideContent } from "./components/index";
import CustomPagination from "../../components/ui/pagination/CustomPagination";
import QueryState from "./components/QueryState";
import { BlogCard } from "./components/index";

const BlogsPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfthePage, setRowsOfthePage] = useState(10);
  const [sortingCol, setSortingCol] = useState("InsertDate");
  const [sortType, setSortType] = useState("InsertDate");
  const apiParams = {
    RowsOfPage: rowsOfthePage,
    PageNumber: pageNumber,
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["blogs", pageNumber, rowsOfthePage, sortingCol, sortType],
    queryFn: () => getBlogs(apiParams),
  });

  return (
    <div className="w-screen flex flex-col justify-center items-center gap-8 p-5">
      <NavigationSection />
      <div className="w-[97%] flex justify-center gap-5 ">
        {/* main content */}
        <div className=" flex flex-col justify-center items-center pb-16">
          <div className="w-full flex justify-between">
            <Header />
          </div>
          <div className="flex justify-evenly gap-y-5 flex-wrap p-1">
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
        <div className="hidden sm:flex w-0 sm:w-[24%]">
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
