import React from "react";
import { Button, ButtonGroup } from "@heroui/button";
import { CiCalendar } from "react-icons/ci";

const LabelAndDate = () => {
  return (
    <div className="w-[80%] sm:w-full flex justify-between items-center text-[8px] sm:text-[15px]">
      <div className="flex-center gap-0.5">
        <span className="">20 جولای 2024</span>
        <CiCalendar />
      </div>
      <Button
        type="button"
        style={{
          background: "var(--color-dark-purple)",
          color: "var(--color-white)",
        }}
        radius="full"
      >
        علوم پایه
      </Button>
    </div>
  );
};

export default LabelAndDate;
