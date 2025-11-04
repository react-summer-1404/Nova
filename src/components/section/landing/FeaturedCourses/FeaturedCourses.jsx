import React, { useState } from "react";
import Tag from "../../../ui/Tag/Tag";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSlider } from "../../../../hooks/useSlider";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import Tabs from "./Tab";
import { useQuery } from "@tanstack/react-query";
import { getTopCourses } from "../../../../servises/api/landing/topCourses";

const FeaturedCourses = () => {
  const [pointTab, setPointTab] = useState("همه دوره‌ها");

  const {data:topCourseData } = useQuery({
    queryKey:["topCourse"],
    queryFn:getTopCourses,
  })
  const filteredCourses =
  pointTab === "همه دوره‌ها"
    ? topCourseData
    : topCourseData.filter((tc) => tc.technologyList?.includes(pointTab) );

  const { slide, nextSlide, prevSlide, slidesPerView } = useSlider({
    itemsLength: filteredCourses?.length,
    itemsPerPage: 4,
    sm: 1,
    md: 2
  });
  
  return (
    <div
      style={{ background: "var(--gradient-main)" }}
      className="w-screen p-[100px] flex-center"
    >
      <div className="gap-12 flex flex-col w-full items-center ">
        <div className="flex flex-col items-center gap-3">
          <Tag
            title={"دوره های کلاس برتر"}
            textColor={"var(--color-dark-purple)"}
            bgColor={"var(--color-light-purple)"}
          />
          <h2 className="font-bold md:text-4xl text-2xl">
            بهترین دوره‌های آموزشی جهان ما را کاوش کنید
          </h2>
          <h3 style={{color:"var(--color-text-gray)"}} className=" text-responsive">
            امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
          </h3>
          <Tabs pointTab={pointTab} setPointTab={setPointTab}/>
        </div>

        <div className="flex items-center justify-between w-[420px] md:w-full gap-2 ">
  <BlueButton
    onClick={prevSlide}
    BtnIcon={<GoArrowLeft size={"20px"} className="m-2" />}
    width={"50px"}
    height={"50px"}
  />
  
  <div className="overflow-hidden w-[90%] ">  
    <div
      className="flex transition-transform duration-500 ease-in-out gap-4 "       
      style={{
        transform: `translateX(-${slide * (100 / slidesPerView)}%)`,
      }}
    >
      {filteredCourses?.map((product) => (
        <div key={product.courseId} className="flex-shrink-0 ">  
          <CourseProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
  
  <BlueButton
    onClick={nextSlide}
    BtnIcon={<GoArrowRight size={"20px"} className="m-2" />}
    width={"50px"}
    height={"50px"}
  />
</div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
