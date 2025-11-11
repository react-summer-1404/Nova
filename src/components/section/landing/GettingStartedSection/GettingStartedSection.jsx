import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import {useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { scrollVariant } from '../../../../configs/frameMorion/Scroll';


const GettingStartedSection = () => {
  const navigate = useNavigate();
  return (
    <div className ='w-screen md:h-[1000px] h-[750px] bg-[#282568]'>
      <motion.div className ='h-[550px] flex justify-center items-center '
      variants={scrollVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
        <div className ='md:h-[360px] md:mb-[0px] mb-[120px] h-[300px] w-[77%] flex flex-col items-center gap-3'>
          <button className =' p-1.5 px-5 md:px-7 rounded-[30px] font-[500] bg-[#5751E1] text-[12px] md:text-[16px] text-[#FFFFFF] '>
            چگونه سفر را شروع می کنیم
          </button>
          <p className ='w-[43%] font-[600] text-[26px] md:text-[36px] text-[#FFFFFF]'>!سفر یادگیری خود را از همین امروز شروع کنید</p>
          <h2 className ='w-[44%] font-[400] text-[12px] md:text-[16px] text-[#ACAACC]'>شهودی Groove اعضای maketeam صندوق ورودی را با هم به اشتراک گذاشت
          سازماندهی، اولویت بندی و.در این قسمت.
          </h2>
          <div className ='w-full flex flex-row gap-4 md:mt-[30px] mt-[15px]'>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG.png" className ='h-[25%] md:h-[30%] object-cover ml-5'/>
              <p className ='font-[600] text-[15px] md:text-[20px] text-[#FFFFFF]'>بازاریابی ایمیلی</p>
              <h2 className ='font-[400] w-[100%] md:w-[100%] text-[11px] md:text-[16px] text-[#ACAACC]'>بازاریابی ایمیلی ابزاری موثر برای ارتباط با مشتریان و افزایش فروش است.</h2>
            </div>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (1).png" className ='h-[25%] md:h-[30%] ml-5 object-cover'/>
              <p className ='font-[600] text-[15px] md:text-[20px] text-[#FFFFFF]'>دریافت گواهی آنلاین</p>
              <h2 className ='font-[400] w-[100%] md:w-[93%] text-[11px] md:text-[16px] text-[#ACAACC]'>گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.</h2>
            </div>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (2).png" className ='h-[25%] md:h-[30%] object-cover ml-5'/>
              <p className ='font-[600] text-[15px] md:text-[20px] text-[#FFFFFF]'>هر چیزی یاد بگیر</p>
              <h2 className ='font-[400] w-[100%] md:w-[84%] text-[11px] md:text-[16px] text-[#ACAACC]'>هر چیزی یاد بگیرید و افق‌های جدیدی را به روی خودتان باز کنید.</h2>
            </div>
            <div className ='w-[24%] flex flex-col items-center gap-3'>
              <img src="src/assets/images/SVG (3).png" className ='h-[25%] md:h-[30%] object-cover ml-5'/>
              <p className ='font-[600] text-[15px] md:text-[20px] text-[#FFFFFF]'>با کارشناسان بیاموزید</p>
              <h2 className ='font-[400] w-[100%] md:w-[70%] text-[11px] md:text-[16px] text-[#ACAACC]'>با کارشناسان بیاموزید و از تجربیات آنها بهره‌مند شوید.</h2>
            </div>
          </div>
        </div>
      </motion.div >
        <motion.div className ='flex justify-center gap-2 md:gap-6 mt-[-10px] md:mt-[100px]'
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}>
          <div className ='flex items-center h-[140px] md:h-[220px] w-[45%] md:w-[39%] border bg-[#FFFFFF] border-[#BDBDBD] rounded-[15px] relative'>
            <img src="src/assets/images/SVG (5).png" className ='absolute md:top-[80px] top-[48px] md:left-[335px] left-[158px] w-[45%] md:w-[37%]'/>
            <img src="src/assets/images/7fe7f1624b741e2591310cbf55fa4c6afcf4b877.png" className ='absolute top-[15px] md:top-[17px] left-[160px] md:left-[325px] w-[42%] md:w-[37%]'/>
            <img src="src/assets/images/SVG-6.png" className ='absolute top-[9px] md:top-[5px] left-[245px] md:left-[469px] w-[5%] md:w-[6%]'/>
            <div className ='w-[53%] md:w-[57%] h-[110px] md:h-[170px] text-right flex flex-col gap-1 md:gap-5 items-end'>
              <p className ='font-[600] text-[18px] md:text-[28px] text-[#161439]'>دانشجو شوید</p>
              <h2 className ='font-[400] text-[10px] md:text-[16px] text-[#6D6C80] w-[100%] md:w-[85%]'>به میلیون ها نفر از سراسر جهان بپیوندید
              با هم یاد می گیرند یادگیری آنلاین.</h2>
              <button
                type="submit"
                className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive flex gap-1 p-1 px-3 md:px-5 items-center"
                onClick={() => {
                  navigate();
                }}
              >
                
                <FaArrowLeft />
                <span className ='text-[12px] md:text-[16px]'> درخواست</span>
              </button>
            </div>
          </div>
          
          <div className ='items-center flex h-[140px] md:h-[220px] w-[45%] md:w-[39%] border bg-[#FFFFFF] border-[#BDBDBD] rounded-[15px] relative'>
            <img src="src/assets/images/SVG (5).png" className ='absolute top-[48px] left-[158px] w-[45%] md:top-[80px] md:left-[336px] md:w-[37%]'/>
            <img src="src/assets/images/3da9724bd304df2f0f944c30163217afe198a0b6.png" className ='absolute top-[11px] md:top-[13px] left-[165px] md:left-[347px] w-[37%] md:w-[32%]'/>
            
            <div className ='w-[53%] md:w-[61%] h-[130px] md:h-[150px] text-right flex flex-col justify-center gap-1 p-1 md:gap-5 items-end'>
              <p className ='font-[600] text-[18px] md:text-[28px] text-[#161439]'>مربی شوید </p>
              <h2 className ='font-[400] text-[10px] md:text-[16px] text-[#6D6C80] w-[100%] md:w-[100%]'> 
              برای مثال بی اهمیت، کدام یک از ما متعهد می شویم
              ورزش بدنی بله این اتفاق در اینجا می افتد.  
              </h2>
              <button
                type="submit"
                className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive  flex gap-1 p-1 md:p-1 px-3 md:px-5 items-center"
              >
                <FaArrowLeft />
                <span className ='md:text-[16px] text-[12px]'> درخواست</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

  )
}

export default GettingStartedSection