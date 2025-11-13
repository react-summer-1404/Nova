import React from "react";

const YellowButton = ({ width,height, text, icon ,onClick ,type ,bgColor}) => {

  return (
    <button
      type={type}
      style={{
        width,
        height,
        backgroundColor:bgColor
      }}
      className="border border-black bg-golden-yellow  whitespace-nowrap flex-center gap-1 rounded-[50px] p-5 shadow-2d-yellow text-[16px] font-semibold leading-[18px] text-center cursor-pointer "
    onClick={onClick}

    >
      {icon && <span >{icon}</span>}
      {text}
    </button>
  );
};

export default YellowButton;
