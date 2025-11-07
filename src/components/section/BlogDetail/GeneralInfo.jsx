import React from "react";
import Tag from '../../ui/Tag/Tag';
import { MdOutlineDateRange } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { TfiComment } from "react-icons/tfi"; 

const GeneralInfo = ({detailItems}) => {
const shortDate = detailItems?.insertDate.slice(0,10);

  return (
    <div className="flex text-text-gray text-sm  sm:justify-between sm:flex-row  sm:items-end  md:p-0 flex-col-reverse items-center gap-4 px-2 pb-6">
      <div className="flex gap-3 items-center ">
        <div className="flex gap-2 items-center">
          <span>{detailItems?.newsRate.count}</span>
          <FaStar size={18} className="text-golden-yellow" />
        </div>
        <div className="flex gap-2">
          <span>{detailItems?.commentsCount}</span>
          <TfiComment size={18}  className="text-dark-purple"/>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <span>{detailItems?.currentView}</span>
          <IoEyeSharp size={20} className="text-dark-purple" />
        </div>

        <div className="flex gap-2 items-center">
          <span>{shortDate}</span>
          <MdOutlineDateRange size={20} className="text-dark-purple" />
        </div>

        <div>
          <Tag
            textColor={"white"}
            width={"77px"}
            bgColor={"var(--color-dark-purple)"}
            title={detailItems?.newsCatregoryName}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
