import React from 'react'
import CommunicationApp from './CommunicationApp'
const TeacherCard = ({fullName, job, pictureAddress}) => {
  return (
        <div className ='flex flex-row-reverse items-center w-[100%] md:w-full'>
          <img src={pictureAddress}  className ='md:w-[126px] w-[80px] h-[84px] md:h-[130px] rounded-full'/>
          <div className ='flex flex-col md:gap-1 items-end md:mr-[12px] md:mt-[20px]'>
            <h3 className ='text-[16px] md:text-[20px]'>{fullName}</h3>
            <p style={{color: "var(--color-dark-purple)"}} className ='text-[11px] md:text-[14px]'>{job}</p>
            <div className ='flex justify-end pl-[77px]'>
              <CommunicationApp/>
            </div>            
          </div>
        </div>
  )
}

export default TeacherCard