import React from "react";
import heroPic from "../../../../assets/images/herosectionPic.svg";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft } from "react-icons/go";
import AccentText from "../../../ui/accentText/AccentText";
import { Link } from "react-router";
const HeroSection = () => {
  return (
    <div
      style={{ background: "var(--gradient-main)" }}
      className="w-screen flex-center pt-4 bg-gradient-main"
    >
      <div className="flex justify-between w-5/6">
        <img src={heroPic} className="hidden md:block md:w-1/2 md:h-3/4" />

        <div className="p-5 flex flex-col gap-6 items-end max-w-[490px]">
          <AccentText
            beforeLabel={"هرگز از"}
            afterLabel={"دست نکشید زندگی هرگز از اموزش دست نمیکشد"}
          />

          <h3
            className="text-responsive text-right pb-[35px] max-w-md text-text-gray"
          >
            هر سفر اموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک
            خواهیم کرد
          </h3>
          <Link to={"/courses"}>
            <BlueButton BtnIcon={<GoArrowLeft />} content={"دوره ها"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
