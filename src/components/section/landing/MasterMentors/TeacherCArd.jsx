import React from 'react'
import CommunicationApp from './CommunicationApp'
const TeacherCard = ({fullName, job, pictureAddress}) => {
  return (
        <div className ='flex flex-row-reverse items-center w-full max-w-md'>
          <img src={pictureAddress}  className ='h-[51%] md:w-[35%] md:h-[70%] rounded-full md:object-cover'/>
          <div className ='flex flex-col  md:gap-1 items-end md:mr-[12px] md:mt-[20px]'>
            <h3 className ='text-[14px] md:text-[18px]'>{fullName}</h3>
            <p style={{color: "var(--color-dark-purple)"}} className ='text-[9px] md:text-[10px]'>{job}</p>
            <div className ='flex justify-end pl-[77px]'>
              <CommunicationApp/>
            </div>            
          </div>
        </div>
  )
}

export default TeacherCard