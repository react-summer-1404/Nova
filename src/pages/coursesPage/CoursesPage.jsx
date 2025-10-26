import React, { useState } from "react";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import Result from "./components/Result";
import SearchSection from "../../components/ui/searchSection/SearchSection";
import SortingSection from "./components/SortingSection";
import ViewMode from "../../components/ui/viewMode/ViewMode";
import CourseProductCard from "../../components/ui/card/CourseProductCard";
import PaginationComponent from "../../components/ui/pagination/PaginationComponent";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../servises/api/courses/coursList";
import FiltersPanel from "./components/FiltersPanel";
import useToggle from "../../hooks/useToggle";
import useFilter from "../../store/filterStore";
import { Spinner } from "@heroui/react";

const CoursesPage = () => {
  const {
    selectedTechs,
    selectedLevels,
    selectedTeachers,
    value,
    searchQuery,
    sortType,
    sortingCol,
    currentPage,
    setSearchQuery,
  } = useFilter();

  const itemsPerPage = 12;

  const [isCol, setIsCol] = useToggle(false);

  const apiParams = {
    PageNumber: currentPage,
    RowsOfPage: itemsPerPage,
    ListTech: selectedTechs.length ? selectedTechs.join(",") : undefined,
    courseLevelId: selectedLevels.length ? selectedLevels.join(",") : undefined,
    TeacherId: selectedTeachers.length ? selectedTeachers.join(",") : undefined,
    sortingCol: sortingCol,
    Query: searchQuery,
    SortType: sortType,
    TechCount: 1,
    CostDown: value[0],
    CostUp: value[1],
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: [
      "courses",
      currentPage,
      selectedTechs,
      selectedLevels,
      selectedTeachers,
      searchQuery,
      sortType,
      value,
      sortingCol,
    ],
    queryFn: () => getCourses(apiParams),
  });

  const currentItems = data?.courseFilterDtos;
  const BreadcrumbsItems = [{ to: "/courses", label: "دوره های اموزشی" }];

  return (
    <div className="flex flex-col gap-8  w-screen  justify-center ">
      <NavigationSection
        title={"همه دوره ها"}
        BreadcrumbsItems={BreadcrumbsItems}
      />

      <div className="md:w-[97%] flex justify-between gap-[20px] flex-col-reverse md:flex-row md:items-stretch  items-center ">
        <div className="flex flex-col gap-5 items-end  w-full">
          <div className="flex gap-4 justify-between items-center w-[70%] md:w-[97%]">
            <div className="flex gap-2">
              <ViewMode isCol={isCol} setIsCol={setIsCol} />
              <SortingSection />
            </div>
            <Result currentItems={currentItems} />
          </div>

          <div
            className={`flex flex-wrap gap-y-5 gap-2 items-center  ${
              isCol ? "flex-col w-full items-end" : " justify-evenly "
            }`}
          >
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
                <CourseProductCard
                  key={product.courseId}
                  product={product}
                  isCol={isCol}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <SearchSection searched={searchQuery} setSearched={setSearchQuery} />

          <div className="hidden md:block">
            <FiltersPanel />
          </div>
        </div>
      </div>
      <PaginationComponent
        totalItems={data?.totalCount}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default CoursesPage;
