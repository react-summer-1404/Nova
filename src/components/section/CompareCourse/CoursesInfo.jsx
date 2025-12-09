import React from "react";
import { AiFillAlert } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getCourseDetail } from "../../../servises/api/coursesDetail/getDetail";
import YellowButton from "../../ui/button/YellowButton";
import { useNavigate } from "react-router-dom";

const CoursesInfo = ({ cId }) => {
  const { data } = useQuery({
    queryKey: ["getCourseDetailId", cId],
    queryFn: () => getCourseDetail(cId),
    enabled: !!cId,
  });
  const navigate = useNavigate();

  const options = [
    { name: ":نام استاد", content: data?.teacherName, icon: <AiFillAlert /> },
    {
      name: ":تاریخ شروع",
      content: data?.startTime?.slice(0, 10),
      icon: <AiFillAlert />,
    },
    { name: ":ظرفیت", content: data?.capacity, icon: <AiFillAlert /> },
    {
      name: ":سطح دوره",
      content: data?.courseLevelName,
      icon: <AiFillAlert />,
    },
    {
      name: ":توضیحات کوتاه ",
      content: data?.miniDescribe,
      icon: <AiFillAlert />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center relative h-[800px] gap-4 ">
      <div className="md:w-[350px] w-[150px] h-[150px] md:h-[200px] absolute top-3 shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] rounded-[25px]">
        <img
          className="md:w-[350px] w-[150px] h-[150px] md:h-[200px] rounded-[25px]"
          src={data?.imageAddress || "/default.png"}
        />
      </div>

      <div className="bg-light-purple w-[250px] md:w-[450px] md:h-[70%] flex items-center justify-center rounded-[25px] border-2 border-[#5751E133]">
        <div className="flex flex-col gap-10 w-[90%]">
          <h2 className="font-semibold text-black text-lg pt-8">
            {data?.title || "در حال بارگذاری..."}
          </h2>

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
          <YellowButton
          height={"30px"}
            text={"جزییات دوره"}
            onClick={() => navigate(`/courseDetail/${cId}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesInfo;
