import React from 'react'

const CourseInfoCard = ({icon,courseCount,subtext}) => {
  return (
    <div className='course-info-card px-4 py-2 relative  '>
        <span className='absolute top-[-20px] left-3'>{icon}</span>
        <div className='flex flex-col gap-0.5'>
            <span className='text-right md:text-4xl text-sm text-dark-purple'>{courseCount}</span>
            <span className='text-right md:text-base text-base-gray text-[10px] '>{subtext}</span>
        </div>
    </div>
  )
}

export default CourseInfoCard
