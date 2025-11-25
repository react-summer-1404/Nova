import React, { useState } from 'react'
import CourseTableRow from '../MyComments/CourseTableRow/CourseTableRow'
import FavoritesCourse from './FavoritesCourse/FavoritesCourse';
import FavoritesNews from './favoritesNews/favoritesNews';
import DashboardAutoComplete from '../../../ui/DashboardAutoComplete/DashboardAutoComplete';

const faveItems =[
  {key:"courses",label:"دوره ها",},
  {key:"blogs",label:"وبلاگ ها",}
]
const Favorites = () => {
  const [activeTab, setActiveTab] = useState("Courses");
  return (
    <div className =' w-full flex items-center justify-center flex-col'>
      <div className='flex gap-4 mb-6  w-full justify-end'>
        <DashboardAutoComplete
        selected={activeTab}
        setSelected={setActiveTab}
        options={faveItems}
        />
      </div>
      <div className ='w-[67%] '>
        <CourseTableRow
          items={[
            "زمان انتشار", 
            "نویسنده",
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
