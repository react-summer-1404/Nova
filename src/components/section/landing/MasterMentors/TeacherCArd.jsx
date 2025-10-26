import React from 'react'
import CommunicationApp from './CommunicationApp'
const TeacherCard = ({fullName, job, pictureAddress}) => {
  return (
        <div className ='p-4 flex flex-row-reverse leading-[18px] items-center justify-between gap-4 w-full max-w-md'>
          <img src={pictureAddress}  className ='w-20 h-20 rounded-full object-cover '/>
          <div className ='flex flex-col text-right'>
            <h3 className ='font-semibold text-lg'>{fullName}</h3>
            <p className ='text-[10px] text-[#5751E1]'>{job}</p>
            <div className ='flex justify-end pl-[77px]'>
              <CommunicationApp/>
            </div>            
          </div>
        </div>
  )
}

export default TeacherCard