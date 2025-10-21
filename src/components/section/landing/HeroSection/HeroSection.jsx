import React from "react";
import "../../../../assets/styles/global.css";
import "../../../../assets/styles/variable.css";
import heroPic from "../../../../assets/images/herosectionPic.svg";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft } from "react-icons/go";
import AccentText from "../../../ui/accentText/AccentText";
const HeroSection = () => {
  return (
    <div style={{ background: "var(--gradient-main)" }} className="w-screen flex-center pt-4">
      <div className="flex justify-between w-5/6">
        <img src={heroPic} className="hidden md:block md:w-1/2 md:h-3/4" />

        <div className="p-5 flex flex-col gap-6 items-end">
          
       <AccentText beforeLabel={"هرگز از"} afterLabel={"دست نکشید زندگی هرگز از اموزش دست نمیکشد"} title={"یادگیری"} />

          <h3 style={{color:"var(--color-text-gray)"}}className="text-responsive text-right pb-[35px] max-w-md ">
            هر سفر اموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک
            خواهیم کرد
          </h3>

          <BlueButton BtnIcon={<GoArrowLeft />} content={"رایگان ازمایش کنید"}  />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
