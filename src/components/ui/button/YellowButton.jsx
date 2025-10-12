import React from "react";

const YellowButton = ({ width, text, icon }) => {
  return (
    <button
      type="submit"
      style={{
        width,
        backgroundColor: "var(--color-golden-yellow)",
        fontFamily: "var(--font-base)",
      }}
      className="border border-black rounded-[50px] p-5 shadow-2d-yellow text-[20px] font-semibold leading-[18px] text-center cursor-pointer"
    >
      {text}
    </button>
  );
};

export default YellowButton;
