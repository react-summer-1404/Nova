import React from "react";

const YellowButton = ({ width,height, text, icon ,onClick ,type}) => {

  return (
    <button
      type={type}
      style={{
        width,
        height,
      }}
      className="border border-black bg-golden-yellow  whitespace-nowrap flex-center gap-1 rounded-[50px] p-5 shadow-2d-yellow text-[16px] font-semibold leading-[18px] text-center cursor-pointer "
    onClick={onClick}

    >
      {text}
      {icon && <span >{icon}</span>}
    </button>
  );
};

export default YellowButton;
