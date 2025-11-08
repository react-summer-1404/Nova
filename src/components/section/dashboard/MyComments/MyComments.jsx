import React, { useState } from 'react';
import CourseTableRow from './CourseTableRow/CourseTableRow';
// import CourseStatusList1 from '../Favorites/FavoritesNews/CourseStatusList1';
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import CourseComment from './CourseComment';
import { NewsComment } from '../../../../servises/api/userPanel/getNewsComment';
import NewsComments from './NewsComment';



const MyComments = () => {
  const [activeTab, setActiveTab] = useState("Courses");
  return (
    <div className =' w-full flex items-center justify-center flex-col'>
      <div className='flex gap-4 mb-6'>
        <button 
          onClick={() => setActiveTab("CourseComment")}
          className={(`px-4 py-2 rounded ${activeTab === "CourseComment" ? "bg-blue-600": "bg-gray-200"}`)}
        >
          دوره ها
        </button>
        <button 
          onClick={() => setActiveTab("NewCom")}
          className ={(`px-4 py-2 rounded ${activeTab === "NewCom" ? "bg-blue-600": "bg-gray-200"}`)}
        >
          وبلاگ ها
        </button>
      </div>
      <div className ='w-[50%]'>
        <CourseTableRow 
          items={[
          "درباره",
            "دسته بندی", 
                      
          ]}
        />
      </div>
      <div className ='h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent'></div>
      {activeTab === "CourseComment" && <CourseComment/>}
      {activeTab === "NewCom" && <NewsComments/>}
    </div>
  )
}

export default MyComments
