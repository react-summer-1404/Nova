import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import "../../assets/styles/global.css"

const CoursesPage = () => {
  return (
    <div>
      <div style={{background:"var(--gradient-main)"}} className='w-screen p-5 '>
        <h1 className='text-4xl font-bold '>همه دوره ها</h1>
        <div className='flex flex-center gap-4'>
        <h2 className='text-[#5751E1]'>دوره های اموزشی</h2>
        <GoChevronLeft color='#6D6C80'/>
        <h2>صفحه اصلی</h2>
        </div>
      </div>

      <div className='flex-center'>
        <div className='flex'>
          <input style={{background:"var(--color-bg-light)"}} className='text-right' type='text' placeholder='جستجو'/>
          <BsSearch style={{ color: "var(--color-white)", fontSize: "22px" ,  transform: "scaleX(-1)"}} />

          <span></span>
        </div>
        <div></div>
      </div>

      <div>main section</div>
      <div>numbers</div>
    </div>
  )
}

export default CoursesPage
