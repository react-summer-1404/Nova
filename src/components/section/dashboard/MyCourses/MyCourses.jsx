import React, { useEffect, useState } from "react";
// import DashboardSearchBox from "./dashboardSearchBox";
import SearchSection from "../../../ui/pagesSearchSection/SearchSection";
import CourseTableRow from "../MyComments/CourseTableRow/CourseTableRow";
import { useQuery } from "@tanstack/react-query";
import { getMyCourses } from "../../../../servises/api/userPanel/getMyCourses";
import { useDebounce } from "use-debounce";
import CustomPagination from "../../../ui/pagination/CustomPagination";
import DashboardAutoComplete from "../../../ui/DashboardAutoComplete/DashboardAutoComplete";
import CourseStatusList1 from "./MyCoursesLisst1";
const SortingColItems = [
  { key: "desc", label: "نزولی" },
  { key: "asc", label: " صعودی" },
];
const SortTypeItems = [
  { key: "active", label: "فعال" },
  { key: "lastUpdate", label: "اخرین اپدیت" },
];
const MyCourses = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfthePage, setRowsOfthePage] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [searchDelay] = useDebounce(searchInput, 500);

  const [sortColCourse, setSortColCourse] = useState(null);
  const [sortTypeCourse, setSortTypeCourse] = useState(null);

  const apiParams = {
    PageNumber: pageNumber,
    RowsOfPage: rowsOfthePage,
    SortingCol: sortColCourse,
    SortType: sortTypeCourse,
    Query: searchDelay,
  };

  const { data } = useQuery({
    queryKey: ["myCourses", apiParams],
    queryFn: () => getMyCourses(apiParams),
  });
  console.log("course", data);

  useEffect(() => {
    setSearchInput(searchDelay);
  }, [searchDelay]);

  return (
    <div className="w-full flex-col-center gap-8  ">
      <div className="w-full  flex flex-col-reverse items-center md:flex-row justify-between gap-4">
        <div className="flex gap-3">
          <DashboardAutoComplete
            options={SortingColItems}
            selected={sortColCourse ||null}
            setSelected={setSortColCourse ||null}
          />
          <DashboardAutoComplete
            options={SortTypeItems }
            selected={sortTypeCourse||null}
            setSelected={setSortTypeCourse ||null}
          />
        </div>
        <div>
          <SearchSection Query={searchInput} setQuery={setSearchInput} />
        </div>
      </div>
      <div className="w-[65%] ">
        <CourseTableRow
          items={["قیمت","مدرس دوره",
             "تاریخ شروع","نام دوره",]}
        />
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent"></div>
      <div className="w-full mt-[12px] gap-1.5 lg:gap-3 flex flex-col">
        {data?.listOfMyCourses?.map((item) => (
          <CourseStatusList1
            key={item.id}
            courseTitle={item.course.title}
            teacheName={item.course.teacher.fName}
            lastUpdate={item.course.startTime.slice(0,10)}
            courseId={item.course.courseId}
            cost={item.cost}
          />
        ))}
        
      </div>
      <CustomPagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        RowsOfPage={rowsOfthePage}
        totalCount={data?.totalCount}
      />
    </div>
  );
};

export default MyCourses;
