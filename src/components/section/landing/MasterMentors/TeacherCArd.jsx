import React from 'react'
import CommunicationApp from './CommunicationApp'
import { Link } from 'react-router-dom'
const TeacherCard = ({fullName, courseCounts, pictureAddress,id}) => {
  return (
        <div className ='flex flex-row-reverse items-center w-fit '>
          <img src={pictureAddress}  className ='md:w-[126px] w-[80px] h-[84px] md:h-[130px] rounded-full border border-gray-600'/>
          <div className ='flex flex-col md:gap-1 items-end md:mr-[12px] md:mt-[20px]'>
            <Link to={`/coachesDetail/${id}`}><h3 className ='text-[16px] md:text-[20px] font-semibold '>{fullName}</h3></Link>
            <p style={{color: "var(--color-dark-purple)"}} className ='text-[11px] md:text-[14px]'>{courseCounts}</p>
            <div className ='flex justify-end pl-[77px]'>
              <CommunicationApp/>
            </div>            
          </div>
        </div>
  )
}

export default TeacherCard