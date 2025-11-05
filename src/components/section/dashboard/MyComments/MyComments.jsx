import React from 'react'
import CourseTableRow from './CourseTableRow/CourseTableRow'

const MyComments = () => {
  return (
    <div className =' w-full flex items-center justify-center flex-col border '>
      <div className ='w-[80%] border'>
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
      <div className ='w-full h-[100px] mt-[12px] border'>

      </div>
    </div>
  )
}

export default MyComments
