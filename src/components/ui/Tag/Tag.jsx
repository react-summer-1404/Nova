import React from "react";
import "../../../assets/styles/global.css"

const Tag = ({ title, textColor, bgColor, icon, width, height, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: bgColor, height, width }}
      className="rounded-full px-2 flex items-center justify-center  whitespace-nowrap"
    >
      <span style={{ color: textColor }} className="p-1 text-base">
        {title}
      </span>
      {icon && <span>{icon}</span>}
    </div>
  );
};

export default Tag;
