import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const GettingStartedSection = () => {
  return (
    <div className ='w-screen h-[850px] bg-[#282568]'>
      <div className ='h-[550px]  flex justify-center items-center'>
        <div className ='h-[360px]  w-[1050px] flex flex-col items-center gap-3'>
          <button className ='w-[16%] h-[25px] rounded-[30px] font-[500] bg-[#5751E1] text-[12px] text-[#FFFFFF] '>
            چگونه سفر را شروع می کنیم
          </button>
          <p className ='w-[545px] h-[45px] font-[600] text-[28px] text-[#FFFFFF]'>!سفر یادگیری خود را از همین امروز شروع کنید</p>
          <h2 className ='w-[425px] h-[45px] font-[400] text-[13px] text-[#ACAACC]'>شهودی Groove اعضای maketeam صندوق ورودی را با هم به اشتراک گذاشت
          سازماندهی، اولویت بندی و.در این قسمت.
          </h2>
          <div className ='h-[180px]  w-full flex flex-row gap-4'>
            <div className ='w-[250px] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG.png" className ='size-20 ml-5'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>بازاریابی ایمیلی</p>
              <h2 className ='font-[400] w-[200px] text-[11px] text-[#ACAACC]'>بازاریابی ایمیلی ابزاری موثر برای ارتباط با مشتریان و افزایش فروش است.</h2>
            </div>
            <div className ='w-[250px] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (1).png" className ='size-20 ml-5'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>دریافت گواهی آنلاین</p>
              <h2 className ='font-[400] w-[200px] text-[11px] text-[#ACAACC]'>گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.</h2>
            </div>
            <div className ='w-[250px] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (2).png" className ='size-20 ml-5'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>هر چیزی یاد بگیر</p>
              <h2 className ='font-[400] w-[200px] text-[11px] text-[#ACAACC]'>هر چیزی یاد بگیرید و افق‌های جدیدی را به روی خودتان باز کنید.</h2>
            </div>
            <div className ='w-[250px] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (3).png" className ='size-20 ml-5'/>
              <p className ='font-[600] text-[14px] text-[#FFFFFF]'>با کارشناسان بیاموزید</p>
              <h2 className ='font-[400] w-[200px] text-[11px] text-[#ACAACC]'>با کارشناسان بیاموزید و از تجربیات آنها بهره‌مند شوید.</h2>
            </div>
          </div>
        </div>
      </div >
        <div className ='flex justify-center gap-6'>
          <div className ='items-center flex h-[220px] w-[510px] border bg-[#FFFFFF] border-[#BDBDBD] rounded-[15px] relative'>
            <img src="src/assets/images/SVG (5).png" className ='absolute top-[81px] left-[314px] w-[195px]'/>
            <img src="src/assets/images/7fe7f1624b741e2591310cbf55fa4c6afcf4b877.png" className ='absolute top-[14px] left-[286px] w-[200px]'/>
            <img src="src/assets/images/SVG-6.png" className ='absolute top-[8px] left-[442px] w-[31px]'/>
            <div className ='w-[270px] h-[150px] text-right flex flex-col gap-5 items-end'>
              <p className ='font-[600] text-[20px] text-[#161439]'>دانشجو شوید</p>
              <h2 className ='font-[400] text-[11px] text-[#6D6C80] w-[185px]'>به میلیون ها نفر از سراسر جهان بپیوندید
              با هم یاد می گیرند یادگیری آنلاین.</h2>
              <button
                type="submit"
                className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive flex gap-1 p-2 text-[12px] w-[99px]"
              >
                <FaArrowLeft className ='mt-[5px] ml-[7px]'/>
                <span> درخواست</span>
              </button>
            </div>
          </div>
          
          <div className ='items-center flex h-[220px] w-[510px] border bg-[#FFFFFF] border-[#BDBDBD] rounded-[15px] relative'>
            <img src="src/assets/images/SVG (5).png" className ='absolute top-[81px] left-[314px] w-[195px]'/>
            <img src="src/assets/images/3da9724bd304df2f0f944c30163217afe198a0b6.png" className ='absolute top-[25px] left-[324px] w-[160px]'/>
            
            <div className ='w-[270px] h-[150px] text-right flex flex-col gap-5 items-end'>
              <p className ='font-[600] text-[20px] text-[#161439]'>مربی شوید </p>
              <h2 className ='font-[400] text-[11px] text-[#6D6C80] w-[239px]'> 
              برای مثال بی اهمیت، کدام یک از ما متعهد می شویم
              ورزش بدنی بله این اتفاق در اینجا می افتد.  
              </h2>
              <button
                type="submit"
                className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive flex gap-1 p-2 text-[12px] w-[99px]"
              >
                <FaArrowLeft className ='mt-[5px] ml-[7px]'/>
                <span> درخواست</span>
              </button>
            </div>
          </div>
        </div>
      </div>

  )
}

export default GettingStartedSection
