import React, { useState } from 'react';
import CourseTableRow from './CourseTableRow/CourseTableRow';
import CourseComment from './CourseComment';
import NewsComments from './NewsComment';
import DashboardAutoComplete from '../../../ui/DashboardAutoComplete/DashboardAutoComplete';

const Citems =[
  {key:"CourseComment",label:"دوره ها",},
  {key:"NewCom",label:"وبلاگ ها",}
]


const MyComments = () => {
  const [activeTab, setActiveTab] = useState("CourseComment");
  return (
    <div className =' w-full flex items-center justify-center flex-col gap-5'>
      <div className='flex gap-4 mb-6  w-full justify-end'>
      
        <DashboardAutoComplete
        selected={activeTab||null}
        setSelected={setActiveTab ||null}
        options={Citems}
        />

      </div>
      <div className ='w-[64%]'>
        <CourseTableRow 
          items={[
            "زمان",
          "وضعیت",
            "عنوان", 
            "نویسنده",                      
          ]}
        />
      </div>
      <div className ='h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent'></div>
      {activeTab === "CourseComment" && <CourseComment />}
      {activeTab === "NewCom" && <NewsComments />}
    </div>
  )
}

export default MyComments
