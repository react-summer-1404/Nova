import React from "react";

const PurpleBtn = ({ content, BtnIcon }) => {
  return (
    <button
      type="submit"
      className="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white !font-semibold rounded-full text-responsive flex gap-1 p-2 ml-auto cursor-pointer"
    >
      {BtnIcon && <span className="mt-1">{BtnIcon}</span>}
      <span>{content}</span>
    </button>
  );
};

export default PurpleBtn;
