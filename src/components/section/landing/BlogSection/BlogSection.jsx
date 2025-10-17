import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Card1 from './Card1';

const BlogSection = () => {
  return (
    <div style={{backgroundColor: "var(--color-light-gray)"}} className ='w-screen h-[680px] flex justify-center items-center '>
      <div className ='w-[80%] h-[70%] flex flex-col items-center gap-2 md:gap-3 md:mt-[0px] mt-[-147px]'>
        <button className ='p-1 rounded-[30px] bg-[#EFEEFE] text-[9px] md:text-[9px] text-[#5751E1] px-4 md:px-6'>
        اخبار و وبلاگ ها
        </button>
        <p style={{color: "var(--color-navy)"}} className ='font-[600] text-[24px] md:text-[28px]'>آخرین خبر ما</p>
        <div className ='md:w-full grid ml-[66px] md:ml-[0px] grid-cols-2 w-[100%] md:h-[85%] md:flex md:items-center text-right gap-2'>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
