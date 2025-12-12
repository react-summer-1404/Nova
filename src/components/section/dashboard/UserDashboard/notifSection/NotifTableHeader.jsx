import React from 'react';


export const CourseTableRow = ({items}) => {
    return (
        <div className=' px-4  text-[12px] lg:text-[17px] font[600] text-navy  flex justify-between'>
            {items.map((items, index) =>(
                <div key={index}>{items}</div>
            ))}
        </div>
    )
    }

 

const NotifTableHeader = () => {
  return (
    <div className =' w-full flex items-center justify-center flex-col gap-2  '>
      <div className ='w-[64%]  '>
        <CourseTableRow 
          items={[
            "تاریخ پیام",
            "عنوان پیام",            
          ]}
        />
      </div>
      <div className ='h-1 w-full bg-gradient-to-r from-transparent via-golden-yellow to-transparent'></div>
      
    </div>
  )
}

export default NotifTableHeader
