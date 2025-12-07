import React from "react";
import HomeWorlTable from "./HomeWorlTable";
import { getHomeWorkList } from "../../../../servises/api/userPanel/homeWork";
import HomeWorkInfo from "./HomeWorkInfo";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@heroui/spinner";

const HomeWorkList = () => {
  const { data , isLoading } = useQuery({
    queryKey: ["getHomeWorkList"],
    queryFn: getHomeWorkList,
  });
  if (isLoading) {
    return (
      <div className="w-full flex justify-center mt-10">
        <Spinner size="lg" color="primary" label="در حال بارگذاری..." />
      </div>
    );
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
