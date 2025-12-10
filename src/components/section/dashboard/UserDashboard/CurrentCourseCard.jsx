import React from "react";
import { CiUser } from "react-icons/ci";

const CurrentCourseCard = ({ title, classTime, teacherName, img ,cost}) => {

  return (
    <div className="w-full h-[76px] justy-between gap-3.5 bg-soft-gray shadow-2d-gray radius10 py-2 px-3.5 ">
      <div className="w-full flex-col-right gap-6">
        <h4 className="text-[16px] text-navy font-semibold">{title}</h4>
        <div className="w-full justy-between text-[12px]">
          {cost&&<span className="text-golden-yellow text-base">{cost}</span>}
          {classTime&&<span className="text-golden-yellow text-base">{classTime.slice(0, 10)}</span>}
          <span className="flex items-center gap-0.5 text-dark-purple text-sm">
            {teacherName}
            <CiUser />
          </span>
        </div>
      </div>
      <img
        className="w-20  h-full rounded-[6px]"
        src={img || "/default.png"}
        alt="course banner img"
      />
    </div>
  );
};

export default CurrentCourseCard;
