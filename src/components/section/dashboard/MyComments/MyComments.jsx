import React, { useState } from 'react';
import CourseTableRow from './CourseTableRow/CourseTableRow';
// import CourseStatusList1 from '../Favorites/FavoritesNews/CourseStatusList1';
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import CourseComment from './CourseComment';
// import { NewsComment } from '../../../../servises/api/userPanel/getNewsComment';
import NewsComments from './NewsComment';
import DashboardAutoComplete from '../../../ui/DashboardAutoComplete/DashboardAutoComplete';

const Citems =[
  {key:"CourseComment",label:"دوره ها",},
  {key:"NewCom",label:"وبلاگ ها",}
]


const MyComments = () => {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <div className =' w-full flex items-center justify-center flex-col'>
      <div className='flex gap-4 mb-6'>
      
        <DashboardAutoComplete
        selected={activeTab||null}
        setSelected={setActiveTab ||null}
        options={Citems}
        />

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
