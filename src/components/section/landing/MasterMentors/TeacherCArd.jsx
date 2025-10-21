import React from 'react'
import CommunicationApp from './CommunicationApp'
const TeacherCard = ({name, job, imgUrl}) => {
  return (
        <div className ='p-4 flex flex-row-reverse leading-[18px] items-center justify-between gap-4 w-full max-w-md'>
          {/* <div className ='rounded-full w-28 h-28 bg-gradient-to-t from-[#E9F5F5] to-[#F7F6F9]'>
            
          </div> */}
          <img src={imgUrl}  className ='w-20 h-20 rounded-full object-cover '/>
          <div className ='flex flex-col text-right'>
            <h3 className ='font-semibold text-lg'>{name}</h3>
            <p className ='text-[10px] text-[#5751E1]'>{job}</p>
            <div className ='flex justify-end pl-[77px]'>
              <CommunicationApp/>
            </div>            
          </div>
        </div>
  )
}

export default TeacherCard