import React, { useState } from "react";
import Tag from "../../../ui/Tag/Tag";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import Tabs from "./Tab";
import { useQuery } from "@tanstack/react-query";
import { getTopCourses } from "../../../../servises/api/landing/topCourses";
import { motion } from "framer-motion";
import { scrollVariant } from "../../../../configs/frameMorion/Scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
const FeaturedCourses = () => {
  const [pointTab, setPointTab] = useState("همه دوره‌ها");

  const { data: topCourseData } = useQuery({
    queryKey: ["topCourse"],
    queryFn: getTopCourses,
  });
  const filteredCourses =
    pointTab === "همه دوره‌ها"
      ? topCourseData
      : topCourseData.filter((tc) => tc.technologyList?.includes(pointTab));

  const swiperRef = useRef(null);

  return (
    <div
      style={{ background: "var(--gradient-main)" }}
      className="w-screen p-[100px] flex-center"
    >
      <motion.div
        className="gap-12 flex flex-col w-full items-center "
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className="flex flex-col items-center gap-3">
          <Tag
            title={"دوره های کلاس برتر"}
            textColor={"var(--color-dark-purple)"}
            bgColor={"var(--color-light-purple)"}
          />
          <h2 className="font-bold md:text-4xl text-lg">
            بهترین دوره‌های آموزشی جهان ما را کاوش کنید
          </h2>
          <h3 className=" text-responsive text-text-gray ">
            امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
          </h3>
          <Tabs pointTab={pointTab} setPointTab={setPointTab} />
        </div>

        {/* slider */}

        <div className="flex items-center justify-between w-[320px] md:w-full gap-2 ">
          <div className="hidden md:block">
            <BlueButton
              onClick={() => swiperRef.current?.slidePrev()}
              BtnIcon={<GoArrowLeft size={"20px"} className="m-2" />}
              width={"50px"}
              height={"50px"}
            />
          </div>
          {filteredCourses?.length === 0 ? (
            <div className="text-center text-text-gray py-10 text-xl">
              دوره‌ای یافت نشد
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              autoplay={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                400: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1500: { slidesPerView: 4 },
              }}
            >
              {filteredCourses?.map((product) => (
                <SwiperSlide key={product.courseId} className="!w-auto !h-auto">
                  <CourseProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="hidden md:block">
            <BlueButton
              onClick={() => swiperRef.current?.slideNext()}
              BtnIcon={<GoArrowRight size={"20px"} className="m-2" />}
              width={"50px"}
              height={"50px"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedCourses;
