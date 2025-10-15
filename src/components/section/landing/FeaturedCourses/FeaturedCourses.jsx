import React, { useState, useEffect } from "react";
import "../../../../assets/styles/variable.css";
import "../../../../assets/styles/global.css";
import Tag from "../../../ui/Tag/Tag";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSlider } from "../../../../hooks/useSlider";
import productData from "../../../ui/card/productData";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import Tab from "./Tab";

const FeaturedCourses = () => {
  const { slide, nextSlide, prevSlide, slidesPerView } = useSlider({
    itemsLength: productData.length,
    itemsPerPage: 4,
    sm: 1,
    md: 2
  });
  
  return (
    <div
      style={{ background: "var(--gradient-main)" }}
      className="w-screen p-10 flex-center"
    >
      <div className="gap-12 flex flex-col w-full items-center">
        <div className="flex flex-col items-center gap-3">
          <Tag
            title={"دوره های کلاس برتر"}
            textColor={"var(--color-dark-purple)"}
            bgColor={"var(--color-light-purple)"}
          />
          <h2 className="font-bold md:text-4xl text-2xl">
            بهترین دوره‌های آموزشی جهان ما را کاوش کنید
          </h2>
          <h3 style={{backgroundColor:"var(--color-text-gray)"}} className=" text-responsive">
            امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
          </h3>
          <Tab />
        </div>

        <div className="flex items-center justify-between w-[95%] md:w-full gap-4">
  <BlueButton
    onClick={prevSlide}
    BtnIcon={<GoArrowLeft size={"20px"} className="m-1" />}
    width={"50px"}
    height={"50px"}
  />
  
  <div className="overflow-hidden w-[90%] md:h-fit h-[450px]  border-amber-800 ">  
    <div
      className="flex  transition-transform duration-500 ease-in-out  "       
      style={{
        transform: `translateX(-${slide * (100 / slidesPerView)}%)`,
      }}
    >
      {productData.map((product, index) => (
        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2 ">  
          <CourseProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
  
  <BlueButton
    onClick={nextSlide}
    BtnIcon={<GoArrowRight size={"20px"} className="m-1" />}
    width={"50px"}
    height={"50px"}
  />
</div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
