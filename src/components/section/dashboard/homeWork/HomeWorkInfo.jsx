import React from "react";

import {Tooltip} from "@heroui/tooltip";
import { Button } from "@heroui/button";

const HomeWorkInfo = ({
  courseStudentId,
  lastUpdate,
  hwDescribe,
  hwTitle,
  homeWorkId,
  groupName,
}) => {
  return (
    <div className="justify-center items-center gap-8 flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]">
      <div className="w-[67%] grid grid-flow-col auto-cols-fr ">
        <div>{lastUpdate}</div>

        <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">Custom Content</div>
          <div className="text-tiny">This is a custom tooltip content</div>
        </div>
      }
    >
      <Button variant="bordered">Hover me</Button>
    </Tooltip>

        <div>{hwTitle}</div>
        <div>{groupName}</div>
      </div>

      <div className="lg:w-[4%] rounded-full h-[35px]"></div>
    </div>
  );
};

export default HomeWorkInfo;
