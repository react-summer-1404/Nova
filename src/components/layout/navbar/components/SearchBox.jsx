import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { useDebounce } from "use-debounce";
import { getCourses } from "../../../../servises/api/courses/coursList";
import { getBlogs } from "../../../../servises/api/news/getNews";
import { GoChevronLeft } from "react-icons/go";
const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery] = useDebounce(query, 500);

  const apiParams = {
    Query: debounceQuery,
  };
  const { data: Course } = useQuery({
    queryKey: ["searchCourse", debounceQuery],
    queryFn: () => getCourses(apiParams),
    enabled: debounceQuery.length > 0,
  });
  const { data: blogs } = useQuery({
    queryKey: ["searchBlogs", debounceQuery],
    queryFn: () => getBlogs(apiParams),
    enabled: debounceQuery.length > 0,
  });
  useEffect(() => {
    console.log("search", debounceQuery);
  }, [debounceQuery]);

  return (
    <div className=" relative">
      <div className="flex-center border border-[#D3D2DF] rounded-full gap-1 p-1 xl:w-[400px] ">
        <div className="flex justify-between  w-full  ">
          <div className=" bg-dark-purple rounded-full  lg:w-[44px] lg:h-[44px]  flex-center cursor-pointer p-1">
            <BsSearch className="  w-6 h-6 text-white -scale-x-100 " />
          </div>

          <input
            type="text"
            placeholder="...جستجوی برای دوره"
            className=" focus:outline-none lg:text-base text-right w-[90%]  text-sm  px-4 "
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        {/* <div className=" flex gap-2 border-l border-[#BDBABB]  items-center ">
        <GoChevronDown size={12}  />
        <span  className="whitespace-nowrap md:text-base text-black font-medium text-sm">
          دسته بندی ها
        </span>
        <img src="/src/assets/icons/SVG.svg" className="w-[10px] "/>
      </div> */}
      </div>
      <div
        className="
         w-[85%]  h-[300px] absolute right-4 top-13 z-50 overflow-y-scroll flex flex-col gap-2 items-end bg-white p-2 px-10"
      >
        {Course?.courseFilterDtos?.map((item) => (
          <div
            key={item.courseId}
            className="flex gap-2  border-b border-gray-200 p-4 w-[100%] justify-between  items-center"
          >
            <GoChevronLeft className="text-dark-purple" size={18}/>
            <div className="flex gap-2 items-center">
              <h2>{item.title}</h2>
              <img className="w-8 h-8 rounded-sm" src={item.imageAddress} />
            </div>
          </div>
        ))}
        {blogs?.news?.map((item) => (
          <div
            key={item.id}
            className="flex gap-2 items-center border-b border-gray-200 p-4 w-[90%] justify-end"
          >
            <h2>{item.title}</h2>
            <img className="w-7 h-7" src={item.currentImageAddress} />
          </div>
        ))}
        <h2></h2>
      </div>
    </div>
  );
};

export default SearchBox;
