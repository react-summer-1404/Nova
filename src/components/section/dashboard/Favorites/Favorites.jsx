import React, { useState } from 'react'
import CourseTableRow from '../MyComments/CourseTableRow/CourseTableRow'
import FavoritesCourse from './FavoritesCourse/FavoritesCourse';
import FavoritesNews from './favoritesNews/favoritesNews';

const Favorites = () => {
  const [activeTab, setActiveTab] = useState("Courses");
  return (
    <div className =' w-full flex items-center justify-center flex-col'>
      <div className='flex gap-4 mb-6'>
        <button 
          onClick={() => setActiveTab("courses")}
          className={(`px-4 py-2 rounded ${activeTab === "courses" ? "bg-blue-600": "bg-gray-200"}`)}
        >
          دوره ها
        </button>
        <button 
          onClick={() => setActiveTab("blogs")}
          className ={(`px-4 py-2 rounded ${activeTab === "blogs" ? "bg-blue-600": "bg-gray-200"}`)}
        >
          وبلاگ ها
        </button>
      </div>
      <div className ='w-[67%] '>
        <CourseTableRow
          items={[
            "نویسنده",
            "زمان انتشار", 
            "عنوان",            
          ]}
        />
      </div>
      <div className ='h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent'></div>
      
      {activeTab === "courses" && <FavoritesCourse/>}
      {activeTab === "blogs" && <FavoritesNews/>}
      
    </div>
  )
}


export default Favorites
