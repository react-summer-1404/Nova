import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCourses } from "../../../servises/api/courses/coursList";
import useCategoryId from "../../../core/store/GetCategoryId";
import useLevelStore from "../../../core/store/GetLevelId";
import CourseProductCard from "../../../components/ui/card/CourseProductCard";
import { Spinner } from "@heroui/spinner";

const Result = () => {
  const categoryId = useCategoryId((state) => state.categoryId);
  const levelId = useLevelStore((state) => state.levelId);
  const categoryIdsString = categoryId.join(",");

  console.log("categoryId",categoryId)
  console.log("levelId",levelId)
  const apiParams = {
    TechCount: 1,
    PageNumber: 1,
    RowsOfPage: 12,
    ListTech: categoryIdsString,
    courseLevelId: levelId,
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCoursesL", apiParams],
    queryFn: () => getCourses(apiParams),
  });
  
  const currentItems = data?.courseFilterDtos || [];
  console.log("data from API:", data);

  return (
    <div className="w-screen flex-center bg-light-purple  border">
      <div className="w-[90%]  flex flex-wrap border">
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
      
    </div>
  );
};

export default Result;
