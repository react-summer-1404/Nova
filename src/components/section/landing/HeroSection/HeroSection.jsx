import React from "react";
import "../../../../assets/styles/global.css";
import heroPic from "../../../../assets/images/herosectionPic.svg";
import PurpleBtn from "../../../ui/button/BlueButton";
import { GoArrowLeft } from "react-icons/go";
import AccentText from "../../../ui/accentText/AccentText";
import Contex from "../../../ui/accentText/contex";
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-gray-50 to-pink-100 w-screen flex-center pt-4">
      <div className="flex justify-between w-5/6">
        <img src={heroPic} className="hidden md:block md:w-1/2 md:h-3/4" />

        <div className="p-5 flex flex-col gap-6">
          
       <Contex beforeLabel={"هرگز از"} afterLabel={"دست نکشید زندگی هرگز از اموزش دست نمیکشد"} text={"یادگیری"} />

          <h3 className="text-[#6D6C80] text-responsive text-right pb-[35px] max-w-md ">
            هر سفر اموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک
            خواهیم کرد
          </h3>

          <PurpleBtn content={"رایگان ازمایش کنید"} BtnIcon={<GoArrowLeft />} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
