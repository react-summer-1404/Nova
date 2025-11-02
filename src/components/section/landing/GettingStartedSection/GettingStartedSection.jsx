import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import {useNavigate } from 'react-router-dom'

const GettingStartedSection = () => {
  const navigate = useNavigate();
  return (
    <div className ='w-screen  bg-[#282568]'>
      <div className ='h-[550px] flex justify-center items-center '>
        <div className ='h-[360px] w-[77%] flex flex-col items-center gap-3'>
          <button className ='px-6 h-[25px] rounded-[30px] font-[500] bg-[#5751E1] text-[12px] text-[#FFFFFF] '>
            چگونه سفر را شروع می کنیم
          </button>
          <p className ='w-[43%] font-[600] text-[28px] text-[#FFFFFF]'>!سفر یادگیری خود را از همین امروز شروع کنید</p>
          <h2 className ='w-[36%] font-[400] text-[13px] text-[#ACAACC]'>شهودی Groove اعضای maketeam صندوق ورودی را با هم به اشتراک گذاشت
          سازماندهی، اولویت بندی و.در این قسمت.
          </h2>
          <div className ='w-full flex flex-row gap-4'>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG.png" className ='h-[30%] object-cover ml-5'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>بازاریابی ایمیلی</p>
              <h2 className ='font-[400] w-[64%] text-[11px] text-[#ACAACC]'>بازاریابی ایمیلی ابزاری موثر برای ارتباط با مشتریان و افزایش فروش است.</h2>
            </div>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (1).png" className ='h-[30%] ml-5 object-cover'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>دریافت گواهی آنلاین</p>
              <h2 className ='font-[400] w-[64%] text-[11px] text-[#ACAACC]'>گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.</h2>
            </div>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (2).png" className ='h-[30%] object-cover ml-5'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>هر چیزی یاد بگیر</p>
              <h2 className ='font-[400] w-[64%] text-[11px] text-[#ACAACC]'>هر چیزی یاد بگیرید و افق‌های جدیدی را به روی خودتان باز کنید.</h2>
            </div>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (3).png" className ='h-[30%] object-cover ml-5'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>با کارشناسان بیاموزید</p>
              <h2 className ='font-[400] w-[64%] text-[11px] text-[#ACAACC]'>با کارشناسان بیاموزید و از تجربیات آنها بهره‌مند شوید.</h2>
            </div>
          </div>
        </div>
      </div >
        
      </div>

  )
}

export default GettingStartedSection
