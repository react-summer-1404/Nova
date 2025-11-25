import React from "react";

const PurpleBtn = ({ content, BtnIcon, width, height, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ width, height }}
      type="submit"
      className="
        bg-dark-purple 
        text-white 
        !font-semibold 
        rounded-full 
        text-responsive 
        flex gap-1 p-2 px-3 cursor-pointer flex-center

        shadow-[4px_4px_0px_0px_rgba(60,0,180,1)]
        transition-all duration-200

        hover:translate-x-[4px]
        hover:translate-y-[4px]
        hover:shadow-none
      "
    >
      {BtnIcon && <span className="mt-1">{BtnIcon}</span>}
      <span>{content}</span>
    </button>
  );
};

export default PurpleBtn;
