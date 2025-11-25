import React from "react";

const YellowButton = ({
  width,
  height,
  text,
  icon,
  onClick,
  type,
  bgColor,
}) => {
  return (
    <button
      type={type}
      style={{
        width,
        height,
        backgroundColor: bgColor,
      }}
      className="border bg-golden-yellow  whitespace-nowrap flex-center gap-1 rounded-[50px] p-5  text-[16px] font-semibold leading-[18px] text-center cursor-pointer shadow-[2px_4px_0_0_rgba(56,41,0,1)]
      transition-all duration-200
      hover:translate-x-[4px]
      hover:translate-y-[4px]
      hover:shadow-none"
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default YellowButton;
