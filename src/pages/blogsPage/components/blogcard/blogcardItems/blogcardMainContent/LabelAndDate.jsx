import React from "react";
import { Button, ButtonGroup } from "@heroui/button";
import { CiCalendar } from "react-icons/ci";

const LabelAndDate = ({ label, date }) => {
  return (
    <div className="w-[80%] sm:w-full flex justify-between items-center text-[8px] sm:text-[15px]">
      <div className="flex-center gap-0.5">
        <span className="text-[14px] whitespace-nowrap">{date}</span>
        <CiCalendar />
      </div>
      <div style={{ background: "var(--color-dark-purple)", color: "var(--color-white)",}} className="w-[56px] rounded-4xl px-1 py-0.5 text-center">
        {label}
      </div>
    </div>
  );
};

export default LabelAndDate;
