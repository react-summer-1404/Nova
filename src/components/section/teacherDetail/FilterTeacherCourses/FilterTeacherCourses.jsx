import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import BlueButton from "../../../ui/button/BlueButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getCourses } from "../../../../servises/api/courses/coursList";
import { useQuery } from "@tanstack/react-query";
import "../../../../assets/styles/variable.css"
const FilterTeacherCourses = ({ TeacherId }) => {
  const itemsPerPage = 10;

  const apiParam = {
    PageNumber: 1,
    RowsOfPage: itemsPerPage,
    TeacherId: TeacherId,
  };

  const { data } = useQuery({
    queryKey: ["filTeacher",TeacherId],
    queryFn: () => getCourses(apiParam),
  });
  const swiperRef = useRef(null);
  const currentItems = data?.courseFilterDtos;

  return (
    <div className="w-full ">
      <div className=" flex justify-between items-center pb-7 ">
       <div className=" gap-2 hidden md:flex">
       <BlueButton
          width={"50px"}
          height={"50px"}
          onClick={() => swiperRef.current?.slidePrev()}
          BtnIcon={<FaArrowLeft size={20} md:size={25} className="mt-[5px]" />}
        />
        <BlueButton
          width={"50px"}
          height={"50px"}
          onClick={() => swiperRef.current?.slideNext()}
          BtnIcon={<FaArrowRight size={20} md:size={25} className="mt-[5px]" />}
        />
       </div>
       <div className="flex flex-col sm:items-end items-center gap-2">
       <h2 className="font-semibold text-3xl">دوره های من</h2>
<h3 style={{color:"var(--color-text-gray)"}} className="text-base sm:text-right">سلام! این یک پیام تستی است  سلام! این یک پیام تستی است  </h3>
       </div>
      </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          autoplay={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {currentItems?.map((product) => (
            <SwiperSlide key={`${product.courseId}-${product.title}`}>
              <CourseProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default FilterTeacherCourses;
