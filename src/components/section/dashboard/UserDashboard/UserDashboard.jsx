import React from 'react'
import CourseInfoCard from './CourseInfoCard'
import { CiShoppingCart } from "react-icons/ci";
import { PiGraduationCapThin } from "react-icons/pi";
import ProfileProgrgressBar from './ProfileProgrgressBar';
import BlogsAndNewsBox from './BlogsAndNewsBox';
import CurrentCourseCard from './CurrentCourseCard';

const UserDashboard = () => {
  return (
    <div className='flex flex-col gap-17'>
      <div className='flex-right gap-6'>
        <ProfileProgrgressBar />
        <CourseInfoCard icon={<CiShoppingCart className='course-info-card-icon rounded-[50px]'/>} courseCount={"۲ دوره"} subtext={"رزرو کرده اید"}/>
        <CourseInfoCard icon={<PiGraduationCapThin className='course-info-card-icon rounded-[50px]'/>} courseCount={"4 دوره"} subtext={"شرکت کرده اید"}/>
      </div>
      <div className='flex-center'>
        <BlogsAndNewsBox />
      </div>
      <div className='w-full flex flex-col justify-end items-end gap-5'>
        <h4>دوره های در حال برگزاری:</h4>
        <CurrentCourseCard />
      </div>
    </div>
  )
}

export default UserDashboard
