import React, { useState, useEffect } from "react";
import { getBlogs } from "../../servises/api/news/getNews";
import { useQuery } from "@tanstack/react-query";
import { NavigationSection, Header, SideContent } from "./components/index";
import CustomPagination from "../../components/ui/pagination/CustomPagination";
import QueryState from "./components/QueryState";
import { BlogCard } from "./components/index";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

const BlogsPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const paramItems = Object.fromEntries(searchParam.entries());
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfthePage, setRowsOfthePage] = useState(10);
  const [sortingCol, setSortingCol] = useState("InsertDate");
  const [sortType, setSortType] = useState("InsertDate");
  const [searchInput, setSearchInput] = useState(paramItems.Query || "");
  const [searchDelay] = useDebounce(searchInput, 500);

  const apiParams = {
    ...paramItems,
    RowsOfPage: rowsOfthePage,
    PageNumber: pageNumber,
  };

  useEffect(() => {
    handleChange("Query", searchDelay);
  }, [searchDelay]);

  const handleChange = (key, value) => {
    setSearchParam(
      (searchParam) => {
        if (value) {
          searchParam.set(key, value);
        } else {
          searchParam.delete(key);
        }
        return searchParam;
      },
      { replace: true }
    );
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["blogs", paramItems],
    queryFn: () => getBlogs(apiParams),
  });

  return (
    <div className="w-screen flex flex-col justify-center items-center gap-8 p-5">
      <NavigationSection />
      <div className="w-[97%] flex justify-center gap-5 ">
        {/* main content */}
        <div className=" flex flex-col justify-center items-center pb-16">
          <div className="w-full flex justify-between">
            <Header paramItems={paramItems} handleChange={handleChange}/>
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
          <SideContent handleChange={handleChange} paramItems={paramItems} Query={searchInput} setQuery={setSearchInput} />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
