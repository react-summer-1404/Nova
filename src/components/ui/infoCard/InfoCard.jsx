import { useState } from "react";
import useToggle from "../../../hooks/useToggle";

const InfoCard = ({ title, children, showMoreButton = false }) => {
  const [isExpanded, setIsExpanded] = useToggle(false);

  return (
    <div
      style={{ backgroundColor: "var(--color-light-gray)" }}
      className="lg:w-[310px]  rounded-[10px] p-[30px]"
    >
      <div className="w-full flex flex-col items-end gap-4 ">
        <h2 className="font-semibold text-xl">{title}</h2>

        <div
          className={`transition-all duration-500 overflow-hidden w-[90%] ${
            isExpanded ? "max-h-[1000px]" : "max-h-[500px] "
          }`}
        >
          {children}
        </div>

        {showMoreButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium self-center mt-2"
            style={{color:"var(--color-dark-purple)"}}
          >
            {isExpanded ? "نمایش کمتر" : "+ نمایش بیشتر  "}
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
