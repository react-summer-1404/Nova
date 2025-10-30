import React from 'react'
import { IoMdEye } from "react-icons/io";

const BlogcardView = ({viewNumber}) => {
  return (
    <div className='flex-center gap-1 text-[10px] sm:text-[16px]'>
      {viewNumber}
      <IoMdEye style={{color:"var(--color-soft-indigo)"}} className='w-4 sm:w-6 h-4 sm:h-6' />
    </div>
  )
}

export default BlogcardView
