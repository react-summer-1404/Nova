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
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedTeachers, setSelectedTeachers] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const apiParams = {
    pageNumber: currentPage,
    RowsOfPage: itemsPerPage,
    ListTech: selectedTechs.join(","),
    CourseLevelId: selectedLevels.join(","),
    TeacherId: selectedTeachers.join(","),
    Query: searchQuery
  };

  const { data } = useQuery({
    queryKey: [
      "courses",
      currentPage,
      selectedTechs,
      selectedLevels,
      selectedTeachers,
      searchQuery
    ],
    queryFn: () => getCourses(apiParams),
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
            
<SearchSection
  searched={searchQuery}
  setSearched={setSearchQuery}
/>
          </div>
        </div>

        <div className="flex w-4/5 justify-between">
          <div className="flex flex-wrap justify-baseline gap-[20px]">
            {currentItems?.map((product) => (
              <CourseProductCard key={product.courseId} product={product} />
            ))}
          </div>

          <FiltersPanel
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
            selectedLevels={selectedLevels}
            setSelectedLevels={setSelectedLevels}
            selectedTeachers={selectedTeachers}
            setSelectedTeachers={setSelectedTeachers}
          />

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
