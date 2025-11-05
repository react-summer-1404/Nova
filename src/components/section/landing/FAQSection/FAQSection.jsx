import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
const FAQSection = () => {
  return (
    <div style={{backgroundColor : "var(--color-light-gray)"}} className ='w-screen h-[500px] md:h-[750px] flex items-center justify-center'>      
      <div className =' md:h-[450px] md:w-2/4 flex flex-col items-center md:items-end text-right gap-1 md:gap-3 md:pr-10'>
        <button style={{color: "var(--color-dark-purple)",backgroundColor : "var(--color-light-purple)"}} className ='px-4 h-[25px] rounded-[30px] text-[9px] '>
          سوالات متداول
        </button>
        <span style={{color: "var(--color-navy)"}} className =' text-[18px] md:text-[20px] font-[700] w-[65%] md:w-[32%] leading-6]'>شروع به تمرین از مربیان حرفه ای جهان</span>
        <h2 style={{color: "var(--color-dark-gray)"}} className ='text-[9px] md:text-[10px] w-[67%] md:w-[51%] font-[400]'>
        Grooveصندوق ورودی مشترک بصری این کار را برای اعضای تیم آسان میکند 
        سازماندهی، اولویت بندی و.در این قسمت.
        </h2>
        <div style={{color: "var(--color-dark-purple)"}} className ='md:w-[57%] w-[70%] border-b-[1px] border-b-[#B2BBCC] h-[50px] md:h-[45px] font-[500] text-[14px] pt-1.5 flex flex-row-reverse md:flex md:flex-row-reverse justify-between'>نامبر وان می خواهد به شما چه چیزی دهد؟
          <IoIosArrowDown className ='size-4 mt-[5px]'/>
        </div>
        <h3 style={{color: "var(--color-light-blue)"}} className ='md:w-[57%] md:h-[45px] h-[50px] flex flex-row-reverse md:flex md:flex-row-reverse md:justify-between w-[70%] font-[400] text-[9px] md:text-[10px] pt-1.5'>
          صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از نوع و درهم گرفت.
        </h3>
        <div style={{color: "var(--color-text-gray)"}} className ='md:w-[57%] w-[70%] border-b-[1px] border-b-[#B2BBCC] h-[50px] md:h-[45px] font-[500] text-[14px] pt-1.5 flex flex-row-reverse md:flex md:flex-row-reverse justify-between'> چرا ما را برای تحصیل خود انتخاب کنید؟
          <FaChevronLeft className ='size-3 mt-[5px]'/>
        </div>
        <div style={{color: "var(--color-text-gray)"}} className ='md:w-[57%] w-[70%] border-b-[1px] border-b-[#B2BBCC] h-[50px] md:h-[45px] font-[500] text-[14px] pt-1.5 flex flex-row-reverse md:flex md:flex-row-reverse justify-between'>چگونه خدماتی را برای شما ارائه می کنیم؟
          <FaChevronLeft className ='size-3 mt-[5px]'/>
        </div>
        <div style={{color: "var(--color-text-gray)"}} className ='md:w-[57%] w-[70%] border-b-[1px] border-b-[#B2BBCC] h-[50px] md:h-[45px] font-[500] text-[14px] pt-1.5 flex flex-row-reverse md:flex md:flex-row-reverse justify-between'>آیا برای دوره خود مقرون به صرفه هستید؟
          <FaChevronLeft  className ='size-3 mt-[5px]'/>
        </div>
      </div>
      <div className ='hidden md:block w-2/4 h-[450px]'>
        <img src="src/assets/images/div.faq__img.png" className ='h-[450px] ml-[40px] md:ml-[68px]'/>
      </div>      
    </div>
  )
}

export default FAQSection
