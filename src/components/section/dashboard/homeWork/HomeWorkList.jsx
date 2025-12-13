import React from "react";
import HomeWorlTable from "./HomeWorlTable";
import { getHomeWorkList } from "../../../../servises/api/userPanel/homeWork";
import HomeWorkInfo from "./HomeWorkInfo";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@heroui/spinner";
import { getRole } from "../../../../hooks/localStorage";

const HomeWorkList = () => {
  const roles = getRole();
  const isStudent = roles.includes("student");
  const { data , isLoading } = useQuery({
    queryKey: ["getHomeWorkList"],
    queryFn: getHomeWorkList,
    enabled:isStudent
  });
  if (isLoading) {
    return (
      <div className="w-full flex justify-center mt-10">
        <Spinner size="lg" color="primary" label="در حال بارگذاری..." />
      </div>
    );
  }
  if (!isStudent) {
    return <p className="text-red-500 text-2xl">فقط دانشجویان اجازه دسترسی به این قسمت را دارند</p>;
  }
  return (
    <div>
      <div className="flex flex-col items-center w-full  gap-4 ">
        <HomeWorlTable />
        {data?.length > 0 ? (
          data.map((item) => (
            <HomeWorkInfo
              key={item.homeWorkId}
              homeWorkId={item.homeWorkId}
              hwTitle={item.hwTitle}
              lastUpdate={item.homeWorkDate?.slice(0, 10)}
              hwDescribe={item.hwDescribe}
              courseStudentId={item.courseStudentId}
              groupName={item.groupName}
            />
          ))
        ) : (
          <span className="text-gray-500 mt-4">
            هیچ تکلیفی برای شما وجود ندارد
          </span>
        )}
      </div>
    </div>
  );
};

export default HomeWorkList;
