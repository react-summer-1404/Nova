import React from "react";

const AccountBtn = ({ isOpen ,onclick}) => {
  return (
    <button
    onClick={onclick}
      style={{ backgroundColor: "var(--color-golden-yellow)" }}
      className={`text-responsive !rounded-full whitespace-nowrap border-[#06235B30] p-2 font-bold xl:w-[130px] cursor-pointer 
      ${isOpen ? "block z-30 absolute right-5 top-[70px]" : "hidden"} md:block`}
    >
      حساب کاربری
    </button>
  );
};

export default AccountBtn;
