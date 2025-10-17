import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import "../../../assets/styles/global.css"

const NavigationSection = () => {
  return (
    <div style={{background:"var(--gradient-main)"}} className='w-screen p-5 '>
    <h1 className='text-4xl font-bold '>همه دوره ها</h1>
    <div className='flex flex-center gap-4 cursor-pointer'>
    <h2 className='text-[#5751E1]'>دوره های اموزشی</h2>
    <GoChevronLeft color='#6D6C80'/>
    <h2>صفحه اصلی</h2>
    </div>
  </div>
  )
}

export default NavigationSection
