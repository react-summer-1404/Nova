import React from 'react'
import LabelAndDate from './LabelAndDate'

const BlogcardMainContent = ({ img, title, description }) => {
  return (
    <div className='flex justify-center items-center flex-col gap-2 text-[10px] sm:text-[16px]'>
      <img src={img} alt="blog image" className='w-[295px] h-[224px] sm:h-[224px]' />
      <h2 className="w-[60%] sm:w-full"> { title } </h2>
      <LabelAndDate />
      <p className="w-[60%] sm:w-full"> { description } </p>
    </div>
  )
}

export default BlogcardMainContent
