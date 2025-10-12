import React from "react";
import authImg from '../../../../assets/images/auth-content-side.svg'
import { AccentText, YellowButton } from "../../../../components/ui";

const SideContent = () => {
  return (
    <div className="w-full mt-2 flex justify-end flex-col text-text font-semibold text-4xl">
      <span className="flex justify-end items-center gap-1.5 font-">
        <AccentText title={"یادگیری"} />
        <p className="leading-16">هرگز از</p>
      </span>
      <span className="flex justify-end text-right">
        دست نکشید زندگی هرگز از آموزش دست نمی کشد
      </span>
      <div className="w-[500px] p-1.5 mt-6">
        <img src={authImg} alt="auth image" className="w-[340px] h-[320px]" />
      </div>
    </div>
  );
};

export default SideContent;
