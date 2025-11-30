import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const RelatesNews = ({detailItems,id}) => {
const shortDate = detailItems?.insertDate.slice(0,10);

  return (
    <Link to={`/blogDetail/${id}`}>
    <div className=" flex gap-4 items-center p-2 ">
      <div className="flex flex-col items-end gap-1 ">
        <div className="flex gap-2 items-center">
          <span className="text-text-gray text-sm">{shortDate}</span>
          <MdOutlineDateRange size={20} className="text-dark-purple" />
        </div>
        <h2 className="font-medium text-sm text-right">
          {detailItems?.miniDescribe}
        </h2>
      </div>
      <img
        src={detailItems?.currentImageAddress||"/default.png"}
        className="w-[74px] h-[74px] rounded-sm"
      />
    </div></Link>
  );
};

export default RelatesNews;
