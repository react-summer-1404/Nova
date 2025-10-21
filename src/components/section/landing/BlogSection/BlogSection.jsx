import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Card1 from './Card1';

const BlogSection = () => {
  return (
    <div style={{backgroundColor: "var(--color-light-gray)"}} className ='w-screen h-[680px] flex justify-center items-center '>
      <div className ='w-[80%]  h-[70%] flex flex-col items-center gap-3'>
        <button className ='w-[9%] h-[25px] rounded-[30px] bg-[#EFEEFE] text-[9px] text-[#5751E1] '>
        اخبار و وبلاگ ها
        </button>
        <p style={{color: "var(--color-navy)"}} className ='font-[600] text-[28px]'>آخرین خبر ما</p>
        <div className ='w-full  h-[85%] flex items-center text-right gap-5'>
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
