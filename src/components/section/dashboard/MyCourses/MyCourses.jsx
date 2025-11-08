import React, { useEffect, useState } from "react";
import DashboardAutoComplete from "./DashboardAutoComplete";
// import DashboardSearchBox from "./dashboardSearchBox";
import SearchSection from "../../../ui/pagesSearchSection/SearchSection";
import CourseTableRow from "../MyComments/CourseTableRow/CourseTableRow";
import CourseStatusList1 from "../Favorites/FavoritesCourse/CourseStatusList1/CourseStatusList1";
import { useQuery } from "@tanstack/react-query";
import { getMyCourses } from "../../../../servises/api/userPanel/getMyCourses";
import { useDebounce } from "use-debounce";
import CustomPagination from "../../../ui/pagination/CustomPagination";

const MyCourses = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfthePage, setRowsOfthePage] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [searchDelay] = useDebounce(searchInput, 500);

  const apiParams = {
    PageNumber: pageNumber,
    RowsOfPage: rowsOfthePage,
  };

  useEffect(() => {
    setSearchInput(searchDelay);
  }, [searchDelay]);

  const { data } = useQuery({
    queryKey: ["myCourses", apiParams],
    queryFn: (apiParams) => getMyCourses(apiParams),
  });

  if (data) {
    console.log(data);
  }
   


  return (
    <div className="w-full flex-col-center gap-8">
      <div className="w-full justy-between ">
        <div>
          <DashboardAutoComplete radius={"full"} />
        </div>
        <div>
          <SearchSection Query={searchInput} setQuery={setSearchInput} />
        </div>
      </div>
      <div className="w-[65%] ">
        <CourseTableRow
          items={["نام دوره", "مدرس دوره", "تاریخ شروع", "قیمت"]}
        />
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent"></div>
      <div className="w-full mt-[12px] gap-1.5 lg:gap-3 flex flex-col">
        {data?.listOfMyCourses?.map((courses) => {
          return (
            <CourseStatusList1
              courseTitle={courses.course.title}
              teacheName={courses.teacher.fName}
              lastUpdate={courses.course.startTime}
            />
          );
        })}
      </div>
      <CustomPagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        RowsOfPage={rowsOfthePage}
        totalCount={data?.listOfMyCourses.totalCount}
      />
    </div>
  );
};

export default MyCourses;
