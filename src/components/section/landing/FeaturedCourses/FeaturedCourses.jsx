import React from "react";
import "../../../../assets/styles/variable.css";
import "../../../../assets/styles/global.css";
import Tag from "../../../ui/Tag/Tag";
import BlueButton from "../../../ui/button/BlueButton";
import Tab from "./Tab";
import CourseProductCard from "../../productCard/CourseProductCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const FeaturedCourses = () => {
  return (
    <div
      style={{ background: "var(--gradient-main)" }}
      className="w-screen p-10 flex-center"
    >
      <div  className="gap-12 flex flex-col w-full  items-center">
        <div className="flex flex-col items-center gap-3">
          <Tag
            title={"دوره های کلاس برتر"}
            textColor={"var(--color-dark-purple)"}
            bgColor={"var(--color-light-purple)"}
          />
          <h2 className=" font-bold md:text-4xl text-2xl">
            بهترین دوره های آموزشی جهان ما را کاوش کنید
          </h2>
          <h3 className="text-[#6D6C80] text-responsive">
            امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
          </h3>
          <Tab />
        </div>

        <div className="flex items-center  justify-between w-[95%] md:w-full gap-4">
        <BlueButton BtnIcon={<GoArrowLeft size={"20px"} className="m-1" />}  width={"50px"} height={"50px"}/>
          <div className="flex justify-evenly gap-4 overflow-hidden  w-3/4">
            <CourseProductCard/>
          </div>
          <BlueButton BtnIcon={<GoArrowRight size={"20px"} className="m-1" />} width={"50px"} height={"50px"} />
        </div>

      </div>
    </div>
  );
};

export default FeaturedCourses;
