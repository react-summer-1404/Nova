import React from 'react'
import CourseStatusList1 from '../../MyComments/CourseStatusList1/CourseStatusList1'
import CourseStatusList2 from '../../MyComments/CourseStatusList2/CourseStatusList2'
import { HiOutlineTrash } from 'react-icons/hi2'
import { IoEyeOutline } from 'react-icons/io5'
<<<<<<< Updated upstream
=======
import { useQuery } from '@tanstack/react-query'
import { favCourse } from '../../../../../servises/api/userPanel/getMyFavoriteCourses'
import CourseStatusList1 from '../FavoritesCourse/CourseStatusList1/CourseStatusList1'
>>>>>>> Stashed changes


const FavoritesCourse = () => {
    return (
        <div className='w-full mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
            <CourseStatusList1
                items1={[
                    {
                        icon: <div className='mt-[10px] lg:mt-0 flex gap-1 lg:gap-2 text-dark-purple'><HiOutlineTrash className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /> <IoEyeOutline className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /></div>
                    },
                    {
                        text: "دکتر محمدحسین بحر العلومی",
                        className : "text-[12px]"
                    },
                    {
                        text: "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷",
                    },
                    {
                        text: "دوره آموزشی"
                    },
                    {
                        text: "آموزش Tailwind css"
                    },
                    {
                        image : "src/assets/images/a8238b0e2a2ad596155db58db2c1cc01639763a1.png"
                    }
                ]}
            />
            <CourseStatusList2
                items2={[
                    {
                        icon: <div className='mt-[10px] lg:mt-0 flex gap-1 lg:gap-2 text-dark-purple'><HiOutlineTrash className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /> <IoEyeOutline className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /></div>
                    },
                    {
                        text: "محمد رضا ساداتی",
                    },
                    {
                        text: "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷"
                    },
                    {
                        text: "دوره آموزشی"
                    },
                    {
                        text: "آموزش NextJs"
                    },
                    {image : "src/assets/images/a8238b0e2a2ad596155db58db2c1cc01639763a1.png"  }                  
                ]}
            />
            <CourseStatusList1
                items1={[
                    {
                        icon: <div className='mt-[10px] lg:mt-0 flex gap-1 lg:gap-2 text-dark-purple'><HiOutlineTrash className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /> <IoEyeOutline className='w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]' /></div>
                    },
                    {
                        text: "دکتر محمدحسین بحر العلومی",
                        className : "lg:text-[12px] text-[10px] "
                    },
                    {
                        text: "۱۴۰۴/۰۳/۰۲ , ۱۶:۲۷",
                    },
                    {
                        text: "اخبار و مقالات",
                    },
                    {
                        text: "آموزش کامل کار با Figma",

                    },
                    {
                        image : "src/assets/images/a8238b0e2a2ad596155db58db2c1cc01639763a1.png"}
                ]}
            />
        </div>
    )
}

export default FavoritesCourse