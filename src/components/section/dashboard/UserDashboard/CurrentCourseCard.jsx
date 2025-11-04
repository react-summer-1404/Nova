import React from "react";
import { CiUser } from "react-icons/ci";
import currentimg from "../../../../assets/images/Link.png";

const CurrentCourseCard = () => {
  return (
    <div className="w-[348px] h-[76px] flex flex-col items-end gap-5 bg-soft-gray shadow-2d-gray radius10 py-2 px-3.5">
      <h4 className="text-[13px] font-semibold">آموزش Tailwind css</h4>
      <div className="w-full flex justify-between items-center border">
        <img className="w-[80px] h-[60px]" src={currentimg} alt="" />
        <div>
          <span className="text-[12px] text-golden-yellow">
            چهارشنبه ها . ۱۷:۳۰
          </span>
          <span className="flex items-center gap-0.5 text-[12px] text-dark-purple">
            <i>مهدی اصغری</i>
            <CiUser />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourseCard;
