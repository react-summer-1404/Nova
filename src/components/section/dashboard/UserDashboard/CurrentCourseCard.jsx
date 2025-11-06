import React from "react";
import { CiUser } from "react-icons/ci";

const CurrentCourseCard = ({ title, classTime, teacherName, img }) => {
  const newClassTime = classTime.slice(1,10)
  return (
    <div className="w-[348px] h-[76px] justy-between gap-3.5 bg-soft-gray shadow-2d-gray radius10 py-2 px-3.5">
      <img className="w-20 rounded-[6px]" src={img} alt="course banner img" />
      <div className="w-full flex-col-right gap-6">
        <h4 className="text-[14px] text-navy font-semibold">{title}</h4>
        <div className="w-full justy-between text-[12px]">
          <span className="text-golden-yellow">{newClassTime}</span>
          <span className="flex items-center gap-0.5 text-dark-purple">{teacherName}<CiUser /></span>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourseCard;
