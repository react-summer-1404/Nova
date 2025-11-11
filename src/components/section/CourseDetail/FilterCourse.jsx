
import CourseProductCard from '../../ui/card/CourseProductCard';
import { useQuery } from '@tanstack/react-query';
import { getCourses } from '../../../servises/api/courses/coursList';
import ErrorMessage from '../landing/BlogSection/ErrorMessage';
import { Spinner } from "@heroui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import { useRef } from 'react';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
const FilterCourse = ({courseLevelId}) => { 
  const itemsPerPage = 10;
  const apiParam = {
    PageNumber: 1,
    RowsOfPage: itemsPerPage,
    courseLvlId: courseLevelId
  }
  const {data, isError, isLoading, error} = useQuery({
    queryKey: [
      "filCourses",
    ],
    
    queryFn: () => getCourses(apiParam),
  });
  const swiperRef = useRef(null);

  const currentItems = data?.courseFilterDtos;
  
  if (isLoading){
    return(
      <div className="flex items-end min-h-[50vh]  min-w-[80vh] ">
        <Spinner
          size="lg"
          labelColor="primary"
          label="درحال بارگزاری محصولاتیم"
          variant="wave"
        />
      </div>
    )
  }
  if (isError){
    return <ErrorMessage message={error?.message||"خطای ناشناخته ای رخ داده"}/>
  }
  
  return (
    
    <div className ='flex flex-wrap gap-y-5 gap-2 items-center'>
            {!isLoading && !isError && currentItems?.length === 0 && (
              <h2 className="text-[#6D6C80] text-left text-2xl font-semibold flex items-end min-h-[50vh]  min-w-[100vh]">
                دوره مرتبط یافت نشد
              </h2>
            )}

            <div className='relative'>
              <button onClick={() => swiperRef.current?.slidePrev()}
                className ='md:w-[50px] md:h-[50px] w-[43px] h-[40px] rounded-full border-[#1C1A4A] sm:left-[295px] lg:left-0 left-[415px] absolute bottom-[40px]'
                style={{backgroundColor: "var(--color-dark-purple)", boxShadow: "-3.6px 2.4px 0px 0px #23232B"}}
              >
                <FaArrowLeft size={20} md:size={25} className='mt-[5px] ml-[10px]'/>
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}
                className ='md:w-[50px] md:h-[50px] w-[43px] h-[40px] rounded-full border-[#1C1A4A] sm:left-[350px] absolute left-[470px] bottom-[40px] lg:left-[60px]'
                style={{backgroundColor: "var(--color-dark-purple)", boxShadow: "-3.6px 2.4px 0px 0px #23232B"}}
              >
                <FaArrowRight size={20} md:size={25} className='mt-[5px] ml-[10px]'/>
              </button>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              autoplay={true}
              breakpoints={{
                360: {slidesPerView:1},
                640: {slidesPerView:2},                
                1024:{slidesPerView:3}
              }}
            >

            {currentItems?.map((product) => (
              <SwiperSlide key={product?.courseId}>                
                <CourseProductCard product={product}/>                
              </SwiperSlide>
            ))}
            
            </Swiper>
            
            
              
          </div>

    
  )
}
export default FilterCourse;