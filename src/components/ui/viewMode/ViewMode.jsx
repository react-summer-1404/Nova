import React from "react";
import { BsGrid } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import "../../../assets/styles/global.css";
const ViewMode = ({ isCol, setIsCol }) => {
  return (
    <div className="md:flex gap-2 hidden ">
      <div
        style={
          isCol
            ? {
                borderColor: "var(--color-border-blue)",
                backgroundColor: "var(--color-dark-purple)",
              }
            : {
                borderColor: "var(--color-border-blue)",
                backgroundColor: "var(--color-white)",
              }
        }
        className="w-[40px] h-[40px] border rounded-sm flex-center"
        onClick={() => setIsCol(true)}
      >
        <TfiMenuAlt color={isCol ? "white" : "#5751E1"} />

      </div>

      <div
        style={
          !isCol
            ? {
                borderColor: "var(--color-border-blue)",
                backgroundColor: "var(--color-dark-purple)",
              }
            : {
                borderColor: "var(--color-border-blue)",
                backgroundColor: "var(--color-white)",
              }
        }
        className="w-[40px] h-[40px] border rounded-sm flex-center"
        onClick={() => setIsCol(false)}
      >
        <BsGrid color={!isCol ? "white" : "#5751E1"} />
      </div>
    </div>
  );
};

export default ViewMode;
