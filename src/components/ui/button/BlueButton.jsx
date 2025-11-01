import React from "react";

const PurpleBtn = ({ content, BtnIcon, width, height, onClick}) => {
  return (
    <button
    onClick={onClick}
      style={{ backgroundColor: "var(--color-dark-purple)", width, height }}
      type="submit"
      className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white !font-semibold rounded-full text-responsive flex gap-1 p-1 px-3"
    >
      {BtnIcon && <span className ="mt-1">{BtnIcon}</span>}
      <span>{content}</span>

    </button>
  );
};

export default PurpleBtn;
