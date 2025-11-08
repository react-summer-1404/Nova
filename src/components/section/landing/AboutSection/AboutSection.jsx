import React from "react";
import AboutPic from "../../../../assets/images/aboutUsHome.svg";
import Tag from "../../../ui/Tag/Tag";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft } from "react-icons/go";
import AccentText from "../../../ui/accentText/AccentText";
import { Link } from "react-router-dom";
import AboutOption from "./AboutOption";

const AboutSection = () => {
 
  return (
    <div className="w-screen flex-center pb-20 pt-20 ">
      <div className="flex justify-between  w-3/4 md:w-full lg:w-full xl:w-3/4 g-16 ">
        <div className="  md:w-[500px] justify-end  flex-center ">
          <div className="items-center md:items-end flex flex-col  gap-6">
            <Tag
              title={"درباره ما بیشتر بدانید"}
              textColor={"var(--color-dark-purple)"}
              bgColor={"var(--color-light-purple)"}
            />
            <AccentText
              afterLabel={"برتر اکنون در یک مکان"}
              beforeLabel={"هزاران"}
            />
            <h3
              className="text-right max-w-md text-responsive text-text-gray"
            >
              صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می
              کند سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم
              صحبت در مورد پایه پلتفرم وب.
            </h3>
            <AboutOption/>
            <Link to={"/aboutUs"}>
              <BlueButton content={"درباره ما"} BtnIcon={<GoArrowLeft />} />
            </Link>
          </div>
        </div>
        <img src={AboutPic} className="hidden md:block w-1/2 " />
      </div>
    </div>
  );
};

export default AboutSection;
