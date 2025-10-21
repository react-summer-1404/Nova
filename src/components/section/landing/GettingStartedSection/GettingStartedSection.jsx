import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import {useNavigate } from 'react-router-dom'

const GettingStartedSection = () => {
  const navigate = useNavigate();
  return (
    <div className ='w-screen h-[850px] bg-[#282568]'>
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
        <div className ='flex justify-center mt-[25px] md:mt-[0px] md:flex md:justify-center gap-2 md:gap-6'>
          <div className ='items-center flex h-[140px] md:h-[220px] w-[45%] md:w-[37%] border bg-[#FFFFFF] border-[#BDBDBD] rounded-[15px] relative'>
            <img src="src/assets/images/SVG (5).png" className ='absolute md:top-[80px] top-[48px] md:left-[308px] left-[158px] w-[45%] md:w-[39%]'/>
            <img src="src/assets/images/7fe7f1624b741e2591310cbf55fa4c6afcf4b877.png" className ='absolute top-[15px] md:top-[17px] left-[167px] md:left-[286px] w-[42%] md:w-[39%]'/>
            <img src="src/assets/images/SVG-6.png" className ='absolute top-[12px] md:top-[9px] left-[255px] md:left-[439px] w-[5%] md:w-[6%]'/>
            <div className ='w-[45%] md:w-[52%] h-[130px] md:h-[150px] text-right flex flex-col gap-1 md:gap-5 items-end'>
              <p className ='font-[600] text-[18px] md:text-[20px] text-[#161439]'>دانشجو شوید</p>
              <h2 className ='font-[400] text-[10px] md:text-[11px] text-[#6D6C80] w-[65%]'>به میلیون ها نفر از سراسر جهان بپیوندید
              با هم یاد می گیرند یادگیری آنلاین.</h2>
              <button
                type="submit"
                className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive flex gap-1 p-0.5 text-[12px] px-4 items-center"
                onClick={() => {
                  navigate();
                }}
              >
                
                <FaArrowLeft />
                <span> درخواست</span>
              </button>
            </div>
          </div>
          
          <div className ='items-center flex h-[140px] md:h-[220px] w-[45%] md:w-[37%] border bg-[#FFFFFF] border-[#BDBDBD] rounded-[15px] relative'>
            <img src="src/assets/images/SVG (5).png" className ='absolute top-[48px] left-[158px] w-[45%] md:top-[81px] md:left-[308px] md:w-[39%]'/>
            <img src="src/assets/images/3da9724bd304df2f0f944c30163217afe198a0b6.png" className ='absolute top-[11px] md:top-[25px] left-[167px] md:left-[324px] w-[37%] md:w-[32%]'/>
            
            <div className ='w-[45%] md:w-[55%] h-[130px] md:h-[150px] text-right flex flex-col gap-1 md:gap-5 items-end'>
              <p className ='font-[600] text-[18px] md:text-[20px] text-[#161439]'>مربی شوید </p>
              <h2 className ='font-[400] text-[10px] md:text-[11px] text-[#6D6C80] w-[70%]'> 
              برای مثال بی اهمیت، کدام یک از ما متعهد می شویم
              ورزش بدنی بله این اتفاق در اینجا می افتد.  
              </h2>
              <button
                type="submit"
                className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive flex gap-1 p-0.5 text-[12px] px-4 items-center"
              >
                <FaArrowLeft />
                <span> درخواست</span>
              </button>
            </div>
          </div>
        </div>
      </div>

  )
}

export default GettingStartedSection
