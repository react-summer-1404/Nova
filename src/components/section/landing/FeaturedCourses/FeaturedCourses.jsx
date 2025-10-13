import React from "react";
import "../../../../assets/styles/variable.css";
import "../../../../assets/styles/global.css";
import Tag from "../../../ui/Tag/Tag";
import Tab from "./Tab"

const FeaturedCourses = () => {
  return (
    <div style={{ background: "var(--gradient-main)" }} className="w-screen p-10 ">
      <div>
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
         <Tab/>
         

        </div>

        <div></div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
