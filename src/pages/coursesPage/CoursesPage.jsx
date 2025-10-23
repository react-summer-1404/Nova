import React, { useState } from "react";
import NavigationSection from "./components/NavigationSection";
import Result from "./components/Result";
import SearchSection from "./components/SearchSection";
import SortingSection from "./components/SortingSection";
import ViewMode from "./components/ViewMode";
import CourseProductCard from "../../components/ui/card/CourseProductCard";
import PaginationComponent from "./components/PaginationComponent";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../servises/api/courses";
import FiltersPanel from "./components/FiltersPanel";

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
 
  const apiParams={
    pageNumber:currentPage,
    RowsOfPage:itemsPerPage
  }
  const { data } = useQuery({
    queryKey: ["product",currentPage],
    queryFn:()=> getCourses(apiParams),
  });
  
  const currentItems = data?.courseFilterDtos;

  return (
    <div className="flex flex-col gap-8">
      <NavigationSection />

      <div className="w-screen flex flex-col items-center gap-8">
        <div className="flex sm:flex-row justify-between pl-5 w-4/5 flex-col-reverse items-center gap-4">
          <div className="flex gap-6 items-center">
            <ViewMode />
            <SortingSection />
          </div>

          <div className="flex-center gap-8">
            <Result />
            <SearchSection />
          </div>
        </div>

        <div className="flex w-4/5 justify-between">
          <div className="flex flex-wrap justify-evenly gap-y-[20px]">
            {currentItems?.map((product, index) => (
              <CourseProductCard key={index} product={product} />
            ))}
          </div>

         <FiltersPanel/>
        </div>

        <PaginationComponent
          totalItems={data?.totalCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CoursesPage;
