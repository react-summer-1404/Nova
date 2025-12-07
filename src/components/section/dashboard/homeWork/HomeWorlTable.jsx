import React from 'react'
import CourseTableRow from '../MyComments/CourseTableRow/CourseTableRow'

const HomeWorlTable = () => {
  return (
    <div className =' w-full flex items-center justify-center flex-col gap-5'>
      <div className ='w-[65%] '>
        <CourseTableRow 
          items={[
            "تاریخ تکلیف",
            "توضیحات تکلیف",
            "عناون تکلیف",
            "نام گروه",            
          ]}
        />
      </div>
      <div className ='h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent'></div>
      
    </div>
  )
}

export default HomeWorlTable
