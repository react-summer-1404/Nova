import React from 'react';
import CourseTableRow from './CourseTableRow/CourseTableRow';





const MyComments = () => {
  return (
    <div className =' w-full flex items-center justify-center flex-col'>
      <div className ='w-[65%] '>
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
        
      </div>
    </div>
  )
}

export default MyComments
