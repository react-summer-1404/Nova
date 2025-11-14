import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useDebounce } from "use-debounce";
import { getCourses } from "../../../../servises/api/courses/coursList";
import { getBlogs } from "../../../../servises/api/news/getNews";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardAutoComplete from "../../../ui/DashboardAutoComplete/DashboardAutoComplete";
import all from "../../../../assets/icons/SVG.svg"
import { FaRegNewspaper } from "react-icons/fa6";
import { RiBookOpenLine } from "react-icons/ri";



const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery] = useDebounce(query, 500);
  const [selected, setSelected] = useState("");
  const apiParams = {
    Query: debounceQuery,
  };
  const getPlaceholder = () => {
    if (selected === "courses") return "...جستجو برای دوره‌ها";
    if (selected === "blogs") return "...جستجو برای وبلاگ‌ها ";
    if (selected === "all") return "...جستجو در همه دسته‌ها";
    else return "...جستجو";
  };
  const { data: Course } = useQuery({
    queryKey: ["searchCourse", debounceQuery],
    queryFn: () => getCourses(apiParams),
    enabled: debounceQuery.length > 0 && (selected==="courses" ||selected==="all"),
  });
  const { data: blogs } = useQuery({
    queryKey: ["searchBlogs", debounceQuery],
    queryFn: () => getBlogs(apiParams),
    enabled: debounceQuery.length > 0 && (selected==="blogs" ||selected==="all"),
  });
  useEffect(() => {
    console.log("search", debounceQuery);
  }, [debounceQuery]);
  const options = [
    { key: "all", label: "همه" ,icon:<img src={all} className="w-3 h-3" />},
    { key: "courses", label: "دوره ها",icon:<RiBookOpenLine className="text-dark-purple"/> },
    { key: "blogs", label: "وبلاگ ها",icon:<FaRegNewspaper className="text-dark-purple"/>},
  ];
  
  return (
    <div className=" relative">
      <div className="flex-center border border-[#D3D2DF] rounded-full gap-1 p-1  xl:w-[400px] ">
        <div className="flex justify-between  w-full  ">
          <div className=" bg-dark-purple rounded-full  lg:w-[45px] lg:h-[45px]  flex-center cursor-pointer p-1">
            <BsSearch className="  w-6 h-6 text-white -scale-x-100 " />
          </div>

          <input
            type="text"
            placeholder={getPlaceholder()}
            className=" focus:outline-none lg:text-base text-right w-[90%]  text-sm  px-4 "
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        
        <DashboardAutoComplete
          options={options}
          selected={selected}
          setSelected={setSelected}
          variant={"none"}
          inputWrapper={"bg-white border-l border-gray-300 rounded-r-full rounded-l-none"}
        />
      </div>

      <AnimatePresence>
        {debounceQuery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.5, 1, 0.5, 1],
            }}
            className="
        w-[85%] h-[300px] absolute right-4 top-15 z-50
        overflow-y-scroll flex flex-col gap-2 items-end
        rounded-xl bg-white p-2 px-10
        shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
      "
          >
            {(selected === "courses" ||   selected === "all") &&
            Course?.courseFilterDtos?.map((item) => (
              <Link to={`/courseDetail/${item.courseId}`} className="w-full">
                <div
                  key={item.courseId}
                  className="  flex gap-2 justify-between items-center w-full p-4
          border-b border-light-purple rounded-lg
          transition-all duration-200 ease-out
          hover:bg-light-purple  hover:shadow-sm
          cursor-pointer"
                >
                  <GoChevronLeft className="text-dark-purple" size={18} />
                  <div className="flex gap-2 items-center">
                    <h2>{item.title}</h2>
                    <img
                      className="w-8 h-8 rounded-sm"
                      src={item.imageAddress}
                    />
                  </div>
                </div>
              </Link>
            ))}

            {(selected === "blogs" ||   selected === "all" )&&
            blogs?.news?.map((item) => (
              <Link to={`/blogDetail/${item.id}`} className="w-full">
                <div
                  key={item.id}
                  className="  flex gap-2 justify-between items-center w-full p-4
          border-b border-light-purple rounded-lg
          transition-all duration-200 ease-out
          hover:bg-light-purple  hover:shadow-sm
          cursor-pointer"
                >
                  <GoChevronLeft className="text-dark-purple" size={18} />

                  <div className="flex gap-2 items-center">
                    <h2>{item.title}</h2>
                    <img className="w-8 h-8 rounded-sm" src={item.currentImageAddress} />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBox;
