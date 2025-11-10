import React from "react";
import ReserveTable from "./ReserveTable/ReserveTable";
import ReserveInfo from "./reservInfo/ReserveInfo";
import { useQuery } from "@tanstack/react-query";
import { getMyReserveCourses } from "../../../../servises/api/userPanel/getMyCoursesReserve";

const ReservedCourses = () => {
  const { data } = useQuery({
    queryKey: ["reserveCourse"],
    queryFn: getMyReserveCourses,
  });
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <ReserveTable />
        {data?.length > 0 ? (
          data.map((item) => (
            <ReserveInfo
              key={item.id}
              courseTitle={item.courseName}
              lastUpdate={item.insertDate?.slice(0, 10)}
              teacheName={item.accept}
            />
          ))
        ) : (
          <span className="text-gray-500 mt-4">هیچ دوره‌ای رزرو نشده است.</span>
        )}
      </div>
    </div>
  );
};

export default ReservedCourses;
