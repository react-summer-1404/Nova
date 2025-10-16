import React from "react";

const YellowButton = ({ width, text, icon, type }) => {
  return (
    <button
      type={type}
      style={{
        width,
        backgroundColor: "var(--color-golden-yellow)",
        fontFamily: "var(--font-base)",
      }}
      className="border border-black rounded-[50px] mt-4 sm:mt-8 px-3 sm:px-8 py-3 sm:py-4 shadow-[4px_4px_0_rgba(0,0,0,1)] text-[18px] sm:text-[20px] font-semibold leading-[18px] text-center cursor-pointer"
    >
      {text}
    </button>
  );
};

export default YellowButton;
