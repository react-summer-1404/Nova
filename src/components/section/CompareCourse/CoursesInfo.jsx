import React from 'react'
import { AiFillAlert } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getCourseDetail } from '../../../servises/api/coursesDetail/getDetail';

const CoursesInfo = ({ cId }) => {

  const { data } = useQuery({
    queryKey: ["getCourseDetailId", cId],
    queryFn: () => getCourseDetail(cId),
    enabled: !!cId,
  });

  const options = [
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center relative h-[800px]">

      <div className="w-[350px] h-[200px] absolute top-2 shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] rounded-[25px]">
        <img
          className="w-[350px] h-[200px] rounded-[25px]"
          src={data?.imageAddress || "/default.png"}
        />
      </div>

      <div className="bg-light-purple w-[450px] h-[70%] flex items-center justify-center rounded-[25px] border-2 border-[#5751E133]">
        <div className="flex flex-col gap-8 w-[90%]">
          <h2>{data?.title || "در حال بارگذاری..."}</h2>

          <div className="flex flex-col text-dark-purple gap-8">
            {options.map((option, index) => (
              <div key={index} className="flex justify-between">
                <p>{option.content}</p>
                <div className="flex gap-2 items-center">
                  <span>{option.name}</span>
                  {option.icon}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default CoursesInfo;
