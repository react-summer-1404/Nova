import React from "react";
import aboutPic from "../../../assets/images/Section → inner_about_img.svg";
import svg from "../../../assets/icons/Section → SVG.svg";
import Tag from "../../../components/ui/Tag/Tag";
import { AccentText } from "../../../components/ui";
import AboutOption from "../../../components/section/landing/AboutSection/AboutOption";
import BlueButton from "../../../components/ui/button/BlueButton";
import { GoArrowLeft } from "react-icons/go";
import yellowLable from "../../../assets/images/Group 2.svg";
const AboutMore = () => {
  return (
    <div className="flex flex-col gap-8  w-screen items-center">
      <div className="flex md:w-fit lg:p-[132px] p-8 gap-[70px]  w-[90%]">
        <div className="flex flex-col items-end gap-5 md:w-[650px] w-full  ">
          <Tag
            title={"درباره ما بیشتر بدانید"}
            textColor={"#5751E1"}
            bgColor={"#EFEEFE"}
            width={"177px"}
            height={"31px"}
          />
          <div className="hidden lg:block">
            <div
              className="flex flex-col-reverse font-bold xl:text-4xl lg:text-2xl text-black text-base  text-right gap-3  whitespace-nowrap "
              dir="rtl"
            >
              <p>سطح بعدی</p>

              <div className="flex items-center gap-2">
                <p>هدف</p>
                <img src={yellowLable} className="lg:w-[190px]  w-[100px]"/>
                <p>انها برای چالش </p>
              </div>
              <p>توانسازی داشن اموزان برای رسیدن به </p>
            </div>
          </div>
          <span
            style={{ color: "var(--color-text-gray)" }}
            className="text-right"
          >
            سلام! این یک پیام تستی است سلام! این یک پیام تستی است سلام! این یک
            پیام تستی است سلام! این یک پیام تستی است سلام! این یک پیام تستی است
            سلام! این یک پیام تستی است سلام! این یک پیام تستی است{" "}
          </span>
          <AboutOption />
          <BlueButton content={"درباره ما"} BtnIcon={<GoArrowLeft />} />
        </div>

        <div className="lg:flex  w-fit relative hidden  h-fit">
          <img src={aboutPic} />
          <img src={svg} className="absolute top-0 right-0" />
        </div>
      </div>
    </div>
  );
};

export default AboutMore;
