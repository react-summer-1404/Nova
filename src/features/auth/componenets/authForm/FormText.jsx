import React from "react";

const FormText = ({ title, subtitle }) => {
  return (
    <div className="">
      <h4
        style={{ color: "var(--color-navy)" }}
        className="text-[28px] font-semibold"
      >
        {title}
      </h4>
      <span
        style={{ color: "var( --color-text-gray)" }}
        className="text-[16px] sm:text-[20px] font-normal leading-[33px]"
      >
        {subtitle}
      </span>
    </div>
  );
};

export default FormText;
