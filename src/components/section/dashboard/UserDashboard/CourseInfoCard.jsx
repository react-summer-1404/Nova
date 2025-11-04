import React from 'react'

const CourseInfoCard = ({icon,courseCount,subtext}) => {
  return (
    <div className='course-info-card px-4 py-2'>
        <span className=''>{icon}</span>
        <div className='flex flex-col'>
            <span className='text-right text-responsive'>{courseCount}</span>
            <span className='text-right text-responsive'>{subtext}</span>
        </div>
    </div>
  )
}

export default CourseInfoCard
