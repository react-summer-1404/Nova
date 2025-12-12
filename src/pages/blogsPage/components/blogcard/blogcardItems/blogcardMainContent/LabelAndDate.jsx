import React from "react";
import { Button, ButtonGroup } from "@heroui/button";
import { CiCalendar } from "react-icons/ci";
import { formatJalali } from "../../../../../../core/services/date";

const LabelAndDate = ({ label, date }) => {
  const newsData = date?.slice(0,10)
  return (
    <div className="w-[80%] sm:w-full flex justify-between items-center text-[8px] sm:text-[15px]">
      <div className="flex-center gap-0.5">
        <span className="text-[14px] whitespace-nowrap">{formatJalali(newsData)}</span>
        <CiCalendar />
      </div>
      <div style={{ background: "var(--color-dark-purple)", color: "var(--color-white)",}} className="w-[50%] h-[28px] flex-center px-1 py-0.5 rounded-4xl text-[13px] text-center overflow-hidden ">
        {label}
      </div>
    </div>
  );
};

export default LabelAndDate;

// const newsLabelData = label.split(",");
//   const newsLabels = newsLabelData.map((newsLabel,index) => {
//     return (<div key={index}>{newsLabel}</div>)
//   })