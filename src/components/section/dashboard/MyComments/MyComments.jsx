import React from 'react';
import CourseTableRow from './CourseTableRow/CourseTableRow';
<<<<<<< Updated upstream
import CourseStatusList1 from './CourseStatusList1/CourseStatusList1';
=======
// import CourseStatusList1 from '../Favorites/FavoritesNews/CourseStatusList1/';
>>>>>>> Stashed changes
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import CourseStatusList2 from './CourseStatusList2/CourseStatusList2';


const MyComments = () => {
  return (
    <div className =' w-full flex items-center justify-center flex-col'>
      <div className ='w-[80%] '>
        <CourseTableRow 
          items={[
            "زمان",
            "وضعیت",
            "دسته بندی",
            "دیدگاه در",            
          ]}
        />
      </div>
      <div className ='h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent'></div>
      <div className ='w-full mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
        <CourseStatusList1
          items1={[
            {
              icon : <div className ='mt-[10px] lg:mt-0 flex gap-1 lg:gap-2 text-dark-purple'><HiOutlineTrash  className ='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]'/> <IoEyeOutline className ='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /></div>
            },
            {
              text : "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷",
            },
            {
              text : "در انتظار تایید",
              className : "text-[#DE5204]"
            },
            {
              text: "دوره آموزشی"
            },
            {
              text: "آموزش Tailwind css"
            },
            {
              text: "#۱",
              className : "mt-[10px] lg:mt-0"
            }
          ]}
        />
        <CourseStatusList2
          items2={[
            {
              icon : <div className ='mt-[10px] lg:mt-0 flex gap-1 lg:gap-2 text-dark-purple'><HiOutlineTrash className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]'/> <IoEyeOutline className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]'/></div>
            },
            {
              text : "۱۴۰۴/۰۲/۰۸ , ۱۵:۲۸",
            },
            {
              text : "تایید  شده",
              className : "text-[#005A34]"
            },
            {
              text : "اخبار و مقالات",
            },
            {
              text : "آموزش کامل با Figma",
            
            },
            {
              text : "#۲",
              className : "mt-[10px] lg:mt-0"
            }
          ]}
        />
        <CourseStatusList1
          items1={[
            {
              icon : <div className ='mt-[10px] lg:mt-0 flex gap-1 lg:gap-2 text-dark-purple'><HiOutlineTrash className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]'/> <IoEyeOutline className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /></div>
            },
            {
              text : "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷",
            },
            {
              text : "در انتظار تایید",
              className : "text-[#DE5204]"
            },
            {
              text: "دوره آموزشی"
            },
            {
              text: "آموزش NextJs"
            },
            {
              text: "#۳",
              className : "mt-[10px] lg:mt-0"
            }
          ]}
        />
      </div>
    </div>
  )
}

export default MyComments
