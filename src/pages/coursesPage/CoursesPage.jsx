import React, { useEffect, useMemo, useState } from "react";
import "../../assets/styles/global.css";
import Result from "../../components/ui/result/Result";
import SearchSection from "../../components/ui/pagesSearchSection/SearchSection";
import SortingSection from "../../components/ui/sortDropDown/SortDropdown";
import ViewMode from "../../components/ui/viewMode/ViewMode";
import CourseProductCard from "../../components/ui/card/CourseProductCard";
import CustomPagination from "../../components/ui/pagination/CustomPagination";
import useToggle from "../../hooks/useToggle";
import FiltersPanel from "./components/FiltersPanel";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../servises/api/courses/coursList";
import { Spinner } from "@heroui/react";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";

const CoursesPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParam.entries());

  const [searchQuery, setSearchQuery] = useState(paramsObject.Query || "");
  const [debounceSearch] = useDebounce(searchQuery, 500);

  useEffect(() => {
    handleChange("Query", debounceSearch);
  }, [debounceSearch]);

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

  const [isCol, setIsCol] = useToggle(false);

  const apiParams = {
    ...paramsObject,
    TechCount: 1,
    PageNumber: 1,
    RowsOfPage: 12,
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["courses", paramsObject],
    queryFn: () => getCourses(apiParams),
    refetchOnWindowFocus: false,
  });

  const currentItems = useMemo(() => {
    return data?.courseFilterDtos || [];
  }, [data]);

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
              {/* <SortingSection
                onChangeParams={handleChange}
                SortingCol={paramsObject.SortingCol}
                SortType={paramsObject.SortType}
              /> */}
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
          <SearchSection Query={searchQuery} setQuery={setSearchQuery} />

          <div className="hidden md:block">
            <FiltersPanel
              paramsObject={paramsObject}
              onChangeParams={handleChange}
            />
          </div>
        </div>
      </div>
      <CustomPagination />
    </div>
  );
};

export default CoursesPage;
