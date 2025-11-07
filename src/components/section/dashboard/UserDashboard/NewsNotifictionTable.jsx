import React from "react";

const NewsNotifictionTable = ({newsReleaseTime,isNew,newsTitle}) => {
  return (
    <div className="flex justify-between items-center whitespace-nowrap">
      <span className="text-[9px] sm:text-[13px] text-text-gray">{newsReleaseTime}</span>
      <div className="flex justify-between gap-2.5">
        <span className="text-red-600 text-[14px]">{isNew}</span>
        <span className="text-[9px] sm:text-[14px] text-base-gray">{newsTitle}</span>{" "}
      </div>
    </div>
  );
};

export default NewsNotifictionTable;
