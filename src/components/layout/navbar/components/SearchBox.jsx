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
import all from "../../../../assets/icons/SVG.svg";
import { FaRegNewspaper } from "react-icons/fa6";
import { RiBookOpenLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa6";
import useMiceState from "../../../../core/store/miceState";
import SearchDict from "../../../../features/voiceAssistance/SearchDict";
import { useTranslation } from "react-i18next";

const SearchBox = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [debounceQuery] = useDebounce(query, 500);
  const [selected, setSelected] = useState("all");
  const { activeMice, setActiveMice } = useMiceState();

  const apiParams = {
    Query: debounceQuery,
  };
  const getPlaceholder = () => {
    if (selected === "courses") return t("search.courses");
    if (selected === "blogs") return t("search.blogs");
    if (selected === "all") return t("search.all");
    else return t("landingSearchPlaceHolder");
  };
  const { data: Course } = useQuery({
    queryKey: ["searchCourse", debounceQuery],
    queryFn: () => getCourses(apiParams),
    enabled:
      debounceQuery.length > 0 &&
      (selected === "courses" || selected === "all"),
  });
  const { data: blogs } = useQuery({
    queryKey: ["searchBlogs", debounceQuery],
    queryFn: () => getBlogs(apiParams),
    enabled:
      debounceQuery.length > 0 && (selected === "blogs" || selected === "all"),
  });
  useEffect(() => {
    console.log("search", debounceQuery);
  }, [debounceQuery]);
  const options = [
    {
      key: "search.all",
      label: t("all"),
      icon: <img src={all} className="w-3 h-3" />,
    },
    {
      key: "search.courses",
      label: t("courses"),
      icon: <RiBookOpenLine className="text-dark-purple" />,
    },
    {
      key: "search.blogs",
      label: t("blogs"),
      icon: <FaRegNewspaper className="text-dark-purple" />,
    },
  ];

  return (
    <div className=" relative">
      <div className="flex-center border border-[#D3D2DF] rounded-full gap-1 p-1  xl:w-[400px] ">
        <div className="flex justify-between  w-full  ">
          {activeMice === "search" ? (
            <SearchDict setQuery={setQuery} />
          ) : (
            <div
              className={`bg-dark-purple rounded-full w-[45px] h-[45px] flex-center cursor-pointer ${
                activeMice === "search" ? "bg-green-500" : "bg-dark-purple"
              }`}
              onClick={() => setActiveMice("search")}
            >
              <FaMicrophone className="text-white" size={20} />
            </div>
          )}

          <input
            type="text"
            placeholder={getPlaceholder()}
            value={query}
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
          inputWrapper={
            "bg-white border-l border-gray-300 rounded-r-full rounded-l-none"
          }
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
            {(selected === "courses" || selected === "all") &&
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
                        src={item.imageAddress||"/default.png"}
                      />
                    </div>
                  </div>
                </Link>
              ))}

            {(selected === "blogs" || selected === "all") &&
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
                      <img
                        className="w-8 h-8 rounded-sm"
                        src={item.currentImageAddress||"/default.png"}
                      />
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
