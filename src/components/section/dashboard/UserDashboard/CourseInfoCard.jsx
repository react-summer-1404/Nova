import React from 'react'

const CourseInfoCard = ({icon,courseCount,subtext}) => {
  return (
    <div className='course-info-card px-4 py-2'>
        <span className=''>{icon}</span>
        <div className='flex flex-col gap-0.5'>
            <span className='text-right text-[22px] text-dark-purple'>{courseCount}</span>
            <span className='text-right text-[14px] text-base-gray'>{subtext}</span>
        </div>
    </div>
  )
}

export default CourseInfoCard
