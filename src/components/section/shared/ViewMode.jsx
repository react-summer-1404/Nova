import React from "react";
import { BsGrid } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
const ViewMode = () => {
  return (
    <div className="flex gap-2">
      <div
        style={{ borderColor: "var(--color-border-blue)" }}
        className="w-[40px] h-[40px] border rounded-sm"
      >
        <TfiMenuAlt/>
      </div>
      
      <div
        style={{ borderColor: "var(--color-border-blue)" }}
        className="w-[40px] h-[40px] border rounded-sm"
      >
        <BsGrid />
      </div>
    </div>
  );
};

export default ViewMode;
