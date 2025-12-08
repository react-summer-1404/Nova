import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCourses } from "../../../servises/api/courses/coursList";
import useCategoryId from "../../../core/store/GetCategoryId";
import useLevelStore from "../../../core/store/GetLevelId";
import CourseProductCard from "../../../components/ui/card/CourseProductCard";
import { Spinner } from "@heroui/spinner";
import CustomPagination from "../../../components/ui/pagination/CustomPagination";
import { useState } from "react";
import {motion} from "framer-motion"
import Plan from "../plan/Plan";
const Result = () => {
  const categoryId = useCategoryId((state) => state.categoryId);
  const levelId = useLevelStore((state) => state.levelId);
  const categoryIdsString = categoryId.join(",");
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfThePage] = useState(4);
  console.log("categoryId", categoryId);
  console.log("levelId", levelId);
  const apiParams = {
    TechCount: 1,
    PageNumber: pageNumber,
    RowsOfPage: rowsOfThePage,
    ListTech: categoryIdsString,
    courseLevelId: levelId,
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCoursesL", apiParams],
    queryFn: () => getCourses(apiParams),
  });

  const currentItems = data?.courseFilterDtos || [];
  console.log("data from API:", data);

  const text =
    `این دوره‌ها مخصوص سطح تو هستن.با استفاده از نقشه‌ٔ راه پایین می‌تونی مسیر یادگیریت رو دنبال کنی. `;

  const LETTER_DELAY = 0.025;

  return (
    <div className="w-screen flex-center flex-col bg-light-purple h-fit border">
      <div className="w-[90%] h-[90%]  flex flex-col mt-8 flex-center gap-4">
      <div className="w-[60%]">
        <div className="flex-center ">
          <div className="flex items-center gap-3 p-4 ">
            <div className="flex items-center justify-end ">
              <div className="bg-white p-4 my-6 rounded-lg flex-1 max-w-3xl ">
                <span className="ml-3 ">
                  {text.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: i * LETTER_DELAY,
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </div>
              <div className="w-3 overflow-hidden">
                <div className="h-4 bg-white rotate-45 transform origin-top-left rounded-sm"></div>
              </div>
            </div>
            <img
              src="/logo.svg"
              alt="Logo"
              className="filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:w-[50px] sm:w-[50px] w-[35px]"
            />
          </div>
        </div>

      </div>
        <div className=" w-4/5 flex-center"><Plan/></div>
        <div className="flex flex-wrap pt-5 justify-evenly gap-y-2 w-[90%]">
        {isLoading && (
          <div className="flex items-end min-h-[50vh]  min-w-[80vh] ">
            <Spinner
              size="lg"
              labelColor="primary"
              label="درحال بارگزاری محصولاتیم"
              variant="wave"
            />
          </div>
        )}

        {isError && (
          <h2 className="text-red-500 text-left text-2xl font-semibold flex items-end min-h-[50vh]  min-w-[100vh] ">
            مشکلی در دریافت اطلاعات پیش آمد. لطفاً دوباره تلاش کنید.
          </h2>
        )}
        {!isLoading && !isError && currentItems?.length === 0 && (
          <h2 className="text-[#6D6C80] text-left text-2xl font-semibold flex items-end min-h-[50vh]  min-w-[100vh]">
            محصول یافت نشد
          </h2>
        )}

        {!isLoading &&
          !isError &&
          currentItems?.map((product) => (
            <CourseProductCard key={product.courseId} product={product} />
          ))}
        </div>
          <CustomPagination RowsOfPage={rowsOfThePage} pageNumber={pageNumber} setPageNumber={setPageNumber} totalCount={data?.totalCount}/>
      </div>
    </div>
  );
};

export default Result;
