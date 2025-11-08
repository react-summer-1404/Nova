import React from 'react'
import Security from "../../../../../assets/icons/security.svg"

const Subject = () => {
  return (
    <div className="flex gap-4  w-[300px] items-center">
    <img src={Security} className="course-info-card-icon course-info-card rounded-[10px]"/>
    <h2 className="font-semibold text-xl"> تنظیمات امنیتی</h2>
  </div>
  )
}

export default Subject
