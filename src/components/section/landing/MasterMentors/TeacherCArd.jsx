import React from 'react'
import CommunicationApp from './CommunicationApp'
const TeacherCard = ({name, job, imgUrl}) => {
  return (
        <div className ='flex flex-row-reverse items-center w-full max-w-md'>
          <img src={imgUrl}  className ='w-[35%] h-[70%] rounded-full object-cover '/>
          <div className ='flex flex-col gap-1 items-end mr-[12px] mt-[20px]'>
            <h3 className ='text-[18px]'>{name}</h3>
            <p className ='text-[10px] text-[#5751E1]'>{job}</p>
            <CommunicationApp/>                        
          </div>
        </div>
  )
}

export default TeacherCard