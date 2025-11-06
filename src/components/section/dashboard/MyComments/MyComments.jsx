import React from 'react';
import CourseTableRow from './CourseTableRow/CourseTableRow';
import CourseStatusList1 from './CourseStatusList1/CourseStatusList1';
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
      <div className ='w-full mt-[12px] gap-3 flex flex-col'>

        <CourseStatusList1
          items1={[
            {
              icon : <div className ='flex gap-2 text-dark-purple'><HiOutlineTrash size={18}/> <IoEyeOutline size={18} /></div>
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
              text: "#۱"
            }
          ]}
        />
        <CourseStatusList2
          items2={[
            {
              icon : <div className ='flex gap-2 text-dark-purple'><HiOutlineTrash size={18}/> <IoEyeOutline size={18} /></div>
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
              text : "آموزش کامل کار با Figma",
            },
            {
              text : "#۲",
            }
          ]}
        />
        <CourseStatusList1
          items1={[
            {
              icon : <div className ='flex gap-2 text-dark-purple'><HiOutlineTrash size={18}/> <IoEyeOutline size={18} /></div>
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
              text: "#۳"
            }
          ]}
        />
      </div>
    </div>
  )
}

export default MyComments
