import React, { useState, useEffect } from "react";
import { getBlogs } from "../../servises/api/news/getNews";
import { useQuery } from "@tanstack/react-query";
import { NavigationSection, Header, SideContent } from "./components/index";
import CustomPagination from "../../components/ui/pagination/CustomPagination";
import QueryState from "../../components/section/Blogs/QueryState";
import { BlogCard } from "./components/index";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { motion } from "framer-motion";
import { variantPages } from "../../configs/frameMorion/PagesVariants";

const BlogsPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const paramItems = Object.fromEntries(searchParam.entries());
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfThePage] = useState(12);
  const [searchInput, setSearchInput] = useState(paramItems.Query || "");
  const [searchDelay] = useDebounce(searchInput, 500);

  const apiParams = {
    ...paramItems,
    RowsOfPage: rowsOfThePage,
    PageNumber: pageNumber,
  };

  useEffect(() => {
    handleChange("Query", searchDelay);
  }, [searchDelay]);
 

 
  const handleChange = (key, value) => {
    setSearchParam(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        if (value && value.length !== 0) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
        return newParams;
      },
      { replace: true }
    );
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["blogs", apiParams],
    queryFn: () => getBlogs(apiParams),
  });
  const currentItems = data?.news;
  // console.log("currentItems", currentItems);
  return (
    <div
      className="w-screen flex flex-col justify-center items-center gap-8 p-5">
      <NavigationSection title={"وبلاگ ها"} />
      <motion.div className="w-[97%] flex justify-center gap-5 "
       variants={variantPages}
       initial="hidden"
       animate="visible">
        {/* main content */}
        <div className=" flex flex-col justify-center items-center pb-16">
          <div className="w-full flex justify-between">
            <Header
              totalCount={data?.totalCount}
              currentItems={currentItems}
              paramItems={paramItems}
              handleChange={handleChange}
            />
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
            RowsOfPage={rowsOfThePage}
            totalCount={data?.totalCount}
          />
        </div>

        {/* side content */}
        <div className="hidden sm:flex w-0 sm:w-[24%]">
          <SideContent
            handleChange={handleChange}
            paramItems={paramItems}
            Query={searchInput}
            setQuery={setSearchInput}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BlogsPage;
